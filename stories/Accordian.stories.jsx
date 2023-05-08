import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default {
  title: 'Material-UI/Accordion',
  component: Accordion,
  parameters: {
    tags: ['autodocs'],
  },
};

export const Default = () => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />} id="accordion-header">
      <Typography>Accordion Header</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>Accordion content goes here.</Typography>
    </AccordionDetails>
  </Accordion>
);
