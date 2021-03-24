import React from 'react';
import { render } from '@testing-library/react';
import PropTypes from 'prop-types';
import Display from '../Display';

test('Should render default value', () => {
  const { getByText } = render(<Display result='0' />);
  getByText(0);
});

test('Should render new result (789)', () => {
  const { getByText } = render(<Display result="789" />);
  getByText('789');
});

test('Prop types should be required', () => {
  expect(Display.propTypes.result).toBe(PropTypes.string);
});
