import { useNavigate } from "react-router-dom";
import { Prompt } from "../../../core/model/Prompt";
import generateShortUuid from "../../../core/utils/generateShortUuid";
import usePromptsActions from "../../../store/actions/usePromptsActions";
import Title from "../../shared/components/Title";
import PromptForm from "../../shared/components/PromptForm";
import PageContainer from "../../shared/components/PageContainer";

export default function CreatePromptPage() {
    
    const { savePrompt } = usePromptsActions()
    const navigate = useNavigate();

    const prompt: Prompt = {
        id: generateShortUuid(),
        name: '',
        description: '',
        template: ''
    }
    
    const onSavePrompt = (newPrompt: Prompt) => {
        savePrompt(newPrompt)
        navigate('/')
    }

    return (
        <PageContainer>
            <Title title="Prompt maintaner" subtitle="Editar o crear prompt"/>
            <PromptForm onSubmit={data => onSavePrompt(data)} prompt={prompt} />
        </PageContainer>
    )
}