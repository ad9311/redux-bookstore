import './Book.css';

const BookCompletion = () => (
  <div className="pos-relative d-flex flex-1">
    <div className="oval">
      <span>.</span>
    </div>
    <div className="ml-2">
      <span className="prompt-font fs-5">64%</span>
      <br />
      <span className="prompt-font dark-gray">Completed</span>
      <hr className="separator" />
    </div>
  </div>
);

export default BookCompletion;
