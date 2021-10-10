import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksReducer';
import './AddBookForm.css';

const AddBookForm = () => {
  const dispatch = useDispatch();

  const categories = [
    'Action',
    'Adventure',
    'Dystopian',
    'Fantasy',
    'Historical Fiction',
    'History',
    'Horror',
    'LGBTQ+',
    'Novel',
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

  const getBookInfo = (e) => {
    const bookInfo = {
      item_id: uuid(),
      title: e.target.childNodes[0].value,
      author: 'Anonymous',
      category: e.target.childNodes[1].value,
    };
    e.target.childNodes[0].value = '';
    return bookInfo;
  };

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addBook(getBookInfo(e)));
  };

  return (
    <section className="">
      <hr className="mt-4 separator" />
      <h2 className="prompt-font dark-gray">ADD NEW BOOK</h2>
      <form onSubmit={handleAdd}>
        <input className="mr-3 input-form prompt-font" type="text" placeholder="Book title" />
        <select required className="mr-3 input-form prompt-font">
          {mapCategories}
        </select>
        <input className="input-submit" type="submit" value="ADD BOOK" />
      </form>
    </section>
  );
};

export default AddBookForm;
