import axios from 'axios';
import { Prompt } from '../model/Prompt';
import { PROMPT_SERVER } from '../config';

export default async function savePrompt(prompt: Prompt) {
    const url = `${PROMPT_SERVER}/prompts`
    return axios
        .post(url, prompt)
        .then(response => response.data)
}   