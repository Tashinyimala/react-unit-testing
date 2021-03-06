import checkPropTypes from 'check-prop-types';

export const findByTestAttr = (component, attr) =>
  component.find(`[data-test='${attr}']`);

export const checkProp = (component, expectedProps) =>
  checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
