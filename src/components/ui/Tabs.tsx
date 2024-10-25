import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import TodoList from '../TodoList'

export type TTaskState = 'All tasks' | 'Completed' | 'Inprogress'
const categories: TTaskState[] = ['All tasks', 'Completed', 'Inprogress']

const TodoListTabs = () => {
    return (
        <div className="flex w-full">
            <div className="w-full max-w-md">
                <TabGroup>
                    <TabList className="flex gap-4">
                        {categories.map((name) => (
                            <Tab
                                key={name}
                                className="rounded-full py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:bg-black/10 data-[hover]:bg-black/5 data-[selected]:data-[hover]:bg-black/10 data-[focus]:outline-1 data-[focus]:outline-black"
                            >
                                {name}
                            </Tab>
                        ))}
                    </TabList>
                    <TabPanels className="mt-3">
                        {categories.map((name) => (
                            <TabPanel key={name} className="rounded-xl bg-black/5 p-3">
                                <TodoList category={name} />
                            </TabPanel>
                        ))}
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
    )
}

export default TodoListTabs