import './App.css';
import { AppContextProvider } from './context/AppContext/AppContext';
import TaskOne from './Tasks/TaskOne';
import MainPage from './views/MainPage';

function App() {
  return (
    <AppContextProvider>
      <MainPage/>
    </AppContextProvider>
  );
}

export default App;
