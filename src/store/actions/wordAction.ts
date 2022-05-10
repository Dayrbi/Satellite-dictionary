import axios from 'axios';
import { API_URL } from 'constants/baseUrl';
import { AppDispatch } from '../store';
import { Word } from '../models/Word';
import { wordSlice } from '../reducers/wordSlice';

export const getInfoByWord = (word: undefined | string) => async (dispatch: AppDispatch) => {
  try {
    dispatch(wordSlice.actions.wordLoading());

    const url = API_URL + word;
    const response = await axios.get<Word[]>(url);

    dispatch(wordSlice.actions.wordLoadingSuccess(response.data));
  } catch (e) {
    dispatch(wordSlice.actions.wordLoadingError('Fetch error'));
  }
};
