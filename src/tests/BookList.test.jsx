import { fireEvent, render, screen } from '@testing-library/react';
import BookList from '../components/BookList';
import { describe, expect, it } from 'vitest';
import fantasy from '../data/fantasy.json';

describe('BookList number', () => {
  it('renders the correct number of book cards', () => {
    render(<BookList books={fantasy} />);
    const bookCards = screen.getAllByTestId('book-card');
    expect(bookCards.length).toBe(fantasy.length);
  });
  it("should filter books correctly", () => {
    render(<BookList books={fantasy} />);
    const searchInput = screen.getByPlaceholderText(/Cerca un libro/i);
    fireEvent.change(searchInput, { target: { value: 'witcher' } });
    const visibleBooks = screen.getAllByTestId('book-card');
    expect(visibleBooks.length).toBeGreaterThan(0);
    visibleBooks.forEach((bookCard) => {
        expect(bookCard).toHaveTextContent(/witcher/i);
      });
    fireEvent.change(searchInput, { target: { value: 'NonExistingBook' } });
    const noBooksVisible = screen.queryAllByTestId('book-card');
    expect(noBooksVisible.length).toBe(0);
  });
});
