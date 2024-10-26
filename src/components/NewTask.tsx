import { useCallback, useState } from "react";
import { SimpleMdeReact } from "react-simplemde-editor";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useMutation } from "@tanstack/react-query";
import { createTodo, } from "../api/todos";
import Alert from "./ui/Alert";

import "easymde/dist/easymde.min.css";
import { useSearchParams } from "react-router-dom";

const NewTask = () => {
    const [task, setTask] = useState("")
  const [_searchParams, setSearchParams] = useSearchParams()


    const onChange = useCallback((value: string) => {
        setTask(value);
    }, []);
    const todoMutation = useMutation({
        mutationFn: createTodo,
        onSuccess: () => setTask("")
    })

    return (
        <div>
            <div className="flex justify-between items-center my-5"><h2 className="text-gray-500 font-semibold text-xl">Add New Task</h2> <button onClick={()=> setSearchParams({page:'chat'})} className='flex items-center justify-between gap-2  py-1 px-2 rounded-md bg-red-100'>Close <XMarkIcon width={16} height={16} /></button></div>
            
            {todoMutation.isSuccess && <Alert message="Task saved successfuly" type="success" onClose={() => {
                todoMutation.reset()
            }} />}
            <form
            className="mt-4"
            onSubmit={(e) => {
                e.preventDefault()
                todoMutation.mutateAsync({
                    userId: 5,
                    completed: false,
                    todo: task
                })
            }}>
                <SimpleMdeReact value={task} onChange={onChange} />
                <button disabled={todoMutation.isPending} className='flex items-center justify-between gap-2  py-2 px-4 rounded-md bg-blue-400'>{todoMutation.isPending ? "Saving ...": "Save task"} <PlusIcon width={16} height={16} /></button>
            </form>
        </div>
    )
}

export default NewTask