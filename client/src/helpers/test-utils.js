import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

export const testRender = (jsx, { store, ...otherOptions }) =>
  render(<Provider store={store}>{jsx}</Provider>, otherOptions);
