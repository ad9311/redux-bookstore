import PropTypes from 'prop-types';
import BooData from './BookData';
import BookCompletion from './BookCompletion';
import BookChapter from './BookChapter';
import './Book.css';

const Book = (props) => {
  const { bookData } = props;
  return (
    <section className="book-section">
      <BooData bookData={bookData} />
      <BookCompletion />
      <BookChapter />
    </section>
  );
};

Book.propTypes = {
  bookData: PropTypes.shape(),
};

Book.defaultProps = {
  bookData: [],
};

export default Book;
