import { combineReducers } from "@reduxjs/toolkit";
import { authApi } from "@/features/api/authApi.js";
import authReducer  from "../features/authSlice.js"

export const rootReducer = combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer
});