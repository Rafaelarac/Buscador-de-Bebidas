import { create } from "zustand";
import { createRecipesSlice, type RecipisSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";
import { createFavoriteSlice, type FavoriteSliceType } from "./favoriteSlice";
import { createNotificationSlice, type NotificationSliceType } from "./notificactionSlice";

export const useAppStore = create<RecipisSliceType & FavoriteSliceType & NotificationSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a)
})))



