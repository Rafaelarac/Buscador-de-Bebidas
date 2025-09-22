import { create } from "zustand";
import { createRecipesSlice, type RecipisSliceType } from "./recipeSlice";

export const useAppStore = create<RecipisSliceType>((...a) => ({
    ...createRecipesSlice(...a)
}))

