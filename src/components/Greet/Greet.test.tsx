import { render, screen } from "@testing-library/react"
import Greet from "./greet"

test('renders greet', () => {
    render(<Greet />)
    const title = screen.getByText(/hello/i)
    expect(title).toBeInTheDocument()
})