import React, { Component } from "react";
import { useSelector } from "react-redux";

import CounterCardComponent from "../counterCardComponent/counterCardComponent";

const CountersListComponent = ({ sortBy, upSortDirection }) => {
  const counters = useSelector(state => state.counters);
  console.log("CountersListComponent -> counters", counters)
  // counters &&
  //   counters.sort((a, b) => {
  //     if (sortBy === "counter") {
  //       return (upSortDirection && a.count - b.count) || b.count - a.count;
  //     } else {
  //       if (a.title > b.title) {
  //         return (upSortDirection && 1) || -1;
  //       }
  //       if (a.title < b.title) {
  //         return (upSortDirection && -1) || 1;
  //       }
  //       // a must be equal to b
  //       return 0;
  //     }
  //   });
  return (
    <div data-test="counter-list" className="counters-list">
      {counters &&
        counters.map((counter, index) => (
          <CounterCardComponent {...counter} key={index} />
        ))}
    </div>
  );
};

export default CountersListComponent;
