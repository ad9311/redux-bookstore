import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <section className="d-flex align-items-end pl-3">
      <div>
        <h4>{title}</h4>
        <p>{author}</p>
      </div>
      <div className="mb-2">
        <input type="button" value="remove" />
      </div>
    </section>
  );
}

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
};

Book.defaultProps = {
  title: '',
  author: '',
};

export default Book;
