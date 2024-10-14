import '@testing-library/jest-dom';

import { AppWithRedux as App } from '../App';
import { render } from '@testing-library/react';

test('demo', () => {
  expect(true).toBe(true);
});

test('Render the main page', () => {
  render(<App />);
  expect(true).toBeTruthy();
});
