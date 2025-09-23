import type { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"
import type { Categories } from "../types"


export type RecipisSliceType = {
    categories: Categories,
    fetchCategories: () => Promise<void>
} 

export const createRecipesSlice : StateCreator<RecipisSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    fetchCategories: async () => {
        const categories = await getCategories()
        set({
            categories
        })
    }
})


