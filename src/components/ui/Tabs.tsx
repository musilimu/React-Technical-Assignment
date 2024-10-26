import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import TodoList from '../TodoList'
import { PlusIcon, AdjustmentsHorizontalIcon  } from '@heroicons/react/24/outline'

export type TTaskState = 'All tasks' | 'Completed' | 'Inprogress'
const categories: TTaskState[] = ['All tasks', 'Completed', 'Inprogress']

const TodoListTabs = () => {
    return (
        <div className="flex w-full">
            <TabGroup className="w-full">
                <div className='flex w-full bg-white justify-between p-4 rounded-xl'>
                <TabList className="flex gap-4  relative">
                    {categories.map((name) => (
                        <Tab
                            key={name}
                            className="relative py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:text-blue-600"
                        >
                            {name}
                            <span className="absolute -bottom-4 rounded-t-md left-0 h-1 bg-blue-600 transition-all duration-300 ease-in-out transform scale-x-0 w-full"></span>
                        </Tab>
                    ))}

                </TabList>
                    <div className='flex text-gray-600 gap-4'>
                        <button className='flex items-center justify-between gap-2 ring-1 py-1 px-2 rounded-md ring-gray-200'>
                            <AdjustmentsHorizontalIcon width={16} height={16} className='text-gray-600' />
                            <span>Filter & Sort</span>
                        </button>
                        <button className='flex items-center justify-between gap-2 ring-1 py-1 px-2 rounded-md ring-gray-200'>
                            <PlusIcon width={16} height={16} className='text-gray-600' />
                            <span>New Task</span>
                        </button>
                    </div>
                    </div>

                <TabPanels className="mt-3">
                    {categories.map((name) => (
                        <TabPanel key={name} className="rounded-xl bg-white/5">
                            <TodoList category={name} />
                        </TabPanel>
                    ))}
                </TabPanels>
            </TabGroup>

        </div>
    )
}

export default TodoListTabs