import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Prompt } from "../../../../core/model/Prompt"
import compileTemplate from "../../../../core/application/compileTemplate";
import getTemplateInputs from "../../../../core/application/getTemplateInputs";
import { TemplateInput } from "../../../../core/model/TemplateInput";
import Title from "../../../shared/components/Title";
import Button from "../../../shared/components/Button";

interface Props {
    prompt: Prompt;
}

function Input(props: {input: TemplateInput, onChange: (input: string, value: string) => void }) {
    const {input, onChange } = props
    return (
        <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                {input.input}
            </label>
            <input value={input.value} onChange={e => onChange(input.input, e.target.value)} placeholder={input.input} id={input.input} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
            </div>
        </div>
    )
}

export default function PromptTemplate(props: Props) {

    const { prompt } = props

    const navigate = useNavigate()
    const templateInputs: TemplateInput[] = getTemplateInputs(prompt.template)
    const [inputs, setInputs] = useState<TemplateInput[]>(templateInputs)
    const [ editTemplate, setEditTemplate] = useState(false)

    const onChangeTemplateInput = (input: string, value: string) => {
        const newValue: TemplateInput = {
            input,
            value
        }
        const newInputs = [
            ...inputs.filter(i => i.input !== input),
            newValue
        ]
        setInputs(newInputs.sort((a, b) => a.input.localeCompare(b.input)))
    } 

    const onEditTemplate = () => {
        setEditTemplate(!editTemplate)
    }

    const onClick = () => {
        // navigate('/')
    }
    
    return (
        <>
            <Title title={prompt.name} subtitle={prompt.description}/>
            
            <form className="w-full max-w-lg mx-auto">
                <div className="my-8 bg-gray-400 rounded p-4">
                    <textarea className="text-xl text-white bg-gray-400 w-full"  readOnly={!editTemplate} value={compileTemplate(inputs, prompt.template)} />
                    {/* <button onClick={onEditTemplate} type="button" className="flex items-center text-indigo-600 hover:text-indigo-900 mr-2" >
                        <svg className="fill-blue-600 stroke-blue-600 w-4 h-4 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="edit"> <g> <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path> <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon> </g> </g> </g> </g></svg>
                        <span>{editTemplate? 'Editar' : 'Bloquear'}</span>
                    </button> */}
                    <p className="text-xl text-white">
                        {/* {compileTemplate(inputs, prompt.template)} */}
                    </p>
                </div>
                {inputs.map(input => <Input key={input.input} input={input} onChange={onChangeTemplateInput}/>) }
                <div className="flex justify-center">
                    <Button text="COPIAR AL PORTAPAPELES" onClick={onClick} ></Button>
                </div>
            </form>
            
        </>
    )
    
}