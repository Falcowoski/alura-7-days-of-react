import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from "../App";

test('Renders main page correctly', async () => {
    // Setup
    render(<App />);
    const buttonCount = await screen.findByRole('button');

    // Pre Expecations
    expect(buttonCount.innerHTML).toBe('count is: 0');

    // Init
    user.click(buttonCount);
    user.click(buttonCount);

    // Post Expectations
    expect(buttonCount.innerHTML).toBe('count is: 2');
})