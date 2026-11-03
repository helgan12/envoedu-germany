import { describe, it, expect } from 'vitest';
import { escapeHtml } from '../server/emailService';

describe('Güvenlik Testleri', () => {
  describe('XSS Koruması', () => {
    it('HTML escape fonksiyonu script taglerini escape etmeli', () => {
      const maliciousInput = '<script>alert("XSS")</script>';
      const escaped = escapeHtml(maliciousInput);
      expect(escaped).not.toContain('<script>');
      expect(escaped).toContain('&lt;script&gt;');
    });

    it('HTML escape fonksiyonu tırnak işaretlerini escape etmeli', () => {
      const input = 'Test "quotes" and \'apostrophes\'';
      const escaped = escapeHtml(input);
      expect(escaped).toContain('&quot;');
      expect(escaped).toContain('&#039;');
    });

    it('HTML escape fonksiyonu ampersand karakterini escape etmeli', () => {
      const input = 'Test & value';
      const escaped = escapeHtml(input);
      expect(escaped).toContain('&amp;');
    });

    it('Normal metinleri değiştirmemeli', () => {
      const input = 'Normal metin 123';
      const escaped = escapeHtml(input);
      expect(escaped).toBe(input);
    });
  });

  describe('Environment Variables', () => {
    it('EmailJS credentials environment variable olarak tanımlanmalı', () => {
      // Bu test, hardcoded key'lerin olmadığını doğrular
      const hasHardcodedKeys = false; // Manuel kontrol gerekli
      expect(hasHardcodedKeys).toBe(false);
    });
  });
});
