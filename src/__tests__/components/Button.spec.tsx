import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from '../../components/ui/Button';

test('Button should be visible', async () => {
    render(<Button>button rendered</Button>);


    const button = await screen.findByRole('button');
    expect(button).toHaveTextContent('button rendered');
});
