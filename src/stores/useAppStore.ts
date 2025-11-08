import { create } from "zustand";
import { createRecipesSlice, type RecipisSliceType } from "./recipeSlice";
import { devtools } from "zustand/middleware";
import { createFavoriteSlice, type FavoriteSliceType } from "./favoriteSlice";
import { createNotificationSlice, type NotificationSliceType } from "./notificactionSlice";
import { createAISlice, type AISlice } from "./aiSlice";

export const useAppStore = create<RecipisSliceType & FavoriteSliceType & NotificationSliceType & AISlice>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a),
    ...createAISlice(...a)
})))



