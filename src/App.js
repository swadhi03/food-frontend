import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Payment from './components/Payment';
import FrontPage from './components/FrontPage';
import Cartfood from './components/Cartfood';
import Add from './components/Add';
import FoodViews from './components/FoodViews';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FrontPage/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/add' element={<Add/>}/>
          <Route path='/cart' element={<Cartfood/>}/>          
          <Route path='/payment' element={<Payment/>}/>          
          <Route path='/viewfood' element={<FoodViews/>}/>                   
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
