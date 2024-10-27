import { useCallback, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SimpleMdeReact } from "react-simplemde-editor";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getTodo, updateTodo, } from "../api/todos";
import Alert from "./ui/Alert";

import "easymde/dist/easymde.min.css";
import { useTranslation } from "react-i18next";

const UpdateTask = () => {
    const [task, setTask] = useState("")
    const [completed, setCompleted] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()

    const onChange = useCallback((value: string) => {
        setTask(value);
    }, []);

    const todoMutation = useMutation({
        mutationFn: updateTodo,
        onSuccess: (data) => setTask(data.todo)
    })
    const { data, isPending, error, refetch } = useQuery({
        queryKey: ['todo', searchParams.get('id')],
        queryFn: () => getTodo(searchParams.get('id'))
    })

    const { t } = useTranslation();

    if (isPending) return <p>Loading...</p>

    return (
        <div>
            <div className="flex justify-between items-center my-5"><h2 className="text-gray-500 font-semibold text-xl">{t('Update this Task')}</h2> <button onClick={() => setSearchParams({ page: 'chat' })} className='flex items-center justify-between gap-2  py-1 px-2 rounded-md bg-red-100'>{t("Close")}<XMarkIcon width={16} height={16} /></button></div>

            {todoMutation.isSuccess && <Alert message="Task Updated successfuly" type="success" onClose={() => {
                todoMutation.reset()
            }} />}

            {error && <Alert message={error.message} type="error" onClose={() => {
                refetch()
            }} />}

            <form
                className="mt-4"
                onSubmit={(e) => {
                    e.preventDefault()
                    todoMutation.mutateAsync({
                        completed,
                        todo: task,
                        id: parseInt(searchParams.get('id') ?? '1')
                    })
                }}>

                <SimpleMdeReact value={task || data?.todo} onChange={onChange} />
                <label htmlFor="complete" className="my-3"><input id="complete" type="checkbox" defaultChecked={data?.completed} onChange={e => setCompleted(!e.target.checked)} />{t("Change this field to complete or uncomplete")}</label>
                <button disabled={todoMutation.isPending} className='flex items-center justify-between gap-2  py-2 px-4 rounded-md bg-blue-400'>{todoMutation.isPending ? t("Updating ...") : t("Update task")} <PlusIcon width={16} height={16} /></button>
            </form>
        </div>
    )
}

export default UpdateTask