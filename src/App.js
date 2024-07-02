import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import DashBoard from './components/DashBoard';


function App() {
  return (
    <div>
      <SignUp/>
      <SignIn/>
      <DashBoard/>
    </div>
  );
}

export default App;
