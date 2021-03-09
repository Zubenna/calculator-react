import React from "react";
import "../Button.css";

const isEqual = val => {
  return val === "=";
};

const Button = (props) => {
  return(
    <button className={isEqual(props.name) ? 'eqlBtn' : 'btn'}>{props.name}</button>
  )
};

export default Button;
