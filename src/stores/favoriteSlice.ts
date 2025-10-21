import type { StateCreator } from "zustand";
import type { Recipe } from "../types";

export type FavoriteSliceType = {
    favorites: Recipe[]
}

export const createFavoriteSlice : StateCreator<FavoriteSliceType> = () => ({
    favorites: []
})

