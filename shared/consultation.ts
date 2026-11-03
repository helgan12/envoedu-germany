import { z } from "zod";

// Shared validation keeps browser and API rules in sync.
export const insertConsultationRequestSchema = z.object({
  fullName: z.string().trim().min(1, "Lütfen adınızı ve soyadınızı girin.").max(120, "Ad soyad en fazla 120 karakter olabilir."),
  email: z.string().trim().max(254).email("Lütfen geçerli bir e-posta adresi girin."),
  phone: z.string().trim().min(1, "Lütfen telefon numaranızı girin.").max(32)
    .regex(/^\+?[\d\s().-]+$/, "Lütfen geçerli bir telefon numarası girin.")
    .refine(value => {
      const digits = value.replace(/\D/g, "").length;
      return digits >= 7 && digits <= 15;
    }, "Lütfen geçerli bir telefon numarası girin."),
  program: z.string().trim().min(1, "Lütfen bir program seçin.").max(100),
  message: z.string().trim().min(1, "Lütfen mesajınızı yazın.").max(5000, "Mesajınız en fazla 5000 karakter olabilir."),
  language: z.enum(["tr", "en"]).optional(),
});

export type InsertConsultationRequest = z.infer<typeof insertConsultationRequestSchema>;
