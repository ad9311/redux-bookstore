import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 0,
      text: 'Bookstore CMS',
      path: '/',
    },
    {
      id: 1,
      text: 'Books',
      path: '/',
    },
    {
      id: 2,
      text: 'Categories',
      path: '/categories',
    },
  ];

  const mapLinks = links.map((link) => (
    <li key={link.id} className="d-inline-block pl-3">
      <NavLink exact to={link.path}>
        {link.id === 0 ? <h1>{link.text}</h1> : link.text}
      </NavLink>
    </li>
  ));

  return (
    <header>
      <nav>
        {mapLinks}
      </nav>
    </header>
  );
}

export default Navbar;
