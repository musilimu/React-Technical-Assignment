import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import  Alert from '../../components/ui/Alert';

test('Alert should be visible', async () => {
    render(<Alert message='rendered alert successfuly' onClose={()=>{}} type='success'/>);


    const alert = await screen.findByRole('alert');
    expect(alert).toHaveTextContent('rendered alert successfuly');
});
