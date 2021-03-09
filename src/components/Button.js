import React from 'react';
import '../Button.css';

const isEqual = val => val === '=';

const Button = ({name}) => <button type="button" className={isEqual(name) ? 'eqlBtn' : 'btn'}>
    { name }
  </button>

export default Button;
