import { TemplateInput } from "../model/TemplateInput";

function getTemplateInputs(text: string): TemplateInput[] {
    const pattern = /(?<=\{)(.*?)(?=\})/g;
    const matches = text.match(pattern);
    const variables = matches ? Array.from(new Set(matches)) : [];
    return variables
        .map(v => ({ input: v, value: ''}))
        .sort((a, b) => a.input.localeCompare(b.input));
}


export default getTemplateInputs
  