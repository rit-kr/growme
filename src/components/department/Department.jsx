import "./department.scss"
import React from 'react';
import { Checkbox, Box, FormControlLabel, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function IndeterminateCheckbox() {
  const [parent1Checked, setParent1Checked] = React.useState([false, false]);
  const [parent2Checked, setParent2Checked] = React.useState([false, false]);

  const navigate = useNavigate();

  const handleChange1 = (event) => {
    setParent1Checked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setParent1Checked([event.target.checked, parent1Checked[1]]);
  };

  const handleChange3 = (event) => {
    setParent1Checked([parent1Checked[0], event.target.checked]);
  };

  const handleChange4 = (event) => {
    setParent2Checked([event.target.checked, event.target.checked]);
  };

  const handleChange5 = (event) => {
    setParent2Checked([event.target.checked, parent2Checked[1]]);
  };

  const handleChange6 = (event) => {
    setParent2Checked([parent2Checked[0], event.target.checked]);
  };

  const handleChange7 = (event) => {
    setParent2Checked([parent2Checked[2], event.target.checked]);
  };

  const children1 = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Support"
        control={<Checkbox checked={parent1Checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Customer_success"
        control={<Checkbox checked={parent1Checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );

  const children2 = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Graphic_design"
        control={<Checkbox checked={parent2Checked[0]} onChange={handleChange5} />}
      />
      <FormControlLabel
        label="Product_design"
        control={<Checkbox checked={parent2Checked[1]} onChange={handleChange6} />}
      />
    </Box>
  );

  const handleBackToLogin = () => {
    localStorage.clear();
    navigate('/login');
    window.location.reload(true);
  }

  const handleBackToUser = () => {
    navigate('/user');
    window.location.reload(true);
  }

  return (
    <>
      <Paper elevation={4} padding={2} margin={2}>
        <div className='department'>
          <h2>Department</h2>
          <FormControlLabel
            label="Customer_service"
            control={
              <Checkbox
                checked={parent1Checked[0] && parent1Checked[1]}
                indeterminate={parent1Checked[0] !== parent1Checked[1]}
                onChange={handleChange1}
              />
            }
          />
          {children1}
          <FormControlLabel
            label="Design"
            control={
              <Checkbox
                checked={parent2Checked[0] && parent2Checked[1]}
                indeterminate={parent2Checked[0] !== parent2Checked[1]}
                onChange={handleChange4}
              />
            }
          />
          {children2}
        </div>
      </Paper>
      <div className='btn-container'>

        <Button
          onClick={handleBackToLogin}
        >
          Back to login
        </Button>
        <Button
          onClick={handleBackToUser}
        >
          Back to User
        </Button>
      </div>
    </>
  );
}
