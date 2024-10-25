import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import TodoList from "./components/TodoList"
import Paginations from "./components/Paginations"
import Users from "./components/Users"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <p>Hello my future!!!</p>
      <TodoList />
      <Paginations/>
      <Users/>
    </QueryClientProvider>
  )
}

export default App
