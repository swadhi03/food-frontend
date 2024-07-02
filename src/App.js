import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Payment from './components/Payment';

function App() {
  return (
    <div>
      <SignUp/>
      <SignIn/>
      <Payment/>
    </div>
  );
}

export default App;
