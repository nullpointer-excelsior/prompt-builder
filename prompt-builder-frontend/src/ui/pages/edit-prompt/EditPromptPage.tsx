import { useNavigate, useParams } from "react-router-dom";
import { Prompt } from "../../../core/model/Prompt";
import usePromptsActions from "../../../store/actions/usePromptsActions";
import Title from "../../shared/components/Title";
import PromptForm from "../../shared/components/PromptForm";
import usePrompByParamId from "../../shared/hooks/usePromptByParamId";
import PageContainer from "../../shared/components/PageContainer";

export default function EditPromptPage() {
    
    const navigate = useNavigate();
    const prompt = usePrompByParamId()
    const { savePrompt } = usePromptsActions()
    
    const onSavePrompt = (newPrompt: Prompt) => {
        savePrompt(newPrompt)
        navigate('/')
    }

    if (!prompt) {
        return <p>No se encontro el prompt</p>
    }

    return (
        <PageContainer>
            <Title title="Prompt maintaner" subtitle="Editar o crear prompt"/>
            <PromptForm onSubmit={data => onSavePrompt(data)} prompt={prompt} />
        </PageContainer>
    )
}