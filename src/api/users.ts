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

export const getUsers = async ({ limit, skip, select }: IFilters) => {
    return await api.get<IUserResponse>(`users`, { searchParams: { skip, limit, select: select?.join(',') || 'image,username' } }).json();
}
