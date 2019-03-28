import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProp } from './../../../utils/utils';
import ListItem from './index';

describe('ListItem Component', () => {
  describe('Checking props', () => {
    test('Should not throw a warning', () => {
      const expectedProps = {
        title: 'Test Title',
        desc: 'Test Description'
      };
      const propError = checkProp(ListItem, expectedProps);
      expect(propError).toBeUndefined();
    });
  });

  describe('Component Renders', () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        title: 'Test Title',
        desc: 'Test Description'
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    test('Should render without error', () => {
      const component = findByTestAttr(wrapper, 'listItemComponent');
      expect(component.length).toBe(1);
    });

    test('Should render a title', () => {
      const title = findByTestAttr(wrapper, 'componentTitle');
      expect(title.length).toBe(1);
    });

    test('Should render a description', () => {
      const desc = findByTestAttr(wrapper, 'componentDescription');
      expect(desc.length).toBe(1);
    });
  });

  describe('Should not render', () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        desc: 'Test Description'
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    test('Should not render a title', () => {
      const title = findByTestAttr(wrapper, 'componentTitle');
      expect(title.length).toBe(0);
    });
  });
});
