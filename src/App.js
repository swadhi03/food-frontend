import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import ViewFood from './components/ViewFood';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<ViewFood/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
