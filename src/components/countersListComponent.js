import React, { Component } from "react";

import CounterCardComponent from "./counterCardComponent";

class CountersListComponent extends Component {
  render() {
    const { countersList } = this.props;
    return (
      <div className="counters-list">
        {countersList.map((counter, index) => (
          <CounterCardComponent {...counter} key={index} />
        ))}
      </div>
    );
  }
}

export default CountersListComponent;
