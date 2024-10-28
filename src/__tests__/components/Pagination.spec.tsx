import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Paginations from '../../components/Paginations';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
    {
      path: "/",
      element: <Paginations />,
    },
  ]);
test('Paginations should be visible', async () => {
    render(<RouterProvider router={router} />);


    const pagination = await screen.findByRole('pagination');
    expect(pagination).toHaveTextContent('BackNext');
});
