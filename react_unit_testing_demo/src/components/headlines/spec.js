import React from 'react';
import { shallow } from 'enzyme';
import Headline from './Headline';
// import checkPropTypes from 'check-prop-types';

import { findByTestAttr, checkProp } from '../../../utils/utils';

const setUp = (props = {}) => shallow(<Headline {...props} />);

describe('Headline Component', () => {
  describe('Checking PropTypes', () => {
    test('Should throw a warning', () => {
      const expectedProps = {
        header: 'test header',
        desc: 'test description',
        tempArr: [
          {
            fName: 'Test fName',
            lName: 'Test lName',
            email: 'test@gmail.com',
            age: 23,
            onlineStatus: false
          }
        ]
      };

      // const propsErr = checkPropTypes(
      //   Headline.propTypes,
      //   expectedProps,
      //   'props',
      //   Headline.name
      // );

      const propsErr = checkProp(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

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
