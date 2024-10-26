import { useQuery } from "@tanstack/react-query"
import { getTodos, ITodo } from "../api/todos"
import { useTodoStore } from "../state"
import TodoItem from "./TodoItem"
import React from "react"
import { TTaskState } from "./ui/Tabs"

const TodoList: React.FC<{ category: TTaskState, userId: number }> = ({ category, userId }) => {
    const filters = useTodoStore(state => state.filters)

    const { isPending, error, data } = useQuery({
        queryKey: ['todos-list', filters, userId],
        queryFn: () => getTodos({...filters, user: userId})
    })

    if (isPending) return <p>Loading</p>
    if (error) return <p>{error?.message}</p>

    const filtered: ITodo[] = category === 'All tasks' ?
        data.todos :
        // @ts-expect-error
        Object.groupBy(data.todos, todo => {
            return todo.completed ? "Completed" : 'Inprogress'
        })[category]

    return (
        <div>
            {filtered?.map(todo => <TodoItem key={todo.id} {...todo} />)}
        </div>
    )
}

export default TodoList