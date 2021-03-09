import React from 'react';
import '../Button.css';
import PropTypes from 'prop-types';

const isEqual = (val) => val === '=';

const Button = ({ name }) => (
  <button type="button" className={ isEqual(name) ? 'eqlBtn' : 'btn' }>
    { name }
  </button>
);

Button.propTypes = {
  name: PropTypes.node.isRequired,
};

export default Button;
