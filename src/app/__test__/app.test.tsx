import '@testing-library/jest-dom';

import App from '../app';
import { render } from '@testing-library/react';

test('demo', () => {
  expect(true).toBe(true);
});

test('Render the main page', () => {
  render(<App />);
  expect(true).toBeTruthy();
});