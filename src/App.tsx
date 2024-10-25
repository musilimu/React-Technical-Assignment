import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import TodoList from "./components/TodoList"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <p>Hello my future!!!</p>
      <TodoList />
    </QueryClientProvider>
  )
}

export default App
