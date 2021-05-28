import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-test-renderer';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';

import { testRender } from '../../helpers/test-utils';
import { App } from '..';

const mockStore = configureMockStore();
const unAuthenticateduser = {
  _id: '',
  name: '',
  email: '',
  authenticated: false,
};
const state = {
  user: {
    user: {},
    status: 'idle',
    error: undefined,
  },
};

const authenticatedUser = {
  _id: '12345',
  name: 'Ruben',
  email: 'ruben@gmail.com',
  authenticated: true,
};

const dogs = [
  {
    name: 'Elvis',
    breed: 'Yorkshire',
    age: 7,
  },
];

describe('Protected Route', () => {
  test('should redirect to /login if user is not authenticated', () => {
    const history = createMemoryHistory();
    const store = mockStore({
      user: {
        ...state.user,
        user: unAuthenticateduser,
      },
    });

    history.push('/dogs');

    testRender(
      <Router history={history}>
        <App />
      </Router>,
      { store }
    );

    expect(screen.getByText(/log in/i)).toBeInTheDocument();
  });

  test('should access child route if user is authenticated', async () => {
    const history = createMemoryHistory();
    const store = mockStore({
      user: {
        ...state.user,
        user: authenticatedUser,
      },
    });

    history.push('/dogs');

    await act(async () => {
      testRender(
        <Router history={history}>
          <App />
        </Router>,
        { store }
      );
    });
    expect(
      screen.getByText(/Welcome to the list of dogs/i)
    ).toBeInTheDocument();
  });
});
