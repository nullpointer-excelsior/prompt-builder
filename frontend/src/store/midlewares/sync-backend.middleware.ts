import deletePromptById from "../../core/application/deletePromptById";
import savePrompt from "../../core/application/savePrompt";
import { rollbackPrompt } from "../slices/prompt.slice";
import { RootState } from "../store";

export const syncBackendMiddleware = (store) => (next) => (action) => {

  console.log('ACTION', action)

  if (action.type === 'prompts/savePrompt') {
    
    savePrompt(action.payload)
      .then(response => console.log('Prompt guardado en backend', response))
      .catch(err => console.error('Error guardando en backend', err))

  }

  if (action.type === 'prompts/deletePrompt') {

    const previousState = store.getState() as RootState
    const promptToDelete = previousState.prompt.prompts.find(prompt => prompt.id === action.payload) 

    deletePromptById(action.payload)
      .then(response => console.log('Prompt eliminado backend', response))
      .catch(err => {
        console.error('Error eliminando prompt en backend', err)
        if (promptToDelete) {
          store.dispatch(rollbackPrompt(promptToDelete))
        }
      })

  }

  return next(action);

};