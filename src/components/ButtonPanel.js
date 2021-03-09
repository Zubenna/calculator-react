import React from "react";
import Button from "./Button";

export const ButtonPanel = (props) => {
  const width2 = { width: '6rem'}
  const width1 = { width: '3rem'}
  return (
    <div className="panel-wrapper">
      <div className='row'>
       <Button name='AC'></Button>
       <Button name='+/-'></Button>
       <Button name='%'></Button>
       <Button name='÷'></Button>
      </div>
      <div className='row'>
       <Button name='7'></Button>
       <Button name='8'></Button>
       <Button name='9'></Button>
       <Button name='X'></Button>
      </div>
      <div className='row'>
       <Button name='4'></Button>
       <Button name='5'></Button>
       <Button name='6'></Button>
       <Button name='-'></Button>
      </div>
      <div className='row'>
      <Button name='1'></Button>
       <Button name='2'></Button>
       <Button name='3'></Button>
       <Button name='+'></Button>
      </div>
      <div className='row'>
       <Button style={width1} name='0'></Button>
       <Button style={width1} name='.'></Button>
       <Button style={width2} name='='></Button>
      </div>
    </div>
  );
};
