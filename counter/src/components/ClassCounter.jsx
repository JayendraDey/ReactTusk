import React, { Component } from 'react';

export class ClassCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  fun = (input) => {
    switch(input) {
        case "+" : {
            return  this.setState((prevState) => ({count: prevState.count + 1}));
        }
        case "-" : {
            return  this.setState((prevState) => ({count: prevState.count - 1}));
        }
        default : return this.state
    }
  };

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={()=> this.fun("+")}>Increment</button>
        <button onClick={()=>this.fun("-")}>Decrement</button>
      </div>
    );
  }
}

export default ClassCounter;


