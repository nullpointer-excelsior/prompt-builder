import PromptList from "./components/PromptList"
import Title from "../../shared/components/Title"
import { useNavigate } from "react-router-dom"
import PageContainer from "../../shared/components/PageContainer";
import Button from "../../shared/components/Button";

export default function PromptListPage() {

    const navigate = useNavigate();

    const onAddPrompt = () => {
        navigate('prompt/create')
    }
    
    return (
        <PageContainer>
            <Title title="Prompt list" subtitle="Lista de prompts"/>
            <div className="container mx-4 px-4">
                <div className="flex flex-row justify-end mb-6 md:mb-0">
                    <div className="basis-3/4">
                        <div className="pr-3">
                            <input placeholder="Buscar template" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 focus:outline-none focus:bg-white focus:border-gray-500" />
                        </div>
                    </div>
                    <div className="basis-1/4">
                        <button onClick={onAddPrompt} className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            AGREGAR
                        </button>
                    </div>
                </div>
                <div className="my-4">
                    <PromptList/>
                </div>
        </div>
        </PageContainer>
    )
}

