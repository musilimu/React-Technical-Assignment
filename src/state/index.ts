import { create } from 'zustand'

export interface IFilters {
    limit: number
    skip: number
    select?: string
    user?: number
}
interface todoState {
    filters: IFilters
    setFilters: (filters: IFilters) => void
}

interface userState {
    filters?: IFilters & {
    }
    setFilters: (filters: IFilters) => void
}

export const useTodoStore = create<todoState>()((set) => ({
    filters: { limit: 10, skip: 0 },
    setFilters: (filters) => {
        if (filters.limit < 0 || filters.skip < 0) return
        return set({ filters })
    }
}))

export const useUserStore = create<userState>()((set) => ({
    filters: undefined,
    setFilters: (filters) => {
        if (filters.limit < 0 || filters.skip < 0) return
        return set({ filters })
    }
}))