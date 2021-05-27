import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../helpers/hooks';
import { userIsAuthenticated } from '../../features/user/userSlice';
import styles from './Navbar.module.scss';

const Navbar = (): JSX.Element => {
  const isAuthenticated = useAppSelector((state) => userIsAuthenticated(state));

  return (
    <nav className={styles.navbar}>
      <div className={styles.menu}>
        <Link to='/dogs'>Dogs</Link>
        <Link to='/dogs/add'>Add dog</Link>
      </div>
      <div className={styles.profile}>
        {isAuthenticated ? <button>Sign out</button> : <button>Sign in</button>}
      </div>
    </nav>
  );
};

export default Navbar;
