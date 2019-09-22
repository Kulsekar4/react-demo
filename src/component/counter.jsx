import React, { Component } from "react";
import user from '../user.png';

class Counter extends Component {
  state={
imageUrl:"./user.png"
  };
  render() {
    console.log("props", this.props);
    const { counter, onIncrement, onDecrement, onDelete,onMove } = this.props;
    return (
      <div className="row bg-light">
        <div className="col">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <img src={user} style={{width:50}} alt="userimg"/>
          <span className={this.getBadgeClasses2()}>{this.getName()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary btn-sm"
          > 
            +
          </button>
          <button
            onClick={() => onDecrement(counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  getBadgeClasses2() {
    let classes = "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
  getName(){
      const{name}=this.props.counter;
      return name;
  }
}

export default Counter;