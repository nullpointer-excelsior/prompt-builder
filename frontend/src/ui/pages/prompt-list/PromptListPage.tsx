import PromptTable from "./components/PromptTable"
import Title from "../../shared/components/Title"
import PageContainer from "../../shared/components/PageContainer";
import { RootState } from "../../../store/store";
import { useSelector } from "react-redux";

export default function w2PromptListPage() {
    
    const state = useSelector((state: RootState) => state.prompt)
    const { prompts, loading } = state
    return (
        <PageContainer>
            <Title title="Prompt list" subtitle="Lista de prompts"/>
            { !loading ? <PromptTable prompts={prompts}/>: <div>Loading content...</div>}
        </PageContainer>
    )
}

