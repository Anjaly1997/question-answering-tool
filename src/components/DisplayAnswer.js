import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import CircularProgress from '@mui/material/CircularProgress';
import { Tooltip } from '@mui/material';

const DisplayAnswer = ({ answer }) => {
  const [likeClicked, setLikeClicked] = useState(false);
  const [dislikeClicked, setDislikeClicked] = useState(false);
  const [copyClicked, setCopyClicked] = useState(false);

  const handleLike = () => {
    setLikeClicked(true);
    setDislikeClicked(false); // Disable dislike when like is clicked
  };

  const handleDislike = () => {
    setDislikeClicked(true);
    setLikeClicked(false); // Disable like when dislike is clicked
  };

  const copyToClipboard = (text) => {
    const textField = document.createElement('textarea');
    textField.value = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
  };

  const handleCopyAnswer = () => {
    if (answer) {
      copyToClipboard(answer);
      setCopyClicked(true);
    }
  };

  return (
    <Box sx={{ minWidth: 275, maxWidth: '800px', margin: '20px auto' }}>
      <Card variant="outlined" sx={{ backgroundColor: '#141920' }}>
        <CardContent sx={{ padding: '20px', textAlign: 'left' }}>
          {answer === null ? (
            <CircularProgress />
          ) : answer ? (
            <Typography variant="h6" color="#ffffff">
              {answer}
            </Typography>
          ) : (
            <Typography variant="body1" color="text.secondary">
              No answer found.
            </Typography>
          )}
          <div
            style={{
              marginTop: '10px',
              display: 'flex',
              justifyContent: 'right',
              alignItems: 'center',
            }}
          >
            <div>
              <IconButton onClick={handleLike} color="success" disabled={dislikeClicked}>
                {likeClicked ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
              </IconButton>
              <IconButton onClick={handleDislike} color="error" disabled={likeClicked}>
                {dislikeClicked ? <ThumbDownIcon /> : <ThumbDownOutlinedIcon />}
              </IconButton>
            </div>
            {answer && (
              <Tooltip title="Copy Answer">
                <IconButton onClick={handleCopyAnswer} color="primary">
                  {copyClicked ? <FileCopyIcon /> : <FileCopyOutlinedIcon />}
                </IconButton>
              </Tooltip>
            )}
          </div>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DisplayAnswer;
