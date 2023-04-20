import { TemplateInput } from "../model/TemplateInput"


function compileTemplate(inputs: TemplateInput[], template: string) {
    let result = template
    for (let input of inputs) {
        if (input.value !== '') {
            result = result.replaceAll(`{${input.input}}`, input.value)
        }
    }
    return result
}

export default compileTemplate