import React from 'react';
import { render, cleanup } from '@testing-library/react';
import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';
import Button from '../Button';

let container = null;

beforeEach(() => {
  container = document.createElement('button');
  document.body.appendChild(container);
});

afterEach(cleanup);

test('Should render one button', () => {
  const { container } = render(<Button clickHandler={() => {}} name="4" />);
  const buttons = container.getElementsByTagName('button');
  expect(buttons.length).toBe(1);
});

it("Should render a button of type 'button'", () => {
  const tree = renderer
    .create(<Button clickHandler={() => {}} name="3" />)
    .toJSON();
  expect(tree.type).toBe('button');
});

test('Button name should be 5', () => {
  const { container } = render(<Button clickHandler={() => {}} name="5" />);
  const buttons = container.getElementsByTagName('button');
  expect(buttons[0].textContent).toBe('5');
});

test('Prop types should be required', () => {
  expect(Button.propTypes.name).toBe(PropTypes.string.isRequired);
  expect(Button.propTypes.clickHandler).toBe(PropTypes.func.isRequired);
});
