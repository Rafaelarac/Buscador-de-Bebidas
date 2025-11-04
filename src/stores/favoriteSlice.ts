import type { StateCreator } from "zustand";
import type { Recipe } from "../types";
import { createRecipesSlice, type RecipisSliceType } from "./recipeSlice";

export type FavoriteSliceType = {
    favorites: Recipe[]
    handleFavoriteClick: (recipe: Recipe) => void
    favoriteExists: (id: Recipe["idDrink"]) => boolean
    loadFromStorage: () => void
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
        localStorage.setItem("favorites", JSON.stringify(get().favorites))
    },
    favoriteExists: (id) => {
        return get().favorites.some( favorite => favorite.idDrink === id)
    },
    loadFromStorage: () => {
        const storeFavorites = localStorage.getItem("favorites")
        if (storeFavorites) {
            set({
                favorites: JSON.parse(storeFavorites)
            })
        }
    }
})

