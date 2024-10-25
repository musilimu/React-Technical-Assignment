import { useQuery } from "@tanstack/react-query"
import { getUsers } from "../../api/users"
import { useUserStore } from "../../state"
import User from "../User"
import { PlusIcon, UserIcon, Cog6ToothIcon } from "@heroicons/react/24/outline"

const Sidebar = () => {
    const filters = useUserStore(state => state.filters)
    const { isPending, error, data } = useQuery({
        queryKey: ['users', filters],
        queryFn: () => getUsers(filters)
    })

    if (isPending) return <p>Loading</p>
    if (error) return <p>{error?.message}</p>
    return (
        <div className="flex flex-col border-r-2 gap-3 items-center justify-between h-screen fixed bg-white z-10">
            <div className="flex flex-col p-5 gap-3">
                {data.users.slice(0, 3).map(user => <User key={user.id} {...user} />)}
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white text-gray-500 ring-1 ring-gray-200 cursor-pointer">
                    <PlusIcon width={24} height={24} />
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center h-8 w-8 rounded-full bg-white text-gray-500  cursor-pointer mb-4">
                    <Cog6ToothIcon width={24} height={24} />
                </div>
                <div className="flex flex-col items-center h-8 w-8 rounded-full bg-white text-gray-500  cursor-pointer mb-4">
                    <UserIcon width={24} height={24} />
                </div>
            </div>
        </div>
    )
}

export default Sidebar