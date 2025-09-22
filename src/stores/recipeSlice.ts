import type { StateCreator } from "zustand"

type Category = {}

export type RecipisSliceType = {
    categories: Category[]
} 

export const createRecipesSlice : StateCreator<RecipisSliceType> = ( ) => ({
    categories: [],
})

