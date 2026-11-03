import { getLanguage, translateText, translateNode } from "@/lib/i18n";
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
import { insertConsultationRequestSchema, type InsertConsultationRequest } from "@shared/consultation";

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

  const createConsultationRequest = useMutation({
    mutationFn: async (data: InsertConsultationRequest) => {
      const response = await apiRequest(
        "POST",
        "/api/consultation-requests",
        data,
      );
      const result = await response.json();
      if (result.success !== true) throw new Error(result.message || "Randevu talebiniz alınamadı. Lütfen tekrar deneyin.");
      return result;
    },
    onSuccess: () => {
      toast({
        title: "Başarılı!",
        description:
          "Randevu talebiniz başarıyla gönderildi. En kısa sürede size dönüş yapacağız.",
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
    onError: (error: Error) => {
      toast({
        title: "Hata!",
        description: error.message || "Randevu talebiniz alınamadı. Lütfen tekrar deneyin.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.fullName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.program ||
      !formData.message.trim()
    ) {
      toast({
        title: "Eksik Bilgi",
        description: "Lütfen tüm alanları doldurun.",
        variant: "destructive",
      });
      return;
    }

    const result = insertConsultationRequestSchema.safeParse({ ...formData, language: getLanguage() });
    if (!result.success) {
      toast({ title: "Geçersiz Bilgi", description: result.error.issues[0].message, variant: "destructive" });
      return;
    }
    createConsultationRequest.mutate(result.data);
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
          >{translateText(" İletişime Geçin ")}</h2>
          <p
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            data-testid="contact-description"
          >{translateText(" Uzman ekibimizle ücretsiz danışmanlık randevunuzu alın ")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Card>
            <CardContent className="p-8">
              <h3
                className="text-2xl font-semibold text-foreground mb-6"
                data-testid="contact-form-title"
              >{translateText(" Randevu Talep Formu ")}</h3>
              <form noValidate onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-foreground mb-2"
                    >{translateText(" Ad Soyad ")}</Label>
                    <Input
                      id="fullName"
                      autoComplete="name"
                      maxLength={120}
                      type="text"
                      placeholder={translateText("Adınızı girin")}
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
                    >{translateText(" Telefon ")}</Label>
                    <Input
                      id="phone"
                      autoComplete="tel"
                      maxLength={32}
                      type="tel"
                      placeholder={translateText("Telefon numaranız")}
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
                  >{translateText(" E-posta ")}</Label>
                  <Input
                    id="email"
                    autoComplete="email"
                    maxLength={254}
                    type="email"
                    placeholder={translateText("E-posta adresiniz")}
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
                  >{translateText(" İlgilendiğiniz Program ")}</Label>
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
                      <SelectValue placeholder={translateText("Program seçin")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="muhendislik">{translateText("Mühendislik")}</SelectItem>
                      <SelectItem value="isletme">{translateText("İşletme")}</SelectItem>
                      <SelectItem value="tip">{translateText("Tıp")}</SelectItem>
                      <SelectItem value="hukuk">{translateText("Hukuk")}</SelectItem>
                      <SelectItem value="diger">{translateText("Diğer")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >{translateText(" Mesajınız ")}</Label>
                  <Textarea
                    id="message"
                    maxLength={5000}
                    rows={4}
                    placeholder={translateText("Sorularınız ve detaylar...")}
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
                    {translateNode(createConsultationRequest.isPending
                      ? "Gönderiliyor..."
                      : "Randevu Talep Et")}
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
              >{translateText(" İletişim Bilgileri ")}</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{translateText("Adres")}</h4>
                    <p
                      className="text-muted-foreground"
                      data-testid="contact-address"
                    >{translateText(" Levent Mahallesi, Büyükdere Caddesi ")}<br />{translateText(" No: 185, Kanyon Ofis Binası ")}<br />{translateText(" 34394 Şişli, İstanbul ")}</p>
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
                    <h4 className="font-semibold text-foreground">{translateText("WhatsApp")}</h4>
                    <p
                      className="text-muted-foreground"
                      data-testid="text-whatsapp"
                    >
                      <a
                        href={"https://wa.me/491723959721?text=" + encodeURIComponent(translateText("Merhaba bilgi almak istiyorum"))}
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
                    <h4 className="font-semibold text-foreground">{translateText("E-posta")}</h4>
                    <a
                      href="mailto:info@envoedugermany.com"
                      className="text-muted-foreground hover:text-secondary hover:underline transition-all"
                      data-testid="contact-email"
                    >{translateText(" info@envoedugermany.com ")}</a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">{translateText(" Çalışma Saatleri ")}</h4>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>{translateText("Pazartesi - Cuma:")}</span>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>{translateText("Cumartesi:")}</span>
                  <span>10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>{translateText("Pazar:")}</span>
                  <span>{translateText("Kapalı")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
