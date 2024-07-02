import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Payment from './components/Payment';
import FrontPage from './components/FrontPage';
import Cartfood from './components/Cartfood';
import Add from './components/Add';
import FoodViews from './components/FoodViews';

function App() {
  return (
    <div>
      <SignUp/>
      <SignIn/>
      <Payment/>
      <FrontPage/>
      <Cartfood/>
      <Add/>
      <FoodViews/>
    </div>
  );
}

export default App;
