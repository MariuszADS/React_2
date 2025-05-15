import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavbarFront from '../src/Components/Navbar';

test('renderuje nawigację z poprawnymi linkami', () => {
  render(
    <MemoryRouter>
      <NavbarFront />
    </MemoryRouter>
  );

  expect(screen.getByText(/Oslo&nabo/i)).toBeInTheDocument();
  expect(screen.getByText(/Wskazówki i porady/i)).toBeInTheDocument();
  expect(screen.getByText(/Miejsca warte uwagi/i)).toBeInTheDocument();

  const externalLink = screen.getByText(/Ruter/i);
  expect(externalLink.closest('a')).toHaveAttribute('href', 'https://ruter.no/');
  expect(externalLink.closest('a')).toHaveAttribute('target', '_blank');
});
