import { IFilters } from "../state"
import { api, IResponse } from "./todos"

export interface IUser {
    id: number
    image: string
    username: string
}

interface IUserResponse extends IResponse {
    users: IUser[]
}

export const getUsers = async (filters?: IFilters) => {
    return await api.get<IUserResponse>(`users`, { searchParams: filters ? { skip: filters.skip, limit: filters.limit, select: filters.select || 'image,username' } : undefined }).json();
}

export const getUser = async (id: number) => {
    return await api.get<IUser>(`users/${id}`, {
        searchParams: {
            select: 'image,username' 
        }
    }).json();
}