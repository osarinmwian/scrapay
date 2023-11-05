import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './redux/boookSlice'; 
import { useDispatch, useSelector } from "react-redux";
export const store = configureStore({
  reducer: {
    books: booksReducer, 
  },
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;