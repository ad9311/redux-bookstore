import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchBooksAPI from '../fetchBooksAPI';

const ADD_BOOK = 'bookStore/books/ADD_BOOK/fulfilled';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK/fulfilled';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS/fulfilled';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const fetchBooks = createAsyncThunk('bookStore/books/FETCH_BOOKS', async () => {
  const response = await fetchBooksAPI('GET');
  console.log(response);
  return response;
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.item_id !== action.payload)];
    case FETCH_BOOKS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default booksReducer;
