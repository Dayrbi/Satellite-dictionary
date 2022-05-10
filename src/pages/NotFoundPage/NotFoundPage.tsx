import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import ROUTEPATH from 'constants/routes';

import './NotFoundPage.css';

export const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="NotFoundPage">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Word not found
        </Typography>
        <Button
          variant="contained"
          color="success"
          onClick={() => navigate(ROUTEPATH.HOME)}
          sx={{ margin: '0 25px' }}
        >
          <ArrowBackIcon />
          Back
        </Button>
      </Box>
    </div>
  );
};
