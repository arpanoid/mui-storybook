import React, { useState } from 'react';
import { Tab, Tabs, Typography, Box } from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default {
  title: 'Material-UI/Tabs',
  component: Tabs,
  parameters: {
    tags: ['autodocs'],
  },
};

export const Default = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
        <Tab label="Tab 1" />
        <Tab label="Tab 2" />
        <Tab label="Tab 3" />
      </Tabs>
      <TabPanel value={value} index={0}>
        Tab 1 Content
      </TabPanel>
      <TabPanel value={value} index={1}>
        Tab 2 Content
      </TabPanel>
      <TabPanel value={value} index={2}>
        Tab 3 Content
      </TabPanel>
    </>
  );
};
