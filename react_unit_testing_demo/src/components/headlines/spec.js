import React from 'react';
import { shallow } from 'enzyme';
import Headline from './Headline';
import { findByTestAttr } from './../../../../utils/utils';

const setUp = (props = {}) => shallow(<Headline {...props} />);

describe('Headline Component', () => {
  describe('Have props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: 'Test header',
        desc: 'Test description'
      };

      wrapper = setUp(props);
    });

    test('Should render without error', () => {
      const component = findByTestAttr(wrapper, 'headlineComponent');
      expect(component.length).toBe(1);
    });

    test('Should enter a H1', () => {
      const component = findByTestAttr(wrapper, 'header');
      expect(component.length).toBe(1);
    });

    test('Should enter a paragraph', () => {
      const component = findByTestAttr(wrapper, 'desc');
      expect(component.length).toBe(1);
    });
  });

  describe('Have no props', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });

    test('Should not render', () => {
      const component = findByTestAttr(wrapper, 'headlineComponent');
      expect(component.length).toBe(0);
    });
  });
});
