import type { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"

type Category = {}

export type RecipisSliceType = {
    categories: Category[],
    fetchCategories: () => Promise<void>
} 

export const createRecipesSlice : StateCreator<RecipisSliceType> = ( ) => ({
    categories: [],
    fetchCategories: async () => {
        getCategories()
    }
})

