import React, { Component } from "react";
import PropTypes from "prop-types";

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

CountersListComponent.propTypes = {
  countersList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      count: PropTypes.number
    })
  )
};

export default CountersListComponent;
