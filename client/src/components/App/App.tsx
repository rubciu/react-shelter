import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, DogList, AddDogForm, ProtectedRoute } from '..';
import LoginPage from '../../pages/LoginPage/LoginPage';

const App = (): JSX.Element => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <ProtectedRoute path='/dogs/add'>
          <AddDogForm />
        </ProtectedRoute>
        <ProtectedRoute path='/dogs'>
          <DogList />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
};

export default App;
