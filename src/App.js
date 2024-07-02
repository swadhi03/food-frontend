import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Payment from './components/Payment';
import FrontPage from './components/FrontPage';

function App() {
  return (
    <div>
      <SignUp/>
      <SignIn/>
      <Payment/>
      <FrontPage/>
    </div>
  );
}

export default App;
