import React from "react";

import HeaderAppComponent from "./headerAppComponent";
import CountersListComponents from "./countersListComponent";

let countersList = [
  { name: "Contador 1", count: 10 },
  { name: "Contador 2", count: 2 },
  { name: "Contador 3", count: 3 },
  { name: "Contador 4", count: 4 },
  { name: "Contador 5", count: 5 },
  { name: "Contador 6", count: 6 },
  { name: "Contador 7", count: 7 }
];

class MainComponent extends React.Component {
  state = {
    upSortDirection: true,
    sortBy: "counter"
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

  render() {
   
    const { showAddCounter, upSortDirection, sortBy } = this.state;

    countersList.sort((a, b) => {
      if (sortBy === "counter") {
        return (upSortDirection && a.count - b.count) || b.count - a.count;
      } else {
        if (a.name > b.name) {
          return (upSortDirection && 1) || -1;
        }
        if (a.name < b.name) {
          return (upSortDirection && -1) || 1;
        }
        // a must be equal to b
        return 0;
      }
    });

    return (
      <div>
        <HeaderAppComponent
          setSorter={this.setSorter}
          showAddCounter={showAddCounter}
          upSortDirection={upSortDirection}
          sortBy={sortBy}
        />
        <CountersListComponents countersList={countersList} />
      </div>
    );
  }
}

export default MainComponent;
