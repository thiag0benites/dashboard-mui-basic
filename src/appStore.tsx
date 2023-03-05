import { create } from 'zustand'
// import { persist } from 'zustand/middleware'

interface AppStoreState {
    dopen: boolean,
    updateOpen: (dopen: boolean) => void
}

export const useAppStore = create<AppStoreState>((set) => ({
    dopen: true,
    updateOpen: (dopen) => {
        set(state => ({ dopen: dopen }))
    }
}))
