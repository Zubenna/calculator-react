import React from 'react';
import '../Button.css';
import PropTypes from 'prop-types';

const isEqual = val => val === '0';

const operators = ['+', '-', '÷', 'x', '='];

const isColor = val => operators.includes(val);

const Button = ({ name, onClick }) => (
  <button type="button" className={`${isEqual(name) ? 'zeroBtn' : 'btn'} ${isColor(name) ? 'colorBtn' : ''}`} onClick={() => onClick(name)}>
    { name }
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
