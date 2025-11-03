import type { StateCreator } from "zustand";
import type { Recipe } from "../types";
import { createRecipesSlice, type RecipisSliceType } from "./recipeSlice";

export type FavoriteSliceType = {
    favorites: Recipe[]
    handleFavoriteClick: (recipe: Recipe) => void
    favoriteExists: (id: Recipe["idDrink"]) => boolean
}

export const createFavoriteSlice : StateCreator<FavoriteSliceType & RecipisSliceType, [], [], FavoriteSliceType> = (set, get, api) => ({
    favorites: [],
    handleFavoriteClick: (recipe) => {
        if (get().favoriteExists(recipe.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter( favorite => favorite.idDrink !== recipe.idDrink)
            }))
        } else {
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }))
        }
        createRecipesSlice(set, get, api).closeModal()
    },
    favoriteExists: (id) => {
        return get().favorites.some( favorite => favorite.idDrink === id)
    }
})

