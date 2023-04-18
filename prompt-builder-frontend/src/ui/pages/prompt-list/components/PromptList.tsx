import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { useNavigate } from "react-router-dom";
import usePromptsActions from "../../../../store/actions/usePromptsActions";


export default function PromptList() {

    const prompts = useSelector((state: RootState) => state.prompt.prompts)
    const navigate = useNavigate();
    const { deletePrompt } = usePromptsActions()

    const onEditPrompt = (id: string) => {
        navigate(`prompt/edit/${id}`)
    }

    const onDeletePrompt = (id: string) => {
        deletePrompt(id)
    }

    const onViewPrompt = (id: string) => {
        navigate(`prompt/view/${id}`)
    }
    
    return (

            <table className="min-w-full divide-y divide-gray-200">
                {/* <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                        </th>
                        <th colSpan={3} className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Actions
                        </th>
                    </tr>
                </thead> */}
                <tbody className="bg-white divide-y divide-gray-200">
                    { prompts.map((item) => 
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
                                    <svg className="fill-green-600 w-4 h-4 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12Z" ></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M21.83 11.2807C19.542 7.15186 15.8122 5 12 5C8.18777 5 4.45796 7.15186 2.17003 11.2807C1.94637 11.6844 1.94361 12.1821 2.16029 12.5876C4.41183 16.8013 8.1628 19 12 19C15.8372 19 19.5882 16.8013 21.8397 12.5876C22.0564 12.1821 22.0536 11.6844 21.83 11.2807ZM12 17C9.06097 17 6.04052 15.3724 4.09173 11.9487C6.06862 8.59614 9.07319 7 12 7C14.9268 7 17.9314 8.59614 19.9083 11.9487C17.9595 15.3724 14.939 17 12 17Z"></path> </g></svg>
                                    <span>Ver</span>
                                </button>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button onClick={() => onEditPrompt(item.id)} className="flex items-center text-indigo-600 hover:text-indigo-900 mr-2" >
                                    <svg className="fill-blue-600 stroke-blue-600 w-4 h-4 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="edit"> <g> <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none"  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path> <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon> </g> </g> </g> </g></svg>
                                    <span>Editar</span>
                                </button>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button onClick={() => onDeletePrompt(item.id)} className="flex items-center text-red-600 hover:text-red-900" >
                                <svg className="stroke-red-600 w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14 12V17" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M4 7H20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                                <span>Eliminar</span>
                                </button>
                            </td>
                        </tr>)
                        
                    }
                </tbody>
            </table>

    )
}
