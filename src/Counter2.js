import React from 'react'
import {Context} from './Context'
import Counter3 from './Counter3'

export default class Counter2 extends React.Component {
    constructor(){
        super();
    }
  render() {
    return (
      <Context.Consumer>
        {(getValuesFromProvider) => {
            return (
                <>
                  <h3>Counter2</h3>
                  value: {getValuesFromProvider.intitialValue}  <br/> <br/>
                  <button onClick={getValuesFromProvider.handleIncrementFromProvider}>Increment</button> &nbsp;
                  <button onClick={getValuesFromProvider.handleDecrementFromProvider}>Decrement</button> &nbsp;
                  <button onClick={getValuesFromProvider.handleResetFromProvider}>Reset</button> &nbsp;
                  <Counter3/>
                </>
            );
        }}
      </Context.Consumer>
      
    );
  }
}
