import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/booksReducer';
import Book from '../components/Book';
import AddBookForm from '../components/AddBookForm';

const BookPage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.bookStore.bookList);
  const status = useSelector((state) => state.bookStore.status);

  useEffect(() => {
    if (status === 'empty') {
      dispatch(fetchBooks());
    }
  }, [status]);

  const mapBooks = books.map(
    (book) => (
      <Book
        key={book.item_id}
        bookData={
          {
            item_id: book.item_id,
            title: book.title,
            author: 'Anonymous',
            category: book.category,
          }
        }
      />
    ),
  );

  return (
    <section className="pcon-6">
      {mapBooks}
      <AddBookForm />
    </section>
  );
};

export default BookPage;
