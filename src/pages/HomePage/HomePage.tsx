import React, { ChangeEvent, FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';

import ROUTEPATH from 'constants/routes';

import './HomePage.css';

const HomePage: FC = () => {
  const navigate = useNavigate();
  const [word, setWord] = useState('');

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWord(e.currentTarget.value);
  };

  return (
    <div className="HomePage">
      <Box sx={{ marginTop: '20px' }}>
        <Box>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              display: 'flex',
              width: '100%',
              gap: '10px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            Dictionary
          </Typography>
          <TextField
            id="outlined-basic"
            label="Enter the word"
            variant="outlined"
            sx={{ minWidth: 400 }}
            value={word}
            onChange={onSearchChange}
            InputProps={{
              endAdornment: (
                <IconButton onClick={() => navigate(ROUTEPATH.RESULT + word)} disabled={!word}>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          />
        </Box>
      </Box>
    </div>
  );
};

export default HomePage;
