import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    //Set intial state using data method 
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div>
        <h1>It is {this.state.date.toLocaleTimeString()}.</h1>
      </div>
    );
  }
}

export default Clock;
