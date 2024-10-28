import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Users from '../../components/Users';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

beforeEach(() => {
    jest.clearAllMocks();
});
const router = createBrowserRouter([
  {
    path: "/",
        
        element: <QueryClientProvider client={queryClient}><Users /></QueryClientProvider>,
  },
]);
test('Users should atleast render nav', async () => {
    render(<RouterProvider router={router} />);

    const users =  screen.findAllByRole('navigation-bar');
    expect(users).toBeTruthy();
});
