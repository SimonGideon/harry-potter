import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './character/characterSlice';

const store = configureStore({
  reducer: {
    characters: characterReducer,
  },
});

export default store;