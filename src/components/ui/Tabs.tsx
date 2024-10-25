import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import TodoList from '../TodoList'

export type TTaskState = 'All tasks' | 'Completed' | 'Inprogress'
const categories: TTaskState[] = ['All tasks', 'Completed', 'Inprogress']

const TodoListTabs = () => {
    return (
        <div className="flex w-full">
            <TabGroup className="w-full">
                <TabList className="flex gap-4 bg-white p-4 rounded-xl w-full relative">
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