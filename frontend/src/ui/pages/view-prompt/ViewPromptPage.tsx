import PageContainer from "../../shared/components/PageContainer"
import usePrompByParamId from "../../shared/hooks/usePromptByParamId"
import PromptTemplate from "./components/PromptTemplate"

export default function ViewPromptPage() {

    const prompt = usePrompByParamId()

    if (!prompt) {
        return <p>prompt no encontrado</p>
    }

    return (
        <PageContainer>
            <PromptTemplate prompt={prompt} />
        </PageContainer>
    )

}