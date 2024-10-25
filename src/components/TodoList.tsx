import { useQuery } from "@tanstack/react-query"
import { getTodos } from "../api/todos"
import { useTodoStore } from "../state"

const TodoList = () => {
    const filters = useTodoStore(state => state.filters)
    
    const { isPending, error, data } = useQuery({
        queryKey: ['todos-list', filters],
        queryFn: () => getTodos(filters)
    })

    if(isPending) return <p>Loadding</p>
    if(error) return <p>{error?.message}</p>
    return (
        <div>TodoList {JSON.stringify(data)}</div>
    )
}

export default TodoList