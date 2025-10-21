import { create } from "zustand";
import { createRecipesSlice, type RecipisSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";
import { createFavoriteSlice, type FavoriteSliceType } from "./favoriteSlice";

export const useAppStore = create<RecipisSliceType & FavoriteSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a)
})))



