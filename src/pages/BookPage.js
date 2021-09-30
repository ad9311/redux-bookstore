import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/booksReducer';
import Book from '../components/Book';
import AddBookForm from '../components/AddBookForm';

const BookPage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.booksReducer);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const mapBooks = books.map(
    (book) => (
      <Book
        key={book.item_id}
        bookId={book.item_id}
        title={book.title}
        author="Anonymous"
        category={book.category}
      />
    ),
  );

  return (
    <section>
      {mapBooks}
      <AddBookForm />
    </section>
  );
};

export default BookPage;
