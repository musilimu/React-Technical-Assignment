import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import TodoList from '../TodoList'
import { PlusIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getUsers } from '../../api/users'
import { useUserStore } from '../../state'

export type TTaskState = 'All tasks' | 'Completed' | 'Inprogress'
const categories: TTaskState[] = ['All tasks', 'Completed', 'Inprogress']

const TodoListTabs = () => {
    const [_searchParams, setSearchParams] = useSearchParams()
    const filters = useUserStore(state => state.filters)

    const { isPending, error, data } = useQuery({
        queryKey: ['users', filters],
        queryFn: () => getUsers(filters)
    })

    if (isPending) return <p>Loading</p>
    if (error) return <p>{error?.message}</p>

    return (
        <TabGroup>
            <div className='flex flex-wrap-reverse gap-4 bg-white justify-between p-4 rounded-xl'>
                <TabList className="flex gap-4 relative">
                    {categories.map((name) => (
                        <Tab
                            key={name}
                            className="relative py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:text-blue-600 whitespace-nowrap"
                        >
                            {name}
                            <span className="absolute -bottom-4 rounded-t-md left-0 h-1 bg-blue-600 transition-all duration-300 ease-in-out transform scale-x-0 w-full"></span>
                        </Tab>
                    ))}
                </TabList>
                <div className='flex text-gray-600 gap-4'>
                    <button className='flex items-center justify-between gap-2 ring-1 py-1 px-2 rounded-md ring-gray-200'>
                        <AdjustmentsHorizontalIcon width={16} height={16} className='text-gray-600' />
                        <span className='whitespace-nowrap'>Filter & Sort</span>
                    </button>
                    <button className='flex items-center justify-between gap-2 ring-1 py-1 px-2 rounded-md ring-gray-200' onClick={() => setSearchParams({ page: 'new-task' })}>
                        <PlusIcon width={16} height={16} className='text-gray-600' />
                        <span className='whitespace-nowrap'>New Task</span>
                    </button>
                </div>
            </div>

            <TabPanels className="mt-3">
                {categories.map((name) => (
                    <TabPanel key={name} className="rounded-xl bg-white/5 flex gap-4 overflow-x-scroll">
                        {data.users?.map(user => <TodoList category={name} userId={user.id} />)}
                    </TabPanel>
                ))}
            </TabPanels>
        </TabGroup>
    )
}

export default TodoListTabs