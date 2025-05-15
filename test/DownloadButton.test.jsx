import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DownloadButton from '../src/Components/DownloadButton';

globalThis.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    blob: () => Promise.resolve(new Blob()),
  })
);

jest.mock('file-saver', () => ({
  saveAs: jest.fn(),
}));

test('przycisk pobierania działa poprawnie', async () => {
  render(<DownloadButton />);
  const button = screen.getByText(/pobierz/i);
  fireEvent.click(button);

  expect(fetch).toHaveBeenCalledWith('/downloads/legenda_metro_pociac.pdf');
});
