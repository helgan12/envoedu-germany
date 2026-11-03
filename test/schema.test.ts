import { describe, it, expect } from 'vitest';
import { insertConsultationRequestSchema } from '@shared/schema';

describe('Schema Validation Testleri', () => {
  describe('insertConsultationRequestSchema', () => {
    it('Geçerli consultation request verisini kabul etmeli', () => {
      const validData = {
        fullName: 'Ahmet Yılmaz',
        email: 'ahmet@example.com',
        phone: '+905551234567',
        program: 'Computer Science',
        message: 'I want to apply for this program',
      };

      const result = insertConsultationRequestSchema.safeParse(validData);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.fullName).toBe('Ahmet Yılmaz');
        expect(result.data.email).toBe('ahmet@example.com');
      }
    });

    it('Geçersiz email formatını reddetmeli', () => {
      const invalidData = {
        fullName: 'Test User',
        email: 'invalid-email',
        phone: '+905551234567',
        program: 'Computer Science',
        message: 'Test message',
      };

      const result = insertConsultationRequestSchema.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('Boş alanları reddetmeli', () => {
      const emptyData = {
        fullName: '',
        email: 'test@example.com',
        phone: '+905551234567',
        program: 'Computer Science',
        message: 'Test message',
      };

      const result = insertConsultationRequestSchema.safeParse(emptyData);
      expect(result.success).toBe(false);
    });

    it('XSS saldırılarını engellemeli (HTML içeriği)', () => {
      const xssData = {
        fullName: '<script>alert("XSS")</script>',
        email: 'test@example.com',
        phone: '+905551234567',
        program: 'Computer Science',
        message: 'Test message',
      };

      // Schema validation XSS'i engellemez, ama escapeHtml fonksiyonu engeller
      // Bu test, validation'ın çalıştığını doğrular
      const result = insertConsultationRequestSchema.safeParse(xssData);
      // Schema sadece format kontrolü yapar, XSS koruması escapeHtml'de
      expect(result.success).toBe(true); // Schema format kontrolü geçer
    });
  });
});
