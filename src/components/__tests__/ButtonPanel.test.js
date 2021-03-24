import React from 'react';
import { render, cleanup } from '@testing-library/react';
import PropTypes from 'prop-types';
import ButtonPanel from '../ButtonPanel';

let container = null;

beforeEach(() => {
  container = document.createElement('button');
  document.body.appendChild(container);
});

afterEach(cleanup);

test('Should render all 19 buttons', () => {
  const { container } = render(<ButtonPanel clickHandler={() => {}} />);
  const buttons = container.getElementsByTagName('button');
  expect(buttons.length).toBe(19);
});

test('Prop types should be required', () => {
  expect(ButtonPanel.propTypes.clickHandler).toBe(PropTypes.func.isRequired);
});