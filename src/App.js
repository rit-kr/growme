import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Login from './components/login/Login';
import User from './components/user/User';
import Department from './components/department/Department';

function App() {
  return (
    <div className="App">
      {
        localStorage.getItem("userInfo") ?
          <>
            <Routes>
              <Route exact path='/user' element={<User />} />
              <Route path='*' element={<User />} />
            </Routes>
          </>
          :
          <>
            <Routes>
              <Route path='*' element={<Login />} />
            </Routes>
          </>
      }
    </div>
  );
}

export default App;
