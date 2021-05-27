import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks';
import {
  signin,
  signout,
  userIsAuthenticated,
} from '../../features/user/userSlice';
import styles from './Navbar.module.scss';

const Navbar = (): JSX.Element => {
  const isAuthenticated = useAppSelector((state) => userIsAuthenticated(state));
  const location = useLocation<any>(); // TODO: replace any
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { from } = location.state || { from: { pathname: '/' } };

  return (
    <nav className={styles.navbar}>
      <div className={styles.menu}>
        <Link to='/dogs'>Dogs</Link>
        <Link to='/dogs/add'>Add dog</Link>
      </div>
      <div className={styles.profile}>
        {isAuthenticated ? (
          <button
            onClick={() => {
              dispatch(signout());
            }}
          >
            Sign out
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(signin());
              history.replace(from);
            }}
          >
            Sign in
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
