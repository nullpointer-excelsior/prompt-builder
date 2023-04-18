import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import PromptListPage from '../prompt-list/PromptListPage';
import CreatePromptPage from '../create-prompt/CreatePromptPage';
import usePromptsActions from '../../../store/actions/usePromptsActions';
import EditPromptPage from '../edit-prompt/EditPromptPage';
import ViewPromptPage from '../view-prompt/ViewPromptPage';
import NavBar from '../../shared/components/NavBar';

export default function HomePage() {

    
    const { setPrompts } = usePromptsActions()
    useEffect(() => {
        console.log('homepage-loading')
        // getPrompts()
        //     .then(response => setPrompts(response))
        //     .catch(err => console.error(err))
        setPrompts([
          {
            id:'1',
            name: 'Teacher',
            description: 'A fucking teacher',
            template: 'Actua como profesor de  {role} y responde sobre este tema {context}'
          },
          {
            id:'2',
            name: 'Developer',
            description: 'A fucking dev',
            template: 'Actua como senior dev de {language} y responde sobre programacion'
          }
        ])
    }, [])

  return (
    <div className="flex flex-row items-start">
      <div className="basis-1/6">
        <NavBar/>
      </div>
      <div className="basis-5/6">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PromptListPage />} />
            <Route path="/prompt/create" element={<CreatePromptPage />} />
            <Route path="/prompt/edit/:id" element={<EditPromptPage />} />
            <Route path="/prompt/view/:id" element={<ViewPromptPage />} />
          </Routes>
        </BrowserRouter>
      </div>
</div>

      
  )
}

