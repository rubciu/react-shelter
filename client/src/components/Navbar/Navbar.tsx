import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../helpers/hooks";
import {
  signin,
  signout,
  userIsAuthenticated,
  getUser,
} from "../../features/user/userSlice";
import styles from "./Navbar.module.scss";

const Navbar = (): JSX.Element => {
  const isAuthenticated = useAppSelector((state) => userIsAuthenticated(state));
  const user = useAppSelector((state) => getUser(state));
  const location = useLocation<any>(); // TODO: replace any
  const history = useHistory();
  const dispatch = useAppDispatch();
  const { from } = location.state || { from: { pathname: "/" } };

  return (
    <nav className={styles.nav}>
      <div className={styles.menu}>
        <Link to="/dogs">Dogs</Link>
        <Link to="/dogs/add">Add dog</Link>
      </div>
      <div className={styles.profile}>
        {isAuthenticated ? (
          <div>
            <span className={styles.username}>{user.name}</span>
            <button
              onClick={() => {
                dispatch(signout());
                history.push("/");
              }}
            >
              Sign out
            </button>
          </div>
        ) : (
          <div className={styles.signin}>
            {/* <Link to='/login'>Sign in</Link> */}
            <button
              onClick={() => {
                dispatch(signin());
              }}
            >
              Sign in
            </button>
            <div className={styles.signup}>
              <button
                onClick={() => {
                  history.push("/signup");
                }}
              >
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
