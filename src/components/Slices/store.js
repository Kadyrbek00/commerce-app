import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import passwordReducer from './features/passwordSlice';
import dataReducer from './features/dataSlice';
import favoritesReducer from './features/favoritesSlice';

const rootReducer = combineReducers({
    user: userReducer,
    password: passwordReducer,
    data: dataReducer,
    favorites: favoritesReducer,
})

export const store = configureStore({
    reducer: rootReducer
});
