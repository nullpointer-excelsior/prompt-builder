import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Prompt } from '../../core/model/Prompt';

export type PromptState = {
    prompts: Prompt[]
}

const initialState: PromptState = {
    prompts: []
};

const slice = createSlice({
    name: 'prompts',
    initialState,
    reducers: {
        setPrompts: (state, action: PayloadAction<Prompt[]>) => {
            state.prompts = action.payload
            return state
        },
        savePrompt: (state, action: PayloadAction<Prompt>) => {
            const promptUpdated = action.payload
            const prompts = state.prompts.filter(p => p.id !== promptUpdated.id)
            prompts.push(promptUpdated)
            state.prompts = prompts
            return state
        },
        deletePrompt: (state, action: PayloadAction<string>) => {
            const prompts = state.prompts.filter(p => p.id !== action.payload)
            state.prompts = prompts
            return state
        }
    },
});

export const { setPrompts, savePrompt, deletePrompt } = slice.actions;

export const promptReducer = slice.reducer;


