import React, { FC, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import {
  Box, Card, CardContent, Typography, Button,
} from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getInfoByWord } from 'store/actions/wordAction';
import { useAppSelector } from 'hooks/useAppSelector';
import { useAppDispatch } from 'hooks/useAppDispatch';

import ROUTEPATH from 'constants/routes';

import './ResultPage.css';

const ResultPage: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { searchWord } = useParams();

  const { words, isLoading, error } = useAppSelector(
    (state) => state.wordReducer,
  );

  useEffect(() => {
    dispatch(getInfoByWord(searchWord));
  }, []);

  useEffect(() => {
    if (error) navigate(ROUTEPATH.NOT_FOUND);
  }, [error]);

  return (
    <div className="resultRage">
      {isLoading ? (
        <div className="loader">
          <CircularProgress />
        </div>
      ) : (
        <Box>
          <Button
            variant="contained"
            color="success"
            onClick={() => navigate(ROUTEPATH.HOME)}
            sx={{ my: 8, ml: 2 }}
          >
            <ArrowBackIcon />
            <Typography variant="button">Back</Typography>
          </Button>
          {words.map(({ word, phonetics, meanings }, i) => (
            <Card sx={{ minWidth: 500, marginBottom: '30px' }} key={i}>
              <CardContent>
                <Box
                  sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}
                >
                  <Typography variant="h5">{word}</Typography>
                  {phonetics && phonetics.map(({ text, audio }, i) => (
                    <Box key={i}>
                      <Typography component="span">
                        {text}
                      </Typography>
                      {audio && (
                        <Button
                          variant="contained"
                          color="success"
                          onClick={() => new Audio(audio).play()}
                          sx={{ ml: 3 }}
                        >
                          <PlayArrowIcon />
                        </Button>
                      )}
                    </Box>
                  ))}
                </Box>

                <Box>
                  {meanings.map(({ partOfSpeech, definitions }) => (
                    <Box component="div" key={partOfSpeech}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                      >
                        {partOfSpeech}
                      </Typography>

                      {definitions && definitions.map(
                        ({
                          definition, example, synonyms, antonyms,
                        }) => (
                          <Box key={definition}>
                            <Box sx={{ display: 'flex' }}>
                              <Typography variant="body1">Definition:</Typography>
                              <Typography
                                variant="body2"
                                sx={{ ml: 1 }}
                              >
                                {definition}
                              </Typography>
                            </Box>
                            {example && (
                            <Box sx={{ display: 'flex' }}>
                              <Typography variant="body1">Example:</Typography>
                              <Typography
                                variant="body2"
                                sx={{ ml: 1 }}
                              >
                                {example}
                              </Typography>
                            </Box>
                            )}
                            {synonyms.length ? (
                              <Box sx={{ display: 'flex' }}>
                                <Typography variant="body1">Synonyms:</Typography>
                                {synonyms.map((synonym) => (
                                  <Typography
                                    key={synonym}
                                    sx={{ wordBreak: 'break-all', ml: 1 }}
                                    variant="body2"
                                  >
                                    {synonym}
                                  </Typography>
                                ))}
                              </Box>
                            ) : (
                              ''
                            )}

                            {antonyms.length ? (
                              <Box sx={{ display: 'flex' }}>
                                <Typography variant="body1">Antonyms:</Typography>
                                {antonyms.map((antonym) => (
                                  <Typography
                                    key={antonym}
                                    sx={{ wordBreak: 'break-all', ml: 1 }}
                                    variant="body2"
                                  >
                                    {antonyms}
                                  </Typography>
                                ))}
                              </Box>
                            ) : (
                              ''
                            )}
                          </Box>
                        ),
                      )}
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
      )}
    </div>
  );
};

export default ResultPage;
