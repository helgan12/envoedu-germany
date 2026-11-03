import '@testing-library/jest-dom';
import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// Her testten sonra temizlik
afterEach(() => {
  cleanup();
});

// Global test utilities
global.expect = expect;
