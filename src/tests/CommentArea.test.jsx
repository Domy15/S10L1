import { describe, expect, it } from "vitest";
import BookList from "../components/BookList";
import { render, screen } from "@testing-library/react";
import fantasy from "../data/fantasy.json";

describe('CommentArea was mount',() => {
    it('show commentArea', async () => {
        render(<BookList books={fantasy} />)
        const commentArea = await screen.findByPlaceholderText(/inserisci qui il testo/i)
        expect(commentArea).toBeInTheDocument()
    })
})