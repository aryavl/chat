import {Action, EnhancedStore, StoreEnhancer, ThunkAction, ThunkDispatch, Tuple, UnknownAction, configureStore} from "@reduxjs/toolkit"
import themeReducer from "./features/themeSlice"
import userSlice from "./features/userSlice"
import messageSlice from "./features/messageSlice"

export const store = configureStore({
    reducer:{
        theme:themeReducer,
        user:userSlice,
        message:messageSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
