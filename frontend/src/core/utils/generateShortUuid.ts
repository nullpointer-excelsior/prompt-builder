import { generate } from 'short-uuid';

function generateShortUuid() {
    return String(generate())
}

export default generateShortUuid