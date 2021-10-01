import { NavLink } from 'react-router-dom';
import icon from '../img/profile.ico';
import './Navbar.css';

const ProfileIcon = () => (
  <div className="profile-container">
    <NavLink exact to="/">
      <img className="profile-icon" src={icon} alt="profile" />
    </NavLink>
  </div>
);

export default ProfileIcon;
