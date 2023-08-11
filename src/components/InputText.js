import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Input from '@mui/material/Input';

function InputText({ onSubmit, onReRun }) {
  const [text, setText] = useState('');
  const [question, setQuestion] = useState('');

  const handleSubmit = () => {
    onSubmit({ text, question });
  };

  const handleReRun = () => {
    setText('');
    setQuestion('');
    onReRun(); 
  };

  const card = (
    <React.Fragment>
      <CardContent sx={{ padding: '20px', textAlign: 'left' }}>
      <Typography variant="body1" gutterBottom color="#ffffff">
          Context:
        </Typography>
        <TextareaAutosize
          minRows={8}
          maxRows={20}
          style={{
            width: '96%',
            maxWidth: '96%',
            marginBottom: '10px',
            padding: '10px',
            backgroundColor: 'transparent',
            color: '#ffffff',
            borderRadius:'5px',
            fontSize:'15px',
            border: '2px solid #3b3e42',
          }}
          placeholder="Enter the text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Typography variant="body1" gutterBottom color="#ffffff">
          Question:
        </Typography>

        <Input
          fullWidth
          style={{
            width: '100%',
            marginBottom: '10px',
            padding: '3px 10px ',
            backgroundColor: 'transparent',
            color: '#ffffff',
            fontFamily:'monospace',
            borderRadius: '5px',
            fontSize:'15px',
            border: '2px solid #3b3e42',
          }}
          placeholder="Enter your Question Here ...."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </CardContent>
      <CardActions sx={{ padding:'20px',paddingBottom:'40px',textAlign: 'left' }}>
      <Button
  sx={{
    flexGrow: 1,
    background: 'linear-gradient(-45deg, #ee7752, #e73c7e)',
    boxShadow: 'none', 
    color: 'white', 
    '&:hover': {
      background: 'linear-gradient(-45deg, #e73c7e, #ee7752)',
      boxShadow: 'none', 
    },
    '& + button': {
      borderColor: 'white', 
    },
  }}
  variant="contained"
  onClick={handleSubmit}
>
  Submit
</Button>
<Button
  sx={{
    flexGrow: 1,
    color: 'white', 
    borderColor: 'white', 
  }}
  variant="outlined"
  onClick={handleReRun}
>
  Re-Run
</Button>

      </CardActions>
    </React.Fragment>
  );

  return (
    <div>
      <Box sx={{ minWidth: 275, maxWidth: '800px', margin: '0 auto' }}>
      <Card variant="outlined" sx={{ backgroundColor: '#141920' }}>
          {card}
        </Card>
      </Box>
    </div>
  );
}

export default InputText;
