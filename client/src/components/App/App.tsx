import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, DogList, AddDogForm } from '..';

const App = (): JSX.Element => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/dogs/add'>
          <AddDogForm />
        </Route>
        <Route path='/dogs'>
          <DogList />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
