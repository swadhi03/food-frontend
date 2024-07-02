import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import DashBoard from './components/DashBoard';
import Payment from './components/Payment';


function App() {
  return (
    <div>
      <SignUp/>
      <SignIn/>
      <DashBoard/>
      <Payment/>
    </div>
  );
}

export default App;
