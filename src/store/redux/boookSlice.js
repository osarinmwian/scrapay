import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: 'books',
  initialState: [],
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    removeBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },
    editBook: (state, action) => {
      const index = state.findIndex((book) => book.id === action.payload.id);
      if (index !== -1) {
        const updatedBook = { ...state[index], ...action.payload };
        state.splice(index, 1, updatedBook); 
      }
    }
  
  },
});

export const { addBook, removeBook, editBook } = booksSlice.actions;

export default booksSlice.reducer;