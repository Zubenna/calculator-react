import React from 'react';
import '../App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import React, { Component } from 'react'
import calculate from '../logic/calculate';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      total: null,
      operation: null,
      next: null
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    const changedState = calculate(this.state, buttonName);
    this.setState(changedState);
  }

  showResult = state => {
    const { total, next, operation } = state;
    const result = `${total}${operation}${next}`.replace(/null/g, '');
    return result === '' ? undefined : result;
  };

  render() {
    return (
      <div className="App">
       <h1>Simple Calculator UI Version 1</h1>
       <section className="calc-container">
         <>
           <Display result={showResult(this.state)} />
           <ButtonPanel onClick={this.handleClick}/>
         </>
       </section>
     </div>
    )
  }
}

export default App;

