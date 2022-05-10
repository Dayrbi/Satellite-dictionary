import { combineReducers, configureStore } from '@reduxjs/toolkit';
import wordReducer from './reducers/wordSlice';

const rootReducer = combineReducers({
  wordReducer,
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
