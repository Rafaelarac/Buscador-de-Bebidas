import type { StateCreator } from "zustand";
import type { Recipe } from "../types";
import { createRecipesSlice, type RecipisSliceType } from "./recipeSlice";
import { createNotificationSlice, type NotificationSliceType } from "./notificactionSlice";

export type FavoriteSliceType = {
    favorites: Recipe[]
    handleFavoriteClick: (recipe: Recipe) => void
    favoriteExists: (id: Recipe["idDrink"]) => boolean
    loadFromStorage: () => void
}

export const createFavoriteSlice : StateCreator<FavoriteSliceType & RecipisSliceType & NotificationSliceType, [], [], FavoriteSliceType> = (set, get, api) => ({
    favorites: [],
    handleFavoriteClick: (recipe) => {
        if (get().favoriteExists(recipe.idDrink)) {
            set((state) => ({
                favorites: state.favorites.filter( favorite => favorite.idDrink !== recipe.idDrink)
            }))
            createNotificationSlice(set, get, api).showNotification({text:'Se elimino de favoritos', error: false})
        } else {
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }))
            createNotificationSlice(set, get, api).showNotification({text:'Se añadio a favoritos', error: false})
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

