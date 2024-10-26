import React, { useRef } from "react"
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChatBubbleLeftEllipsisIcon, EllipsisVerticalIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline"
import { useMutation, useQuery } from "@tanstack/react-query"
import { deleteTodo, ITodo } from "../api/todos"
import { getUser } from "../api/users"
import User from "./User"
import Alert from "./ui/Alert"
import { useSearchParams } from "react-router-dom"


const TodoItem: React.FC<ITodo> = ({ completed, todo, userId, id }) => {
    const closeBtnRef = useRef<HTMLButtonElement>(null)
    const todoRef = useRef<HTMLDivElement>(null)

    const [_searchParams, setSearchParams] = useSearchParams()

    const { isPending, error, data } = useQuery({
        queryKey: ['user', userId],
        queryFn: () => getUser(userId)
    })

    const deleteTodoMutation = useMutation({
        mutationFn: deleteTodo,
        onSuccess: () => {
            closeBtnRef.current?.click();
            todoRef.current?.remove()
        }
    })

    if (isPending) return <p>Loading</p>
    if (error) return <p>{error?.message}</p>
    return (
        <div className="grid mt-4 gap-2 bg-white p-4 rounded-lg max-w-md min-w-96" ref={todoRef}>
            {deleteTodoMutation.isSuccess && <Alert message="Task deleted successfuly" type="success" onClose={() => {
                deleteTodoMutation.reset()
            }} />}
            {userId % 2 === 1 && <img alt="Random image" src="https://random.imagecdn.app/v1/image?width=200&height=200" className="w-full object-cover rounded-xl" />}
            <div className="flex justify-between">
                <span className={`${completed ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'} p-1 w-max rounded-md`}>{completed ? 'Completed' : 'In progress'}</span>

                <Popover>
                    <PopoverButton ref={closeBtnRef} className="block text-sm/6 font-semibold  focus:outline-none data-[active]:text-black data-[hover]:text-black data-[focus]:outline-1 data-[focus]:outline-white">
                        <EllipsisVerticalIcon width={36} height={36} className="text-gray-500 cursor-pointer hover:bg-black/10 rounded-full p-2" />
                    </PopoverButton>
                    <PopoverPanel
                        transition
                        anchor="bottom"
                        className="rounded-xl shadow-md  text-sm/6 transition duration-200 ease-in-out bg-white"
                    >
                        <div className="p-3 grid gap-3">
                            <button onClick={() => deleteTodoMutation.mutateAsync(id)} className='flex items-center justify-between gap-2  py-1 px-2 rounded-md bg-red-50 hover:bg-red-100'><TrashIcon width={16} height={16} /> Delete</button>
                            <button onClick={() => {setSearchParams({ page: 'update-task', id: id.toString() }); console.log(123)}} className='flex items-center justify-between gap-2  py-1 px-2 rounded-md bg-green-50 hover:bg-green-100'><PencilSquareIcon width={16} height={16}  /> Update</button>
                        </div>

                    </PopoverPanel>
                </Popover>
            </div>
            <p>{todo}</p>
            <div className="flex justify-between">
                <User {...data} />
                <p className="text-gray-500 flex gap-2">
                    <ChatBubbleLeftEllipsisIcon width={24} height={24} />
                    <span>3</span>
                </p>
            </div>
        </div>
    )
}


export default TodoItem