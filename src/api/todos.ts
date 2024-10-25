import ky from "ky"
import { IFilters } from "../state"

export interface ITodo {
    id: number
    todo: string
    completed: boolean
    userId: number
}

interface ITodoResponse {
    todos: ITodo[]
    total: number
    skip: number
    limit: number
}

export const getTodos = async ({ limit, skip }: IFilters) => {
    return await ky.get<ITodoResponse>(`https://dummyjson.com/todos?limit=${limit}&skip=${skip}`).json()
}