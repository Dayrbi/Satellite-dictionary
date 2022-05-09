import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Word } from '../models/Word';

interface WordState {
  words: Word[];
  isLoading: boolean;
  error: string;
}

const initialState: WordState = {
  words: [],
  isLoading: false,
  error: '',
};

export const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    wordLoading(state) {
      state.isLoading = true;
    },
    wordLoadingSuccess(state, action: PayloadAction<Word[]>) {
      state.isLoading = false;
      state.words = action.payload;
    },
    wordLoadingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default wordSlice.reducer;
