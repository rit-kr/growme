// import { Route, Routes } from 'react-router-dom';
// import './App.scss';
// import Login from './components/login/Login';
// import User from './components/user/User';
// import Department from './components/department/Department';

// function App() {
//   return (
//     <div className="App">
//       {
//         localStorage.getItem("userInfo") ?
//           <>
//             <Routes>
//               <Route path='/user' element={<User />} />
//               <Route path='/department' element={<Department />} />
//             </Routes>
//           </>
//           :
//           <>
//             <Routes>
//               <Route path='/login' element={<Login />} />
//               <Route path='/' element={<Login />} />

//               <Route path='*' element={<Login />} />
//             </Routes>
//           </>
//       }
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const data = [
  {
    department: 'customer_service',
    sub_departments: ['support', 'customer_success'],
  },
  {
    department: 'design',
    sub_departments: ['graphic_design', 'product_design', 'web_design'],
  },
];

export default function Department() {
  const [checked, setChecked] = React.useState([]);

  const handleChangeParent = (event) => {
    const newChecked = event.target.checked ? data.flatMap((d) => d.sub_departments) : [];
    setChecked(newChecked);
  };

  const handleChangeChild = (event, subDepartment) => {
    const newChecked = event.target.checked
      ? [...checked, subDepartment]
      : checked.filter((subDep) => subDep !== subDepartment);
    setChecked(newChecked);
  };

  const renderSubDepartments = () => {
    return data.map((d) => (
      <Box key={d.department} sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
        <FormControlLabel
          label={d.department}
          control={
            <Checkbox
              checked={checked.includes(d.department)}
              onChange={(event) => handleChangeChild(event, d.department)}
            />
          }
        />
        {d.sub_departments.map((subDep) => (
          <FormControlLabel
            key={subDep}
            label={subDep}
            control={
              <Checkbox
                checked={checked.includes(subDep)}
                onChange={(event) => handleChangeChild(event, subDep)}
              />
            }
          />
        ))}
      </Box>
    ));
  };

  return (
    <div>
      <FormControlLabel
        label="All Departments"
        control={
          <Checkbox
            checked={checked.length === data.flatMap((d) => d.sub_departments).length}
            indeterminate={checked.length > 0 && checked.length < data.flatMap((d) => d.sub_departments).length}
            onChange={handleChangeParent}
          />
        }
      />
      {renderSubDepartments()}
    </div>
  );
}

