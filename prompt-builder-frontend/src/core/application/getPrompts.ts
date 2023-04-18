import axios from 'axios';
import { PROMPT_SERVER } from '../config';

async function getPrompts() {
    const url = `${PROMPT_SERVER}/prompts`
    return axios
        .get(url)
        .then(response => response.data)
}

export default getPrompts