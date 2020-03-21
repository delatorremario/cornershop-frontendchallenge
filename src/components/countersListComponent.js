import React, { Component } from "react";

import CounterCardComponent from "./counterCardComponent";

class CountersListComponent extends Component {
  render() {
    const countersList = [
      { name: "Contador 1", count: 10 },
      { name: "Contador 2", count: 2 },
      { name: "Contador 3", count: 4 }
    ];

    return (
      <div>
        {countersList.map((counter, index) => (
          <CounterCardComponent {...counter} key={index} />
        ))}
      </div>
    );
  }
}

export default CountersListComponent;
