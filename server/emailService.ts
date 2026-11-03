import nodemailer from 'nodemailer';
import type { InsertConsultationRequest } from '../shared/consultation';

// HTML escape fonksiyonu - XSS koruması için
export function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export function getSmtpOptions() {
  const port = Number(process.env.SMTP_PORT || 587);
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error("Invalid SMTP_PORT");
  return {
    host: process.env.SMTP_HOST || "smtp.ionos.de",
    port,
    secure: process.env.SMTP_SECURE === undefined ? port === 465 : process.env.SMTP_SECURE === "true",
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    connectionTimeout: 5000,
    greetingTimeout: 5000,
    socketTimeout: 10000,
  };
}

function getTransporter() {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw Object.assign(new Error("SMTP credentials are not configured"), { code: "SMTP_NOT_CONFIGURED" });
  }
  return nodemailer.createTransport(getSmtpOptions());
}

export async function sendConsultationRequest(consultationData: InsertConsultationRequest): Promise<void> {
  // XSS koruması için tüm kullanıcı verilerini escape et
  const emailContent = `
    <h2>Yeni Randevu Talebi</h2>
    <p><strong>Ad Soyad:</strong> ${escapeHtml(consultationData.fullName)}</p>
    <p><strong>Telefon:</strong> ${escapeHtml(consultationData.phone)}</p>
    <p><strong>Email:</strong> ${escapeHtml(consultationData.email)}</p>
    <p><strong>Program:</strong> ${escapeHtml(consultationData.program)}</p>
    <p><strong>Mesaj:</strong></p>
    <p>${consultationData.message ? escapeHtml(consultationData.message) : 'Mesaj bulunmamaktadır.'}</p>
    
    <hr>
    <p><small>Bu email EnvoEdu Germany web sitesi üzerinden gönderilmiştir.</small></p>
  `;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.CONTACT_EMAIL || 'info@envoedugermany.com',
    subject: `Yeni Randevu Talebi - ${consultationData.fullName.replace(/[\r\n]/g, " ")}`,
    html: emailContent,
    text: ["Yeni Randevu Talebi", consultationData.fullName, consultationData.email, consultationData.phone, consultationData.program, consultationData.message].join("\n"),
    replyTo: consultationData.email
  };

  try {
    const result = await getTransporter().sendMail(mailOptions);
    if (!result.accepted?.length) throw new Error("SMTP did not accept the recipient");
    console.log('Consultation request email sent successfully');
  } catch (error) {
    console.error('Consultation SMTP send failed');
    throw error;
  }
}

export async function sendConfirmationEmail(consultationData: InsertConsultationRequest): Promise<void> {
  // XSS koruması için tüm kullanıcı verilerini escape et
  const confirmationContent = `
    <h2>Randevu Talebiniz Alındı</h2>
    <p>Sayın ${escapeHtml(consultationData.fullName)},</p>
    
    <p>Randevu talebiniz başarıyla alınmıştır. En kısa sürede size dönüş yapacağız.</p>
    
    <h3>Talep Detaylarınız:</h3>
    <p><strong>Program:</strong> ${escapeHtml(consultationData.program)}</p>
    
    <p>Herhangi bir sorunuz olursa bizimle iletişime geçmekten çekinmeyin.</p>
    
    <p>Saygılarımızla,<br>
    EnvoEdu Germany Ekibi</p>
    
    <hr>
    <p><small>Bu otomatik bir emaildir, lütfen yanıtlamayın.</small></p>
  `;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: consultationData.email,
    subject: consultationData.language === 'en' ? 'Appointment Request Received - Envoedu Germany' : 'Randevu Talebiniz Alındı - Envoedu Germany',
    html: consultationData.language === "en" ? [
      "<h2>We have received your appointment request</h2>",
      "<p>Dear " + escapeHtml(consultationData.fullName) + ",</p>",
      "<p>Your request has been received. We will get back to you as soon as possible.</p>",
      "<p>Kind regards,<br>Envoedu Germany</p>"
    ].join("") : confirmationContent
  };

  try {
    const result = await getTransporter().sendMail(mailOptions);
    if (!result.accepted?.length) throw new Error("SMTP did not accept the recipient");
    console.log('Confirmation email sent successfully');
  } catch (error) {
    console.error('Confirmation SMTP send failed');
    throw error;
  }
}
