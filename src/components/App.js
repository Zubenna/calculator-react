import React from 'react';
import '../App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';

function App() {
  return (
    <div className="App">
      <h1>Adding Basic Components: Displaying Calculator UI Version 1</h1>
      <section className="calc-container">
        <>
          <Display result="0" />
          <ButtonPanel />
        </>
      </section>
    </div>
  );
}

export default App;
