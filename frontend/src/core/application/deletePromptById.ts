import axios from 'axios';
import { PROMPT_SERVER } from '../config';

export default async function deletePromptById(id: string) {
    const url = `${PROMPT_SERVER}/prompts/${id}`
    return axios
        .delete(url)
        .then(response => response.data)
}   