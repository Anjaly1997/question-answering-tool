import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';


const DisplayAnswer = ({ answer }) => {
  return (
    <Box sx={{ minWidth: 275, maxWidth: '800px', margin: '20px auto' }}>
      <Card variant="outlined" sx={{ backgroundColor: '#141920' }}>
        <CardContent sx={{ padding: '20px', textAlign: 'left' }}>
          {answer === null ? (
            <CircularProgress />
          ) : answer ? (
            <Typography variant="body1" color="#ffffff">
              {answer}
            </Typography>
          ) : (
            <Typography variant="body1" color="text.secondary">
              No answer found.
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default DisplayAnswer;
