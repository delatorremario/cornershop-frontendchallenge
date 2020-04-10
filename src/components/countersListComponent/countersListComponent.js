import React, { Component } from "react";

import CounterCardComponent from "../counterCardComponent/counterCardComponent";

class CountersListComponent extends Component {
  render() {
    const { countersList } = this.props;
    return (
      <div data-test="counter-list" className="counters-list">
        {countersList.map((counter, index) => (
          <CounterCardComponent {...counter} key={index} />
        ))}
      </div>
    );
  }
}

export default CountersListComponent;
