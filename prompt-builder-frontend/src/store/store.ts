import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { promptReducer } from './slices/prompt.slice';

const rootReducer = combineReducers({
    prompt: promptReducer
});

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

