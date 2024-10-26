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
interface ITodoResponse<T> extends IResponse {
    todos: T
}

export const api = ky.create({
    prefixUrl: 'https://dummyjson.com',
});

export const getTodos = async ({ limit, skip, user }: IFilters) => {
    return await api.get<ITodoResponse<ITodo[]>>(`todos/user/${user}`, { searchParams: { limit, skip } }).json();
}
export const createTodo = async (todo: Omit<ITodo, 'id'>) => {
    return await api.post<ITodo>('todos/add', {
        json: todo
    }).json();
}

export const updateTodo = async (todo: Omit<ITodo, 'userId'>) => {
    return await api.put<ITodo>(`todos/${todo.id}`, {
        json: todo
    }).json();
}

export const deleteTodo = async (id: number) => {
    return await api.delete<ITodo>(`todos/${id}`).json();
}

export const getTodo = async (id: string | null) => {
    return await api.get<ITodo>(`todos/${id || 1}`).json();
}