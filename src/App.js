import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Login from './components/login/Login';
import User from './components/user/User';

function App() {
  return (
    <div className="App">
      {
        localStorage.getItem("userInfo") ?
          <User />
          :
          <Login />
      }
    </div>
  );
}

export default App;
