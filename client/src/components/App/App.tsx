import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, DogList, AddDogForm, ProtectedRoute } from '..';
import LoginPage from '../../pages/LoginPage/LoginPage';

const App = (): JSX.Element => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <ProtectedRoute path='/dogs/add'>
          <AddDogForm />
        </ProtectedRoute>
        <ProtectedRoute path='/dogs'>
          <DogList />
        </ProtectedRoute>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <Route exact path='/' component={() => <div>Home</div>}></Route>
      </Switch>
    </Router>
  );
};

export default App;
