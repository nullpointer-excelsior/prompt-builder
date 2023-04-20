import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { promptReducer } from './slices/prompt.slice';
import { syncBackendMiddleware } from './midlewares/sync-backend.middleware';

const rootReducer = combineReducers({
    prompt: promptReducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(syncBackendMiddleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

