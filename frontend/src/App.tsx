import { Provider } from 'react-redux'
import './App.css'
import { store } from './store/store';
import HomePage from './ui/pages/home/HomePage';
import NavBar from './ui/shared/components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PromptListPage from './ui/pages/prompt-list/PromptListPage';
import CreatePromptPage from './ui/pages/create-prompt/CreatePromptPage';
import EditPromptPage from './ui/pages/edit-prompt/EditPromptPage';
import ViewPromptPage from './ui/pages/view-prompt/ViewPromptPage';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="flex flex-row items-start">
          <div className="basis-1/6">
            <NavBar/>
          </div>
          <div className="basis-5/6">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/prompt/list" element={<PromptListPage />} />
              <Route path="/prompt/create" element={<CreatePromptPage />} />
              <Route path="/prompt/edit/:id" element={<EditPromptPage />} />
              <Route path="/prompt/view/:id" element={<ViewPromptPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

export default App
