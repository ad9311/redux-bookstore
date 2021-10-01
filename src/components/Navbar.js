import { NavLink } from 'react-router-dom';
import ProfileIcon from './ProfileIcon';
import './Navbar.css';

const Navbar = () => {
  const links = [
    {
      id: 0,
      text: 'Bookstore CMS',
      path: '/',
    },
    {
      id: 1,
      text: 'BOOKS',
      path: '/',
    },
    {
      id: 2,
      text: 'CATEGORIES',
      path: '/categories',
    },
  ];

  const mapLinks = links.map((link) => (
    <li key={link.id} className="d-inline-block pr-3">
      <NavLink exact to={link.path} activeClassName="selected">
        {link.id === 0 ? <h1 className="bookstore">{link.text}</h1> : link.text}
      </NavLink>
    </li>
  ));

  return (
    <header className="header">
      <nav className="pcon-6 d-flex justify-between align-items-center navbar">
        <ul>
          {mapLinks}
        </ul>
        <ProfileIcon />
      </nav>
    </header>
  );
};

export default Navbar;
