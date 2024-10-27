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
import UpdateTask from "./components/UpdateTask"
import { Suspense } from "react"

const queryClient = new QueryClient()

const Page = () => {
  const [searchParams, _setSearchParams] = useSearchParams()

  if (searchParams.get('page') === 'new-task') return <NewTask />
  if (searchParams.get('page') === 'update-task') return <UpdateTask />
  return <><OverView /><TeamChat /></>

}
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback="loading">
        <div className="flex">
          <Sidebar />
          <div className="flex flex-1">
            <div className="flex-1 ml-16 w-64">
              <Nav />
              <div className="bg-gray-100 p-12">
                <Users />
                <TodoListTabs />
                <Paginations />
              </div>
            </div>
            <div className="max-w-[35%] sticky flex-1 p-5 shadow-md bg-white right-0 top-0">
              <Page />
            </div>
          </div>
        </div>
      </Suspense>
    </QueryClientProvider>
  )
}

export default App
