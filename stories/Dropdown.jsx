import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

export default {
  title: 'Material-UI/Dropdown',
  component: Select,
};

const Template = (args) => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl variant="outlined" fullWidth>
      <InputLabel id="demo-simple-select-outlined-label">Options</InputLabel>
      <Select
        {...args}
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={value}
        onChange={handleChange}
        label="Options"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </Select>
    </FormControl>
  );
};

export const Default = Template.bind({});
Default.args = {};
