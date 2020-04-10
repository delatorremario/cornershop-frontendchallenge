import React from "react";

import HeaderAppComponent from "./headerAppComponent/headerAppComponent";
import CountersListComponents from "./countersListComponent/countersListComponent";

let countersList = [
  { title: "Contador 1", count: 10 },
  { title: "Contador 2", count: 2 },
  { title: "Contador 3", count: 3 },
  { title: "Contador 4", count: 4 },
  { title: "Contador 5", count: 5 },
  { title: "Contador 6", count: 6 },
  { title: "Contador 7", count: 7 }
];

class MainComponent extends React.Component {
  state = {
    upSortDirection: true,
    sortBy: "counter",
    less: 0,
    greater: 0,
    countersList: []
  };

  componentDidMount() {
    this.setState({ countersList });
  }

  onChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  setSorter = e => {
    e.preventDefault();
    const { sortBy } = this.state;

    if (sortBy !== e.target.name) {
      this.setState({ sortBy: e.target.name, upSortDirection: true });
    } else {
      this.setState(prevState => ({
        upSortDirection: !prevState.upSortDirection
      }));
    }
  };

  setFilter = type => e => {
    let { countersList, less, greater } = this.state;
    if (type === "less") {
      countersList = countersList.filter(
        counter => counter.count < Number(less)
      );
    } else {
      countersList = countersList.filter(counter => counter.count > greater);
    }
    this.setState({ countersList });
  };

  clearFilters = e => {
    e.preventDefault();
    this.setState({ less: 0, greater: 0, countersList });
  };

  render() {
    const {
      showAddCounter,
      upSortDirection,
      sortBy,
      less,
      greater,
      countersList
    } = this.state;

    countersList.sort((a, b) => {
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

    return (
      <div data-test="main">
        <HeaderAppComponent
          setSorter={this.setSorter}
          setFilter={this.setFilter}
          showAddCounter={showAddCounter}
          upSortDirection={upSortDirection}
          sortBy={sortBy}
          onChange={this.onChange}
          less={less}
          greater={greater}
          clearFilters={this.clearFilters}
        />
        <CountersListComponents countersList={countersList} />
      </div>
    );
  }
}

export default MainComponent;
