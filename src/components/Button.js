import React from 'react';
import '../Button.css';

const isEqual = val => val === '=';

const Button = props => <button type='button' className={isEqual(props.name) ? 'eqlBtn' : 'btn'}>{props.name}</button>

export default Button;
