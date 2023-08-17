import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import InputText from './InputText';

import DisplayAnswer from './DisplayAnswer';
import axios from 'axios';
import InputPdf from './InputPdf';
import InputUrl from './InputUrl';



function CustomTabPanel(props) {
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

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CustomTabs() {
  const [value, setValue] = useState(0);
  
  const [answer, setAnswer] = useState('');
  const [showAnswer, setShowAnswer] = useState(false);

  const handleUserInput = ({ text, question }) => {
    axios
      .post("https://api-inference.huggingface.co/models/deepset/roberta-base-squad2", {
        question,
        context: text,
      })
      .then((response) => {
        setAnswer(response.data["answer"]);
        setShowAnswer(true);
      })
      .catch((error) => {
        console.error("Error fetching answer:", error);
      });
  };

  const handleReRun = () => {
    setShowAnswer(false); // Hide the DisplayAnswer component
  };



  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ minWidth: 275, maxWidth: '800px', margin: '0 auto', border: '2px solid #20222a', padding: '10px', borderRadius: '10px' }}>
    <Card variant="outlined" sx={{ backgroundColor: 'transparent', border: '#ffffff' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
   
 >
          <Tab label="Context" {...a11yProps(0)} sx={{ color: value === 0 ? '#ffffff' : '#ffffff' }} />
          <Tab label="Upload pdf" {...a11yProps(1)} sx={{ color: value === 1 ? '#ffffff' : '#ffffff' }} />
          <Tab label="Enter URL" {...a11yProps(2)} sx={{ color: value === 2 ? '#ffffff' : '#ffffff' }} />
        </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
        <InputText onSubmit={handleUserInput} onReRun={handleReRun} />
        {showAnswer && <DisplayAnswer answer={answer} />}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
        <InputPdf onSubmit={handleUserInput} onReRun={handleReRun} />
        {/* {showAnswer && <DisplayAnswer answer={answer} />} */}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
        <InputUrl onSubmit={handleUserInput} onReRun={handleReRun} />
        {/* {showAnswer && <DisplayAnswer answer={answer} />} */}
        </CustomTabPanel>
        
        
      </Card> 
    </Box>
    
  );
}
