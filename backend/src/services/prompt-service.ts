import { Prompt } from './../model/Prompt'
import { deleteDocumentById, getDocuments, setDocument } from './firebase'

const COLLECTION = 'prompts'

type PromptDocument = Omit<Prompt, 'id'>

export class PromptService {

    async save(prompt: Prompt) {
        const document = {
            name: prompt.name,
            description: prompt.description,
            template: prompt.template
        }   
        return setDocument<PromptDocument>(COLLECTION, prompt.id, document)
    }

    async getAll(): Promise<Prompt[]> {
        return getDocuments(COLLECTION)
            .then(documents => documents.map((doc: any) => ({
                id: doc.id,
                name: doc.name,
                description: doc.description,
                template: doc.template
            })))
    }

    async delete(id: string) {
        return deleteDocumentById(COLLECTION, id)
    }

}

const service = new PromptService()
export default service