import { useQuery } from "@tanstack/react-query"
import { getTodos } from "../api/todos"
import { useTodoStore } from "../state"
import TodoItem from "./TodoItem"

const TodoList = () => {
    const filters = useTodoStore(state => state.filters)

    const { isPending, error, data } = useQuery({
        queryKey: ['todos-list', filters],
        queryFn: () => getTodos(filters)
    })

    if(isPending) return <p>Loading</p>
    if(error) return <p>{error?.message}</p>

    return (
        <div>
            {data?.todos.map(todo => <TodoItem key={todo.id} {...todo}/>)}
        </div>
    )
}

export default TodoList