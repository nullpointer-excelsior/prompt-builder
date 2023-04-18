import { Provider } from 'react-redux'
import './App.css'
import { store } from './store/store';
import HomePage from './ui/pages/home/HomePage';
import NavBar from './ui/shared/components/NavBar';

function App() {

  

  return (
    <Provider store={store}>
      <NavBar/>
      <HomePage/>
    </Provider>
  )
}

export default App
