import { describe, expect, it } from 'vitest'
import Welcome from '../components/Welcome'
import { render, screen } from '@testing-library/react'

describe('welcome mounting',() => {
    it( 'mounts welcome correctly',() => {
        render(<Welcome />)
        const alert = screen.getByTestId('alert')
        expect(alert).toBeInTheDocument()
    })
})