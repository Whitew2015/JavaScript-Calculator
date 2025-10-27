import './App.css';
import { useEffect, useState, useReducer } from 'react';








function App() {
  return (
    <div className="calculator-grid">
      <div className="output" id="display">
        <div className="previous-operand"></div>
        <div className="current-operand"></div>
      </div>
      <button className="span-two" id="clear">AC</button>
      <button id="divide">/</button>
      <button id="multiply">*</button>
      <button id="seven">7</button>
      <button id="eight">8</button>
      <button id="nine">9</button>
      <button id="subtract">-</button>
      <button id="four">4</button>
      <button id="five">5</button>
      <button id="six">6</button>
      <button id="add">+</button>
      <button id="one">1</button>
      <button id="two">2</button>
      <button id="three">3</button>
      <button className="span-two" id="equals">=</button>
      <button className="span-two" id="zero">0</button>
      <button id="decimal">.</button>
    </div>
  );
}

export default App;
