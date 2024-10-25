import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Paginations from "./components/Paginations"
import Users from "./components/Users"
import Nav from "./components/ui/Nav"
import TodoListTabs from "./components/ui/Tabs"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-3">
        <Users />
        <TodoListTabs />
        <Paginations />
      </div>
    </QueryClientProvider>
  )
}

export default App
