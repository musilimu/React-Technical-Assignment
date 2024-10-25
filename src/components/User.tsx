import React from "react"
import { IUser } from "../api/users"
import { useSearchParams } from "react-router-dom";
import { useTodoStore } from "../state";

const User: React.FC<IUser> = ({ image, username, id }) => {
    const [_,setSearchParams] = useSearchParams({ skip: '0' });

    const setFilters = useTodoStore(state => state.setFilters)
    const filters = useTodoStore(state => state.filters)

    const queryByUser = () => {
        setFilters({
            ...filters,
            user: id,
        })
        setSearchParams({ user: filters.user?.toString() || '' });
    };
    
    return (
        <div onClick={queryByUser} className="cursor-pointer">
            <img src={image} width={40} height={40} alt={`${username}'s profile picture`} />
            <p>{username}</p>
        </div>
    )
}

export default User