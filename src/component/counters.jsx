import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  styles={
    fontWeight:90
  }
  render() {
    
    const {counters,countersselected, onReset, onDelete, onIncrement, onDecrement, onDecrement2,onAssign,onRevoke} = this.props;
    return (
      <div >
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
        Reset
        </button>
   <h1>Working Cart 1</h1>
      {counters.map(counter => (
       counter.value==0&&   <Counter 
          key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
        <button
          onClick={onAssign}
          className="btn btn-primary btn-sm m-2"
        >
        Assign->
        </button>
        <button
          onClick={onRevoke}
          className="btn btn-primary btn-sm m-2"
        >
        &lt;-Revoke
        </button>
        <h1>Working Cart 2</h1>
    {countersselected.map(counter=>(
    counter.value==1 && <Counter 
    key={counter.id}
    onDelete={onDelete}
    onIncrement={onIncrement}
    onDecrement={ onDecrement2}
    counter={counter}
  />
             ))
              }
          

      </div>
    );
  }
}

export default Counters;