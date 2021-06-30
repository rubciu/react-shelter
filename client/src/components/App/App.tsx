import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import { Navbar, DogList, AddDogForm, ProtectedRoute } from "..";
import styles from "./App.module.scss";

const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const SignUpPage = lazy(() => import("../../pages/SignUpPage/SignUpPage"));

const App = (): JSX.Element => {
  return (
    <div className={styles.App}>
      <Navbar />
      <div className={styles.main}>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <ProtectedRoute path="/dogs/add">
              <AddDogForm />
            </ProtectedRoute>

            <ProtectedRoute path="/dogs">
              <DogList />
            </ProtectedRoute>

            <Route path="/login">
              <LoginPage />
            </Route>

            <Route path="/signup">
              <SignUpPage />
            </Route>

            <Route exact path="/" component={() => <div>Home</div>}></Route>
          </Switch>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
