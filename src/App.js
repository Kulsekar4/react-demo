import React, { Component } from "react";
import "./App.css";
import NavBar from "./component/navbar";
import Counters from "./component/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0,name:"doctor" },
      { id: 2, value: 0 ,name:"engineer"},
      { id: 3, value: 0 ,name:"scientist"},
      { id: 4, value: 0,name:"professor" }
    ]
    ,
    countersselected: [
      { id: 1, value: 0,name:"" },
      { id: 2, value: 0 ,name:""},
      { id: 3, value: 0 ,name:""},
      { id: 4, value: 0,name:"" }
    ]
  
  };
  handleIncrement = counter => {
    console.log("Increment", counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if(counters[index].value=0)
    counters[index].value=1;
    else
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = counter => {
    console.log("Decrement", counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };
  handleDecrement2 = counter => {
    console.log("Decrement", counter);
    const countersselected = [...this.state.countersselected];
    const index = countersselected.indexOf(counter);
    countersselected[index] = { ...counter };
    countersselected[index].value--;
    this.setState({ countersselected });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  
  move=counterId=>{
    console.log(counterId);
  }

  onAssign=()=>{
    const countersselected = this.state.counters.map((c,i) => {
      if(c.value>=1){
      this.state.countersselected[i].value=1;
      }
      return c;
    });
    
    const counters = this.state.counters.map((c,i) => {
      if(c.value>=1){
      this.state.counters[i].value=1;
      }
      return c;
    });
   
    this.setState({ countersselected,counters});
  }
  
  onRevoke=()=>{
    const counters = this.state.countersselected.map((c,i) => {
      if(c.value>0)
      this.state.counters[i].value=1;
      return c;
    });
    this.setState({ counters});
  }
  render() {
    return (
      <React.Fragment>
        <h1>TotalCloud Task</h1>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length } sec={1} />
        <NavBar totalCounters={this.state.countersselected.filter(c => c.value > 0).length } sec={2} />
       
        <main role="main" className="container">
          <Counters
            counters={this.state.counters}
            countersselected={this.state.countersselected}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            
            onDecrement2={this.handleDecrement2}
            onDelete={this.handleDelete}
            onMove={this.move}
            onAssign={this.onAssign}
            onRevoke={this.onRevoke}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;