import React from 'react';
import { Redirect, Route } from 'react-router';
import { useAppSelector } from '../../helpers/hooks';

import { userIsAuthenticated } from '../../features/user/userSlice';

const ProtectedRoute = ({ children, ...rest }: any) => {
  const isAuthenticated = useAppSelector((state) => userIsAuthenticated(state));

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: location } }} />
        )
      }
    ></Route>
  );
};

export default ProtectedRoute;
