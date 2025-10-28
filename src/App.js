import './App.css';
import {  useReducer } from 'react';
import DigitButton from './DigitButton';
import OperationButton from './OperationButton';

//objects for certain actions when using the calculator
export const actions = {
  add_digit: 'add-digit',
  choose_operation: 'choose-operation',
  clear: 'clear',
  evaluate: 'evaluate'
}

//function that controls state changes in response to actions sent by your buttons
const reducer = (state, { type, payload }) => {
  //decides how to update the state
  switch(type) {
    case actions.add_digit:
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`
      }
  }
}

function App() {
  //initialize reducer
  const [{ currentOperand, previousOperand, operation }, dispatch] = 
  useReducer(reducer, {})

  //Test dispatch
  dispatch( { type: actions.add_digit, payload: { digit: 1}})

  return (
    <div className="calculator-grid">
      <div className="output" id="display">
        <div className="previous-operand">{previousOperand} {operation}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span-two" id="clear">AC</button>
      <OperationButton operation="/" dispatch={dispatch}/>
      <OperationButton operation="*" dispatch={dispatch}/>
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operation="-" dispatch={dispatch}/>
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operation="+" dispatch={dispatch}/>
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operation="=" dispatch={dispatch}/>
      <DigitButton digit="0" dispatch={dispatch} />
      <OperationButton operation="." dispatch={dispatch}/>
    </div>
  );
}

export default App;
