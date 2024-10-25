import { useQuery } from "@tanstack/react-query"
import { useTodoStore, useUserStore } from "../state"
import { getUsers } from "../api/users"
import User from "./User"

const Users = () => {
    const filters = useUserStore(state => state.filters)
    const setFilters = useTodoStore(state => state.setFilters)
    const todoFilters = useTodoStore(state => state.filters)

    const { isPending, error, data } = useQuery({
        queryKey: ['todos-list', filters],
        queryFn: () => getUsers(filters)
    })

    if (isPending) return <p>Loading</p>
    if (error) return <p>{error?.message}</p>

    const maxDisplay = 5; // Number of avatars to display before overflow
    const overflowCount = data?.users.length > maxDisplay ? data?.users.length - maxDisplay : 0;

    return (
        <div className="flex -space-x-2 overflow-hidden">
            {data.users.slice(0, maxDisplay).map(user => <User key={user.id} {...user} />)}
            {overflowCount > 0 && (
                <div onClick={() => setFilters({...todoFilters, user: 0})} className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-200 text-gray-600 ring-2 ring-white">
                    +{overflowCount}
                </div>
            )}
        </div>
    )
}

export default Users