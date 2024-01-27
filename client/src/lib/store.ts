import {EnhancedStore, StoreEnhancer, ThunkDispatch, Tuple, UnknownAction, configureStore} from "@reduxjs/toolkit"
import themeReducer from "./features/themeSlice"
import userSlice from "./features/userSlice"

export const store = configureStore({
    reducer:{
        theme:themeReducer,
        user:userSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
