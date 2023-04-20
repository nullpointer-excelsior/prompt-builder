import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Prompt } from '../../core/model/Prompt';

export type PromptState = {
    loading: boolean;
    prompts: Prompt[];
}

const initialState: PromptState = {
    loading: false,
    prompts: []
};

const slice = createSlice({
    name: 'prompts',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) =>{
            state.loading = action.payload
        },
        setPrompts: (state, action: PayloadAction<Prompt[]>) => {
            state.prompts = action.payload
            state.loading = false
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
        },
        rollbackPrompt: (state, action: PayloadAction<Prompt>) => {
            const isUserAlreadyDefined = state.prompts.some(prompt => prompt.id === action.payload.id)
			if (!isUserAlreadyDefined) {
				state.prompts.push(action.payload)
			}
            return state
        }
    },
});

export const { setPrompts, savePrompt, deletePrompt, rollbackPrompt, setLoading } = slice.actions;

export const promptReducer = slice.reducer;


