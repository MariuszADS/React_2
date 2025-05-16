/**
 * @jest-environment jsdom
 */
import { setupHamburgerMenu } from '../src/Components/Hamburger'; // dostosuj ścieżkę

describe('Hamburger menu', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <button id="hamburger">☰</button>
      <nav id="nav-links" class="nav"></nav>
    `;
    setupHamburgerMenu();
  });

  test('toggles show class on nav when hamburger is clicked', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    expect(navLinks.classList.contains('show')).toBe(false);

    hamburger.click();
    expect(navLinks.classList.contains('show')).toBe(true);

    hamburger.click();
    expect(navLinks.classList.contains('show')).toBe(false);
  });
});
