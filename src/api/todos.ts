import ky from "ky"
import { IFilters } from "../state"

export interface ITodo {
    id: number
    todo: string
    completed: boolean
    userId: number
}

export const getTodos = async ({limit, skip}: IFilters)=>{
    return await ky.get<ITodo[]>(`https://dummyjson.com/todos?limit=${limit}&skip=${skip}`).json()
}