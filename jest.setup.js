/* eslint-env node */
import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// ✅ dodaj to:
import '@testing-library/jest-dom';
