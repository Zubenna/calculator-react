import React from 'react';
import '../Button.css';
import PropTypes from 'prop-types';

const isEqual = val => val === '=';

const Button = ({ name, onClick }) => (
  <button type="button" className={isEqual(name) ? 'eqlBtn' : 'btn'} onClick={() => onClick(name)}>
    { name }
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
