import "../../utils/stylesheets/department.scss";
import React, { useState } from 'react';

import { Checkbox, Box, FormControlLabel, Paper } from '@mui/material';

export default function Department() {
  const [customer, setCustomer] = useState([false, false]);
  const [design, setDesign] = useState([false, false, false]);

  const handleCustomer = (event) => {
    setCustomer([event.target.checked, event.target.checked]);
  };

  const handleSupport = (event) => {
    setCustomer([event.target.checked, customer[1]]);
  };

  const handleCustomerSuccess = (event) => {
    setCustomer([customer[0], event.target.checked]);
  };

  const handleDesign = (event) => {
    setDesign([event.target.checked, event.target.checked,event.target.checked]);
  };

  const handleGraphicDesign = (event) => {
    setDesign([event.target.checked, design[1]]);
  };

  const handleProductDesign = (event) => {
    setDesign([design[0], event.target.checked]);
  };

  const handleWebDesign = (event) => {
    setDesign([design[0],design[1], event.target.checked]);
  };

  const CustomerChildren = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Support"
        control={<Checkbox checked={customer[0]} onChange={handleSupport} />}
      />
      <FormControlLabel
        label="Customer_success"
        control={<Checkbox checked={customer[1]} onChange={handleCustomerSuccess} />}
      />
    </Box>
  );

  const designChildren = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Graphic_design"
        control={<Checkbox checked={design[0]} onChange={handleGraphicDesign} />}
      />
      <FormControlLabel
        label="Product_design"
        control={<Checkbox checked={design[1]} onChange={handleProductDesign} />}
      />
      <FormControlLabel
        label="Web_design"
        control={<Checkbox checked={design[2]} onChange={handleWebDesign} />}
      />
    </Box>
  );

  return (
    <>
      <Paper elevation={4} padding={2} margin={2}>
        <div className='department'>
          <h2>Department</h2>
          <FormControlLabel
            label="Customer_service"
            control={
              <Checkbox
                checked={customer[0] && customer[1]}
                indeterminate={customer[0] !== customer[1]}
                onChange={handleCustomer}
              />
            }
          />
          {CustomerChildren}
          <FormControlLabel
            label="Design"
            control={
              <Checkbox
                checked={design[0] && design[1] && design[2]}
                onChange={handleDesign}
              />
            }
          />
          {designChildren}
        </div>
      </Paper>
    </>
  );
}
