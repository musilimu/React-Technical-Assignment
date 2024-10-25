import React from "react"
import { ITodo } from "../api/todos"
import { useQuery } from "@tanstack/react-query"
import { getUser } from "../api/users"
import User from "./User"

const TodoItem: React.FC<ITodo> = ({ completed, todo, userId }) => {
    const { isPending, error, data } = useQuery({
        queryKey: ['user', userId],
        queryFn: () => getUser(userId)
    })

    if (isPending) return <p>Loading</p>
    if (error) return <p>{error?.message}</p>

    return (
        <div className="grid gap-2 bg-white p-4 rounded-lg">
            <span className={`${completed? 'bg-green-200 text-green-800': 'bg-red-200 text-red-800'} p-1 w-max rounded-md` }>{completed? 'Completed': 'In progress'}</span>
            <p>{todo}</p>
            <div>
                <User {...data} />
            </div>
        </div>
    )
}


export default TodoItem