import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksReducer';
import BookCompletion from './BookCompletion';
import BookChapter from './BookChapter';
import './Book.css';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    bookId,
    title,
    author,
    category,
  } = props;

  const handleRemove = () => {
    dispatch(removeBook({ item_id: bookId }));
  };

  return (
    <section className="book-section">
      <div className="flex-2">
        <div>
          <span className="category">{category}</span>
          <h2 className="m-0">{title}</h2>
          <span className="author">{author}</span>
        </div>
        <div>
          <input className="button pl-0 pr-2" type="button" value="Comments" />
          <input className="button buttom-center" type="button" value="Remove" onClick={handleRemove} />
          <input className="button pl-2" type="button" value="Edit" />
        </div>
      </div>
      <BookCompletion />
      <BookChapter />
    </section>
  );
};

Book.propTypes = {
  bookId: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
};

Book.defaultProps = {
  bookId: '',
  title: '',
  author: '',
  category: '',
};

export default Book;
