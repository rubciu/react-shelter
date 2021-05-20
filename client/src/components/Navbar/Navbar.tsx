import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (): JSX.Element => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/dogs'>Dog list</Link>
        </li>
        <li>
          <Link to='/dogs/add'>Add dog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
