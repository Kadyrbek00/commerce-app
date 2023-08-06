import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: [],
    totalPrice: 0,
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorites: (state, action) => {
            state.favorites.push(action.payload)
            state.totalPrice += action.payload.price
        },
        removeFromFavorites: (state, action) => {
            state.favorites = state.favorites.filter(item => item.id !== action.payload.id)
            state.totalPrice -= action.payload.price
        }
    }
})

export const { addFavorites, removeFromFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
