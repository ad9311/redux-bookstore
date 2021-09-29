import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author, category } = props;
  return (
    <section className="d-flex align-items-end pl-3">
      <div>
        <p><strong>{category}</strong></p>
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
      <div className="mb-2">
        <input type="button" value="remove" />
      </div>
    </section>
  );
};

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
};

Book.defaultProps = {
  title: '',
  author: '',
  category: '',
};

export default Book;
