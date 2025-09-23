import { create } from "zustand";
import { createRecipesSlice, type RecipisSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";

export const useAppStore = create<RecipisSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a)
})))

