import { useQuery } from "@tanstack/react-query"
import { useUserStore } from "../state"
import { getUsers } from "../api/users"
import User from "./User"

const Users = () => {
    const filters = useUserStore(state => state.filters)

    const { isPending, error, data } = useQuery({
        queryKey: ['todos-list', filters],
        queryFn: () => getUsers(filters)
    })

    if (isPending) return <p>Loading</p>
    if (error) return <p>{error?.message}</p>

    return (
        <div>
            <p>Users</p>
        {data.users.map(user => <User key={user.id} {...user}/>)}
        </div>
    )
}

export default Users