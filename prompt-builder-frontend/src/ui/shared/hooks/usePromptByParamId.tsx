import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState } from '../../../store/store';

export default function usePrompByParamId() {
  const { id } = useParams();
  const prompt = useSelector((state: RootState) => state.prompt.prompts.find(p => p.id === id));
  return prompt;
}
