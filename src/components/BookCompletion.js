import logo from '../img/progress.png';
import './BookCompletion.css';

const BookCompletion = () => (
  <div className="pos-relative d-flex flex-1">
    <div>
      <img className="progress-img" src={logo} alt="progress" />
    </div>
    <div className="ml-2">
      <span className="prompt-font fs-5">64%</span>
      <br />
      <span className="prompt-font dark-gray">Completed</span>
      <hr className="vertical-separator" />
    </div>
  </div>
);

export default BookCompletion;
