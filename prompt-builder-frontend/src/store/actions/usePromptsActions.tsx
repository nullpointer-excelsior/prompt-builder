import { useDispatch } from "react-redux";
import { Prompt } from "../../core/model/Prompt";
import { deletePrompt, savePrompt, setPrompts } from "../slices/prompt.slice";

export default function usePromptsActions() {
    const dispatch = useDispatch()
    return {
        setPrompts: (promps: Prompt[]) => dispatch(setPrompts(promps)),
        savePrompt: (promp: Prompt) => dispatch(savePrompt(promp)),
        deletePrompt: (id: string) => dispatch(deletePrompt(id)),
    }
}