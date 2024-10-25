import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import App from '../../App'

test("Renders the main page", async () => {
    const { queryByText } = render(<App />)
    expect(queryByText(/Hello my future!!!/i)).toBeTruthy();
})
