import React from "react"
import { IUser } from "../api/users"
import { useSearchParams } from "react-router-dom";
import { useTodoStore } from "../state";

const User: React.FC<IUser & {className?: string}> = ({ image, username, id, className }) => {
    const [_, setSearchParams] = useSearchParams({ skip: '0' });

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
        <img title={username} onClick={queryByUser} src={image} width={24} height={24} alt={`${username}'s profile picture`} className={`inline-block h-8 w-8 rounded-full ring-2 ring-white bg-gray-100 cursor-pointer ${className}`} />
    )
}

export default User