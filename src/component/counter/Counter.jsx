import React, { Component } from 'react'
import './Counter.css'
import PropTypes from 'prop-types';
 class Counter extends Component {
//Define the intial state  in a constructor
// state=> counter=

constructor() {
    super(); // this is compusory to use this
    this.state = {
        counter : 0
    }
    this.increment = this.increment.bind(this);
}

 render() {
    return (
        <div className="counter">
            <button onClick={this.increment}>+{this.props.for}</button>
            <span className="count">{this.state.counter}</span>
        </div>
    )
 }

 increment () {
  // this.state.counter++;
   this.setState({
       counter: this.state.counter + this.props.for
   });
 }


}

export default Counter;




