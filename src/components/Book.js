import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksReducer';

const Book = (props) => {
  const dispatch = useDispatch();
  const {
    bookId,
    title,
    author,
    category,
  } = props;

  const handleRemove = () => {
    dispatch(removeBook(bookId));
  };

  return (
    <section className="d-flex align-items-end pl-3">
      <div>
        <p><strong>{category}</strong></p>
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
      <div className="mb-2">
        <input type="button" value="remove" onClick={handleRemove} />
      </div>
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
