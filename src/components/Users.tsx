import { useQuery } from "@tanstack/react-query"
import { useTodoStore, useUserStore } from "../state"
import { getUsers } from "../api/users"
import User from "./User"
import { PlusIcon } from "@heroicons/react/24/outline"

const Users = () => {
    const filters = useUserStore(state => state.filters)
    const setFilters = useTodoStore(state => state.setFilters)
    const todoFilters = useTodoStore(state => state.filters)

    const { isPending, error, data } = useQuery({
        queryKey: ['users', filters],
        queryFn: () => getUsers(filters)
    })

    if (isPending) return <p>Loading</p>
    if (error) return <p>{error?.message}</p>

    const maxDisplay = 5; // Number of avatars to display before overflow
    const overflowCount = data?.users.length > maxDisplay ? data?.users.length - maxDisplay : 0;

    return (
        <div className="flex gap-5 items-center">

            <div className="flex -space-x-2 overflow-hidden my-4">
                {data.users.slice(0, maxDisplay).map(user => <User key={user.id} {...user} />)}
                {overflowCount > 0 && (
                    <div onClick={() => setFilters({ ...todoFilters, user: 0 })} className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-200 text-gray-600 ring-2 ring-white">
                        +{overflowCount}
                    </div>
                )}
            </div>
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-500 text-white">
                <PlusIcon width={24} height={24} />
            </div>
        </div>
    )
}

export default Users