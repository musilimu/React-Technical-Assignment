import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Sidebar from '../../components/ui/Sidebar';

const queryClient = new QueryClient();

beforeEach(() => {
    jest.clearAllMocks();
});

test('renders data sidebar', async () => {
    render(
        <QueryClientProvider client={queryClient}>
            <Sidebar />
        </QueryClientProvider>
    );
    const loader = screen.getByTitle('loading')
    expect(loader.textContent).toBe("Loading")
});
