import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksReducer';

const AddBookForm = () => {
  const dispatch = useDispatch();

  const categories = [
    'Action & Adventure',
    'Dystopian',
    'Fantasy',
    'Historical Fiction',
    'History',
    'Horror',
    'LGBTQ+',
    'Mystery',
    'Romance',
    'Science Fiction',
    'Thriller & Suspens',
    'Women\'s Fiction',
  ];

  const mapCategories = categories.map(
    (name) => (
      <option key={name}>{name}</option>
    ),
  );

  const getBookInfo = (e) => (
    {
      id: uuid(),
      title: e.target.childNodes[0].value,
      author: 'Anonymous',
      category: e.target.childNodes[1].value,
    }
  );

  const add = (e) => {
    e.preventDefault();
    dispatch(addBook(getBookInfo(e)));
  };

  return (
    <section className="pl-3">
      <h2>Add New Book</h2>
      <form onSubmit={add}>
        <input placeholder="Book title" className="mr-2" />
        <select required className="mr-2">
          {mapCategories}
        </select>
        <input type="submit" value="Add Book" />
      </form>
    </section>
  );
};

export default AddBookForm;
