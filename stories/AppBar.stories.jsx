import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

export default {
  title: 'Material-UI/AppBar',
  component: AppBar,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['regular', 'dense'],
      },
    },
  },
  parameters: {
    tags: ['autodocs'],
  },
};

const Template = ({ variant }) => (
  <AppBar position="static">
    <Toolbar variant={variant}>
      <Typography variant="h6" component="div">
        AppBar with Toolbar
      </Typography>
    </Toolbar>
  </AppBar>
);

export const Default = Template.bind({});
Default.args = {
  variant: 'regular',
};
