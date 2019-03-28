import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProp } from './../../../utils/utils';
import SharedButton from './index';

describe('ShareButton Component', () => {
  describe('Checking PropTypes', () => {
    test('Should Not throw a warning', () => {
      const expectedProps = {
        buttonText: 'Test Button Text',
        emitEvent: () => {}
      };

      const propsError = checkProp(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe('Renders', () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        buttonText: 'Test Button Text',
        emitEvent: () => {}
      };
      wrapper = shallow(<SharedButton {...props} />);
    });

    test('Should Render a button', () => {
      const button = findByTestAttr(wrapper, 'buttonComponent');
      expect(button.length).toBe(1);
    });
  });
});
