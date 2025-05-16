/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar_white from '../src/Components/Navbar_white'; // zmień ścieżkę jeśli trzeba

describe('Navbar_white', () => {
  test('renders all navigation links', () => {
    render(
      <MemoryRouter>
        <Navbar_white />
      </MemoryRouter>
    );

    // Sprawdź obecność linków wewnętrznych
    expect(screen.getByRole('link', { name: /Oslo&nabo/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Wskazówki i porady/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Miejsca warte uwagi/i })).toBeInTheDocument();

    // Sprawdź link zewnętrzny
    const externalLink = screen.getByRole('link', { name: /Ruter/i });
    expect(externalLink).toHaveAttribute('href', 'https://ruter.no/');
    expect(externalLink).toHaveAttribute('target', '_blank');
    expect(externalLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
