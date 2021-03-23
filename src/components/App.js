import React, { useState } from 'react';
import '../App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

const App = () => {
  const [obj, setObj] = useState(
    {
      total: null,
      operation: null,
      next: null,
    },
  );

  const handleClick = buttonName => {
    const changedState = calculate(obj, buttonName);
    setObj(changedState);
  };

  return (
    <div className="App">
      <h1 className="app-head">Simple Calculator; Final Version</h1>
      <section className="calc-container">
        <>
          <Display result={obj.next || obj.operation || obj.total || 0} />
          <ButtonPanel clickHandler={handleClick} />
        </>
      </section>
    </div>
  );
};
export default App;
