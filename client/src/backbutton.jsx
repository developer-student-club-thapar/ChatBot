// BackButton.js
import React from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const navigate = useNavigate();

  return (

    <div style={{position: 'absolute', top: 16, left: 16}}>
    <IconButton onClick={() => navigate("/")} color="primary">
      <ArrowBackIcon />
    </IconButton>
    </div>
  );
};

export default BackButton;
