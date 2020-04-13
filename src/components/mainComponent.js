import React from "react";
import PropTypes from "prop-types";

import HeaderAppComponent from "./headerAppComponent/headerAppComponent";
import CountersListComponents from "./countersListComponent/countersListComponent";

const MainComponent = () => {
  // state = {
  //   upSortDirection: true,
  //   sortBy: "counter",
  //   less: 0,
  //   greater: 0
  // };

  // onChange = e => {
  //   e.preventDefault();
  //   const { name, value } = e.target;
  //   this.setState({ [name]: value });
  // };

  // setSorter = e => {
  //   e.preventDefault();
  //   const { sortBy } = this.state;

  //   if (sortBy !== e.target.name) {
  //     this.setState({ sortBy: e.target.name, upSortDirection: true });
  //   } else {
  //     this.setState(prevState => ({
  //       upSortDirection: !prevState.upSortDirection
  //     }));
  //   }
  // };

  // setFilter = type => e => {
  //   // let { counters, less, greater } = this.state;
  //   // if (type === "less") {
  //   //   counters = counters.filter(counter => counter.count < Number(less));
  //   // } else {
  //   //   counters = counters.filter(counter => counter.count > greater);
  //   // }
  //   // this.setState({ counters });
  // };

  // clearFilters = e => {
  //   e.preventDefault();
  //   this.setState({ less: 0, greater: 0 });
  // };

  // render() {
  //   const {
  //     upSortDirection,
  //     sortBy,
  //     less,
  //     greater
  //   } = this.state;
  //   const { addCounter } = this.props;
  return (
    <div data-test="main">
      <HeaderAppComponent />
      <CountersListComponents />
    </div>
  );
};

export default MainComponent;
