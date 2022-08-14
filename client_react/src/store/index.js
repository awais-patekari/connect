import { configureStore } from "@reduxjs/toolkit";
import togglePopupReducer from "./togglePopupSlice";
import userReducer from './userSlice';
import { postsApi } from "../services/posts";
import { commentApi } from "../services/comment";
import { userApi } from "../services/user";

export const store = configureStore({
    reducer: {
        togglePopup: togglePopupReducer,
        user: userReducer,
        [postsApi.reducerPath]: postsApi.reducer,
        [commentApi.reducerPath]: commentApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
        .concat(postsApi.middleware)
        .concat(commentApi.middleware)
        .concat(userApi.middleware),
});
