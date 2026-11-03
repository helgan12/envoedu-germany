import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import TestimonialCard from '../client/src/components/ui/testimonial-card';

describe('Component Testleri', () => {
  describe('TestimonialCard', () => {
    it('Testimonial card doğru içeriği render etmeli', () => {
      const props = {
        name: 'Ahmet Yılmaz',
        program: 'Computer Science',
        initials: 'AY',
        color: 'primary' as const,
        content: 'Great service!',
      };

      render(<TestimonialCard {...props} />);

      expect(screen.getByText('Ahmet Yılmaz')).toBeInTheDocument();
      expect(screen.getByText('Computer Science')).toBeInTheDocument();
      expect(screen.getByText('"Great service!"')).toBeInTheDocument();
    });

    it('Testimonial card doğru data-testid attribute\'larına sahip olmalı', () => {
      const props = {
        name: 'Test User',
        program: 'Test Program',
        initials: 'TU',
        color: 'accent' as const,
        content: 'Test content',
      };

      render(<TestimonialCard {...props} />);

      expect(screen.getByTestId('testimonial-test-user')).toBeInTheDocument();
      expect(screen.getByTestId('testimonial-name-test-user')).toBeInTheDocument();
    });
  });
});
