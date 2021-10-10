import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksReducer';
import './BookData.css';

const BookData = (props) => {
  const dispatch = useDispatch();
  const { bookData } = props;
  const handleRemove = () => {
    dispatch(removeBook({ item_id: bookData.item_id }));
  };

  return (
    <div className="flex-2">
      <div>
        <span className="category">{bookData.category}</span>
        <h2 className="m-0">{bookData.title}</h2>
        <span className="author">{bookData.author}</span>
      </div>
      <div>
        <input className="button pl-0 pr-2" type="button" value="Comments" />
        <input className="button buttom-center" type="button" value="Remove" onClick={handleRemove} />
        <input className="button pl-2" type="button" value="Edit" />
      </div>
    </div>
  );
};

BookData.propTypes = {
  bookData: PropTypes.shape(),
};

BookData.defaultProps = {
  bookData: [],
};

export default BookData;
