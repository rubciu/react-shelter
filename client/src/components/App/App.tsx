import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navbar, DogList, AddDogForm, ProtectedRoute } from '..';
import LoginPage from '../../pages/LoginPage/LoginPage';
import styles from './App.module.scss';

const App = (): JSX.Element => {
  return (
    <div className={styles.App}>
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
    </div>
  );
};

export default App;
