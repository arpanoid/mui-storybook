import React from 'react';
import { Tooltip, Button } from '@mui/material';

export default {
  title: 'Material-UI/Tooltip',
  component: Tooltip,
  parameters: {
    tags: ['autodocs'],
  },
};

export const Default = () => (
  <Tooltip title="Tooltip text" arrow>
    <Button variant="contained">Hover me</Button>
  </Tooltip>
);
