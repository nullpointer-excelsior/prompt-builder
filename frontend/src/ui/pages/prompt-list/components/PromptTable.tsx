import { useNavigate } from "react-router-dom";
import usePromptsActions from "../../../../store/actions/usePromptsActions";
import { Prompt } from "../../../../core/model/Prompt";
import { useEffect, useState } from "react";
import WarningModal from "../../../shared/components/WarningModal";

interface Props {
    prompts: Prompt[];
}

export default function PromptTable(props: Props) {

    const { prompts } = props
    const [tableData, setPrompts] = useState<Prompt[]>([])
    const navigate = useNavigate();
    const { deletePrompt } = usePromptsActions()
    const [modal, setModal] = useState({ show: false, promptToDelete: ''})
    
    useEffect(() =>{
        setPrompts([...prompts])
    },[ prompts])

    const onEditPrompt = (id: string) => {
        navigate(`/prompt/edit/${id}`)
    }

    const onDeletePrompt = (id: string) => {
        console.log(id)
        setModal({ show: true, promptToDelete: id })
        deletePrompt(id)
    }

    const onAcceptDeletePrompt = () => {
        console.log('Delete', modal.promptToDelete)
        setModal({ show: false, promptToDelete: ''})
    }

    const onCancelDeletePrompt = () => {
        setModal({ show: false, promptToDelete: ''})
    }

    const onViewPrompt = (id: string) => {
        navigate(`/prompt/view/${id}`)
    }

    const onAddPrompt = () => {
        navigate('/prompt/create')
    }

    const onSearchPrompt = (search: string) => {
        if (search.trim() !== '') {
            const filtered = props.prompts.filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
            setPrompts(filtered)
        } else {
            setPrompts(props.prompts)
        }
    }
    
    return (
        <div className="container mx-4 px-4">
            <div className="flex flex-row justify-end mb-6 md:mb-0">
                <div className="basis-3/4">
                    <div className="pr-3">
                        <input onChange={e => onSearchPrompt(e.target.value)} placeholder="Buscar template" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 focus:outline-none focus:bg-white focus:border-gray-500" />
                    </div>
                </div>
                <div className="basis-1/4">
                    <button onClick={onAddPrompt} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        AGREGAR
                    </button>
                </div>
            </div>
            <div className="my-4">
                <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="bg-white divide-y divide-gray-200">
                        { tableData.map((item) => 
                            <tr key={item.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="font-bold text-sm text-gray-900">{item.name}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{item.description}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    {/* border border-solid border-2 border-green-600 rounded px-4  */}
                                    <button onClick={() => onViewPrompt(item.id)} className="flex items-center text-green-600" >
                                        <svg className="fill-green-600 w-4 h-4 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12Z" ></path> <path fillRule="evenodd" clipRule="evenodd" d="M21.83 11.2807C19.542 7.15186 15.8122 5 12 5C8.18777 5 4.45796 7.15186 2.17003 11.2807C1.94637 11.6844 1.94361 12.1821 2.16029 12.5876C4.41183 16.8013 8.1628 19 12 19C15.8372 19 19.5882 16.8013 21.8397 12.5876C22.0564 12.1821 22.0536 11.6844 21.83 11.2807ZM12 17C9.06097 17 6.04052 15.3724 4.09173 11.9487C6.06862 8.59614 9.07319 7 12 7C14.9268 7 17.9314 8.59614 19.9083 11.9487C17.9595 15.3724 14.939 17 12 17Z"></path> </g></svg>
                                        <span>Ver</span>
                                    </button>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button onClick={() => onEditPrompt(item.id)} className="flex items-center text-indigo-600 hover:text-indigo-900 mr-2" >
                                        <svg className="fill-blue-600 stroke-blue-600 w-4 h-4 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="edit"> <g> <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path> <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon> </g> </g> </g> </g></svg>
                                        <span>Editar</span>
                                    </button>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button onClick={() => onDeletePrompt(item.id)} className="flex items-center text-red-600 hover:text-red-900" >
                                    <svg className="stroke-red-600 w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M14 12V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M4 7H20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                                    <span>Eliminar</span>
                                    </button>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <WarningModal 
                title="Eliminar Prompt" 
                message="¿Deseas eliminar el prompt seleccionado?" 
                buttonMessage="Eliminar" 
                show={modal.show}
                onAccept={onAcceptDeletePrompt}
                onCancel={onCancelDeletePrompt}
                onClose={() => setModal({ show: false, promptToDelete: '' })} />
        </div>
    )
}
