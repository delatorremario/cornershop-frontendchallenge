import React from "react";
import { useSelector } from "react-redux";
import { Badge } from "react-bootstrap";

import CounterCardComponent from "../counterCardComponent/counterCardComponent";
import LoadingComponent from "../loadingComponent/loadingComponent";

const CountersListComponent = () => {
  const counters = useSelector(state => state.counters);
  const sortBy = useSelector(state => state.sortBy);
  const upSortDirection = useSelector(state => state.upSortDirection);
  const loading = useSelector(state => state.loading);

  counters &&
    counters.sort((a, b) => {
      if (sortBy === "counter") {
        return (upSortDirection && a.count - b.count) || b.count - a.count;
      } else {
        if (a.title > b.title) {
          return (upSortDirection && 1) || -1;
        }
        if (a.title < b.title) {
          return (upSortDirection && -1) || 1;
        }
        // a must be equal to b
        return 0;
      }
    });

  var sumCounters = counters.reduce((total, currentValue) => {
    return total + currentValue.count;
  }, 0);

  return (
    <div data-test="counter-list">
      <div className="counters-counter">
        {(loading && <LoadingComponent />) || (
          <h4>
            Suma Total de Contadores{" "}
            <Badge variant="secondary">{sumCounters}</Badge>
          </h4>
        )}
      </div>
      <div className="counters-list">
        {counters &&
          counters.map((counter, index) => (
            <CounterCardComponent {...counter} key={index} />
          ))}
      </div>
    </div>
  );
};

export default CountersListComponent;
