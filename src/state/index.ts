import { create } from 'zustand'

export interface IFilters {
    limit: number
    skip: number
}
interface todoState {
    filters: IFilters
    setFilters: (filters: IFilters) => void
}

export const useTodoStore = create<todoState>()((set) => ({
 filters: {limit: 10, skip: 0},
 setFilters: (filters)=>  set({filters}) 
}))