import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchBooksAPI from '../fetchBooksAPI';

const ADD_BOOK = 'bookStore/books/ADD_BOOK/fulfilled';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK/fulfilled';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS/fulfilled';

const initialState = {
  status: 'empty',
  bookList: [],
};

export const addBook = createAsyncThunk('bookStore/books/ADD_BOOK', async (book) => {
  await fetchBooksAPI('POST', book);
  return book;
});

export const removeBook = createAsyncThunk('bookStore/books/REMOVE_BOOK', async (book) => {
  await fetchBooksAPI('DELETE', book);
  return book;
});

export const fetchBooks = createAsyncThunk('bookStore/books/FETCH_BOOKS', async () => {
  const response = await fetchBooksAPI('GET');
  return response;
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        status: 'Sent',
        bookList: [...state.bookList, action.payload],
      };
    case REMOVE_BOOK:
      return {
        status: 'Removed',
        bookList: [...state.bookList.filter((book) => book.item_id !== action.payload.item_id)],
      };
    case FETCH_BOOKS:
      return {
        status: 'Received',
        bookList: [...state.bookList, ...action.payload],
      };
    default:
      return state;
  }
};

export default booksReducer;
