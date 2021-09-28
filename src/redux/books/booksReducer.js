const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = 0;

export const addBook = () => ({
  type: ADD_BOOK,
});

export const removeBook = () => ({
  type: REMOVE_BOOK,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return state + 1;
    case REMOVE_BOOK:
      return state - 1;
    default:
      return state;
  }
};

export default booksReducer;
