import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { findByTestAttr } from './../../../../utils/utils';

const setUp = (props = {}) => shallow(<Header {...props} />);

describe('Header Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  test('Should render without errors', () => {
    // console.log(component.debug());
    const headerComponent = findByTestAttr(component, 'headerComponent');
    expect(headerComponent.length).toBe(1);
  });

  test('Should render a logo', () => {
    const logo = findByTestAttr(component, 'logoImg');
    expect(logo.length).toBe(1);
  });
});
