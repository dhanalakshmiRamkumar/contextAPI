import React,{useContext} from 'react'
import {Context} from './Context';
import Counter2 from './Counter2';

export default function Counter1() {
    const getValuesFromProvider = useContext(Context)
  return (
    <>
    <h3>Counter1</h3>
    value: {getValuesFromProvider.intitialValue}  <br/> <br/>
    <button onClick={getValuesFromProvider.handleIncrementFromProvider}>Increment</button> &nbsp;
    <button onClick={getValuesFromProvider.handleDecrementFromProvider}>Decrement</button> &nbsp;
    <button onClick={getValuesFromProvider.handleResetFromProvider}>Reset</button> &nbsp;
    <Counter2/>
    </>
  )
}
