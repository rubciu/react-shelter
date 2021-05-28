import { act } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';

import { testRender } from '../../helpers/test-utils';

import { DogList } from '..';

const mockStore = configureMockStore();
const state = {
  dogs: {
    dogs: [],
    status: 'idle',
    error: undefined,
  },
};

describe.skip('<App />', () => {
  test('renders text `Max`', async () => {
    const store = mockStore({ state });

    await act(async () => {
      testRender(<DogList />, { store });
    });

    expect(await screen.findByText(/Max/i));
  });
});
