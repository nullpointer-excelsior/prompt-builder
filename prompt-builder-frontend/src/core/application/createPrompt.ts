import axios from 'axios';
import { Prompt } from '../model/Prompt';
import generateShortUuid from '../utils/generateShortUuid';
import { PROMPT_SERVER } from '../config';

interface CreatePromptRequest {
    name: string;
    template: string;
    description: string;
}

export default async function createPrompt(request: CreatePromptRequest) {
    const url = `${PROMPT_SERVER}/prompts`
    const id = generateShortUuid()
    const newPrompt: Prompt = {
        id: id,
        ...request
    }
    return axios
        .post(url, newPrompt)
        .then(() => newPrompt)
}   