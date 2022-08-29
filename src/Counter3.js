import React from 'react'
import {Context} from './Context'

export default class Counter3 extends React.Component {
    static contextType = Context;
    constructor(){
        super();
    }
  render() {
    return (
        <>
        <h3>Counter3</h3>
        Value: {this.context.intitialValue}  <br/> <br/>
                  <button onClick={this.context.handleIncrementFromProvider}>Increment</button> &nbsp;
                  <button onClick={this.context.handleDecrementFromProvider}>Decrement</button> &nbsp;
                  <button onClick={this.context.handleResetFromProvider}>Reset</button> &nbsp;
        </>
    );
}
}

