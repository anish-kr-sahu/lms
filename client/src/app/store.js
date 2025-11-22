import { configureStore } from "@reduxjs/toolkit";

import { authApi } from "@/features/api/authApi.js";
import { rootReducer } from "./rootReducer.js";

export const appStore = configureStore({
    reducer: rootReducer,
    middleware:(defaultMiddleware) => defaultMiddleware().concat(authApi.middleware)
});