import React from 'react'

import '../App.css';
import { ButtonPanel } from './ButtonPanel';
import { Display } from './Display';

function App() {
  return (
    <div className="App">
     <h1>Testing React Calculator Project Setup...Testing Deployment</h1>
      <section className='calc-container'>
       <Display />
       <ButtonPanel />
      </section>
    </div>
  );
}

export default App;
