import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../user/userSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMidddleware) =>
        getDefaultMidddleware({
            serializableCheck: {
                ignoreActions: ["persist/PERSIST", "persist/REHYDRATE"]
            }
        })
})

export const persistor = persistStore(store)