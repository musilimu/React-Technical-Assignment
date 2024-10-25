import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import TodoList from "./components/TodoList"
import Paginations from "./components/Paginations"
import Users from "./components/Users"
import Nav from "./components/ui/Nav"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-3">
        <Users />
        <TodoList />
        <Paginations />
      </div>
    </QueryClientProvider>
  )
}

export default App
