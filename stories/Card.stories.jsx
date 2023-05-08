import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export default {
  title: 'Material-UI/Card',
  component: Card,
};

export const Default = () => (
  <Card>
    <CardContent>
      <Typography variant="h5">Card Title</Typography>
      <Typography variant="body2" color="text.secondary">
        Card content goes here.
      </Typography>
    </CardContent>
  </Card>
);
