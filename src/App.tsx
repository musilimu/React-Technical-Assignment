import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Paginations from "./components/Paginations"
import Users from "./components/Users"
import Nav from "./components/ui/Nav"
import TodoListTabs from "./components/ui/Tabs"
import Sidebar from "./components/ui/Sidebar"
import OverView from "./components/OverView"
import TeamChat from "./components/TeamChat"
import NewTask from "./components/NewTask"
import { useSearchParams } from "react-router-dom"

const queryClient = new QueryClient()

function App() {
  const [searchParams, _setSearchParams] = useSearchParams()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex">
        <Sidebar />
        <div className="flex flex-1">
          <div className="flex-1 ml-16">
            <Nav />
            <div className="bg-gray-100 p-12">
              <Users />
              <TodoListTabs />
              <Paginations />
            </div>
          </div>
          <div className="max-w-xl flex-1 p-5 shadow-md">
            {searchParams.get('page') === 'new-task' ? <NewTask /> : <><OverView /><TeamChat /></>}
          </div>
        </div>
      </div>
    </QueryClientProvider>
  )
}

export default App
