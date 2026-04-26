import { useState, useEffect } from "react";
import { MapPin, Mail, NotebookPen } from "lucide-react";
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

export default function ContactSection() {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    program: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submit başladı");

    if (
      !formData.fullName ||
      !formData.email ||
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

    setIsLoading(true);
    console.log("Gönderilecek data:", formData);

    try {
      const response = await fetch("/api/consultation-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", response.status);
      const result = await response.json();
      console.log("Response data:", result);

      if (response.ok && result.success) {
        toast({
          title: "Başarılı!",
          description: result.message || "Randevu talebiniz başarıyla gönderildi.",
        });
        
        // Form reset
        setFormData({
          fullName: "",
          email: "",
          program: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Beklenmedik hata");
      }
    } catch (error) {
      console.error("Form gönderim hatası:", error);
      
      let errorMessage = "Randevu talebi gönderilemedi. Lütfen tekrar deneyin.";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      toast({
        title: "Hata!",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            İletişime Geçin
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uzman ekibimizle ücretsiz danışmanlık randevunuzu alın
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Randevu Talep Formu
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label
                    htmlFor="fullName"
                    className="mb-2 block text-sm font-medium"
                  >
                    Ad Soyad
                  </Label>
                  <Input
                    id="fullName"
                    placeholder="Adınızı girin"
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                  />
                </div>
                <div>
                  <Label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
                    E-posta
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="E-posta adresiniz"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
                <div>
                  <Label
                    htmlFor="program"
                    className="mb-2 block text-sm font-medium"
                  >
                    İlgilendiğiniz Program
                  </Label>
                  <Select
                    value={formData.program}
                    onValueChange={(v) => handleInputChange("program", v)}
                  >
                    <SelectTrigger>
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
                    className="mb-2 block text-sm font-medium"
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
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full py-4 flex items-center justify-center space-x-2"
                  disabled={isLoading}
                >
                  <NotebookPen className="w-5 h-5" />
                  <span>
                    {isLoading
                      ? "Gönderiliyor..."
                      : "Randevu Talep Et"}
                  </span>
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              İletişim Bilgileri
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Adres</h4>
                  <p className="text-muted-foreground">
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
                  <h4 className="font-semibold">WhatsApp</h4>
                  <a
                    href="https://wa.me/4915214885048"
                    target="_blank"
                    className="text-muted-foreground hover:underline"
                  >
                    +49 1521 4885048
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold">E-posta</h4>
                  <a
                    href="mailto:info@envoedugermany.com"
                    className="text-muted-foreground hover:text-secondary hover:underline transition-all"
                  >
                    info@envoedugermany.com
                  </a>
                </div>
              </div>
            </div>

            {/* Çalışma Saatleri */}
            <div>
              <h4 className="font-semibold mb-4">Çalışma Saatleri</h4>
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
