import { useState } from "react";
import { MapPin, Phone, Mail, NotebookPen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { InsertConsultationRequest } from "@shared/schema";
import emailjs from "@emailjs/browser"; // EmailJS kütüphanesi eklendi

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    program: "",
    message: "",
  });

  // E-posta gönderme fonksiyonu
  const sendEmailNotification = (data: any) => {
    const templateParams = {
      from_name: data.fullName,
      from_email: data.email,
      phone: data.phone,
      program: data.program,
      message: data.message,
      to_email: "info@envoedugermany.com",
    };

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS credentials not configured");
      return;
    }

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((result) => {
        console.log("E-posta başarıyla gönderildi:", result.text);
      })
      .catch((error) => {
        console.error("E-posta gönderim hatası:", error);
      });
  };

  const createConsultationRequest = useMutation({
    mutationFn: async (data: InsertConsultationRequest) => {
      const response = await apiRequest(
        "POST",
        "/api/consultation-requests",
        data,
      );
      return response.json();
    },
    onSuccess: (data) => {
      // Veritabanı kaydı başarılı olduğunda e-posta gönderimini tetikle
      sendEmailNotification(formData);

      toast({
        title: "Başarılı!",
        description:
          "Randevu talebiniz alınmıştır. Bilgiler e-posta ile iletildi.",
      });
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        program: "",
        message: "",
      });
      queryClient.invalidateQueries({
        queryKey: ["/api/consultation-requests"],
      });
    },
    onError: () => {
      toast({
        title: "Hata!",
        description: "Randevu talebiniz alınamadı. Lütfen tekrar deneyin.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.program ||
      !formData.message
    ) {
      toast({
        title: "Eksik Bilgi",
        description: "Lütfen tüm alanları doldurun.",
        variant: "destructive",
      });
      return;
    }

    createConsultationRequest.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold text-foreground mb-4"
            data-testid="contact-title"
          >
            İletişime Geçin
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            data-testid="contact-description"
          >
            Uzman ekibimizle ücretsiz danışmanlık randevunuzu alın
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Card>
            <CardContent className="p-8">
              <h3
                className="text-2xl font-semibold text-foreground mb-6"
                data-testid="contact-form-title"
              >
                Randevu Talep Formu
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Ad Soyad
                    </Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Adınızı girin"
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      data-testid="input-full-name"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Telefon
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Telefon numaranız"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      data-testid="input-phone"
                    />
                  </div>
                </div>
                <div>
                  <Label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    E-posta
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="E-posta adresiniz"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="program"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    İlgilendiğiniz Program
                  </Label>
                  <Select
                    value={formData.program}
                    onValueChange={(value) =>
                      handleInputChange("program", value)
                    }
                  >
                    <SelectTrigger
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      data-testid="select-program"
                    >
                      <SelectValue placeholder="Program seçin" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="muhendislik">Mühendislik</SelectItem>
                      <SelectItem value="isletme">İşletme</SelectItem>
                      <SelectItem value="tip">Tıp</SelectItem>
                      <SelectItem value="hukuk">Hukuk</SelectItem>
                      <SelectItem value="diger">Diğer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Mesajınız
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Sorularınız ve detaylar..."
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    data-testid="textarea-message"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
                  disabled={createConsultationRequest.isPending}
                  data-testid="button-submit-consultation"
                >
                  <NotebookPen className="w-5 h-5" />
                  <span>
                    {createConsultationRequest.isPending
                      ? "Gönderiliyor..."
                      : "Randevu Talep Et"}
                  </span>
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h3
                className="text-2xl font-semibold text-foreground mb-6"
                data-testid="contact-info-title"
              >
                İletişim Bilgileri
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Adres</h4>
                    <p
                      className="text-muted-foreground"
                      data-testid="contact-address"
                    >
                      Levent Mahallesi, Büyükdere Caddesi
                      <br />
                      No: 185, Kanyon Ofis Binası
                      <br />
                      34394 Şişli, İstanbul
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="h-6 w-6 text-accent fill-current"
                    >
                      <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.5 2.1 7.9L0 32l8.3-2.6c2.3 1.3 5 2.1 7.7 2.1 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5zm0 28.2c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.9 1.5 1.6-4.8-.3-.5c-1.2-2-1.8-4.3-1.8-6.7C3.4 8.4 9.4 2.4 16 2.4S28.6 8.4 28.6 16 22.6 28.7 16 28.7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">WhatsApp</h4>
                    <p
                      className="text-muted-foreground"
                      data-testid="text-whatsapp"
                    >
                      <a
                        href="https://wa.me/4915214885048?text=Merhaba%20bilgi%20almak%20istiyorum"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        +49 172 3959721
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">E-posta</h4>
                    <a
                      href="mailto:info@envoedugermany.com"
                      className="text-muted-foreground hover:text-secondary hover:underline transition-all"
                      data-testid="contact-email"
                    >
                      info@envoedugermany.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">
                Çalışma Saatleri
              </h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Pazartesi - Cuma:</span>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Cumartesi:</span>
                  <span>10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Pazar:</span>
                  <span>Kapalı</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
