import React from 'react';
import { act } from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

describe('<App />', () => {
  test('renders text `Max`', async () => {
    let component;

    await act(async () => {
      component = render(<App />);
    });

    expect(await screen.findByText(/Max/i));
  });
});
