import { Provider } from 'react-redux'
import './App.css'
import { store } from './store/store';
import NavBar from './ui/shared/components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PromptListPage from './ui/pages/prompt-list/PromptListPage';
import CreatePromptPage from './ui/pages/create-prompt/CreatePromptPage';
import EditPromptPage from './ui/pages/edit-prompt/EditPromptPage';
import ViewPromptPage from './ui/pages/view-prompt/ViewPromptPage';
import usePromptsActions from './store/actions/usePromptsActions';
import { useEffect } from 'react';
import getPrompts from './core/application/getPrompts';


function Routing() {

  const { setPrompts, setLoading } = usePromptsActions()

  useEffect(() => {
    setLoading(true)
      getPrompts()
          .then(response => {
            setPrompts(response)
          })
          .catch(err => {
            setLoading(false)
            console.error(err)
          })
  }, [])

  return (
    <BrowserRouter>
      <div className="flex flex-row items-start">
        <div className="basis-1/6">
          <NavBar/>
        </div>
        <div className="basis-5/6">
          <Routes>
              <Route path="/" element={<PromptListPage />} />
              <Route path="/prompt/list" element={<PromptListPage />} />
              <Route path="/prompt/create" element={<CreatePromptPage />} />
              <Route path="/prompt/edit/:id" element={<EditPromptPage />} />
              <Route path="/prompt/view/:id" element={<ViewPromptPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

function App() {

  return (
    <Provider store={store}>
      <Routing/>
    </Provider>
  )
}

export default App
