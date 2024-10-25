import ky from "ky"
import { IFilters } from "../state"

export interface ITodo {
    id: number
    todo: string
    completed: boolean
    userId: number
}

export interface IResponse {
    total: number
    skip: number
    limit: number
}
interface ITodoResponse extends IResponse {
    todos: ITodo[]
}

export const api = ky.create({
    prefixUrl: 'https://dummyjson.com',
});

export const getTodos = async ({ limit, skip, user }: IFilters) => {

    return await api.get<ITodoResponse>(`todos${user ? `/user/${user}` : ''}`, { searchParams: { limit, skip } }).json();
}