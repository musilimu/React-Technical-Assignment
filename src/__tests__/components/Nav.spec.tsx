import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Nav from '../../components/ui/Nav';

test('Navigation bar should be visible', async () => {
    render(<Nav />);

    await screen.findAllByPlaceholderText('Search');

    const button = await screen.findByRole('navigation');
    expect(button).toHaveTextContent('Notifications');
});
