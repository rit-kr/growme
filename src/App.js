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
              <Route path='/user' element={<User />} />
              <Route path='/department' element={<Department />} />
              <Route path='*' element={<User />} />
            </Routes>
          </>
          :
          <>
            <Routes>
              <Route path='/login' element={<Login />} />
              <Route path='/' element={<Login />} />
              <Route path='*' element={<Login />} />
            </Routes>
          </>
      }
    </div>
  );
}

export default App;
