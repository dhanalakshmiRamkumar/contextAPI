import React,{useState} from 'react';
import {Context} from './Context';
import Counter1 from './Counter1';

function App() {
const [value,setValue] = useState(5)

const handleIncrement = () => {
  setValue(value+1)
}
const handleDecrement = () => {
  setValue(value-1)
}

const handleReset = () => {
  setValue(5)
}

  return (
  <div>
    <h3>App component</h3>
    value: {value}  <br/> <br/>
    <button onClick={handleIncrement}>Increment</button> &nbsp;
    <button onClick={handleDecrement}>Decrement</button> &nbsp;
    <button onClick={handleReset}>Reset</button> &nbsp;

    <Context.Provider
      value={{
        intitialValue: value,
        handleIncrementFromProvider: handleIncrement,
        handleDecrementFromProvider: handleDecrement,
        handleResetFromProvider: handleReset,
      }} 
      >
        
    <Counter1/>
    </Context.Provider>
  </div> 
  );
}

export default App;
