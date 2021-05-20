import React from 'react';
import { shallow } from 'enzyme';
import { Navbar } from '..';

const setup = (props: any = {}) => {
  return shallow(<Navbar />);
};

describe('<Navbar />', () => {
  test('it should render', () => {});
});
