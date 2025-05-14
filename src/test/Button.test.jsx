import { render, screen, fireEvent } from '@testing-library/react';
import DownloadButton from '../Components/DownloadButton';

test('renderuje przycisk i reaguje na kliknięcie', () => {
  const handleClick = jest.fn();
  render(<DownloadButton onClick={handleClick} />);
  const button = screen.getByText(/click me/i);
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
