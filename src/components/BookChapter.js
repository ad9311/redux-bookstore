import './Book.css';

const BookChapter = () => (
  <div className="flex-1">
    <span className="d-block dark-gray pb-1">CURRENT CHAPTER</span>
    <span className="d-block pb-3">Chapter 17</span>
    <input className="progress-buttom" type="button" value="UPDATE PROGRESS" />
  </div>
);

export default BookChapter;
