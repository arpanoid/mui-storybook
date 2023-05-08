import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

export default {
  title: 'Material-UI/ToggleButton',
  component: ToggleButton,
  parameters: {
    tags: ['autodocs'],
  },
};

export const Default = () => {
  const [alignment, setAlignment] = useState('left');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        Left
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        Center
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        Right
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
