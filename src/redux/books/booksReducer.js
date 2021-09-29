const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';

const initialState = [];

export const addBook = (object) => ({
  type: ADD_BOOK,
  object,
});

export const removeBook = (object) => ({
  type: REMOVE_BOOK,
  object,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.object];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.id !== action.object)];
    default:
      return state;
  }
};

export default booksReducer;
