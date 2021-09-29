import { useSelector } from 'react-redux';
import Book from '../components/Book';
import AddBookForm from '../components/AddBookForm';

const BookPage = () => {
  const books = useSelector((state) => state.booksReducer);
  const mapBooks = books.map(
    (book) => (
      <Book
        key={book.id}
        bookId={book.id}
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
