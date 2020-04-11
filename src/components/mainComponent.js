import React from "react";
import PropTypes from "prop-types";

import HeaderAppComponent from "./headerAppComponent/headerAppComponent";
import CountersListComponents from "./countersListComponent/countersListComponent";

class MainComponent extends React.Component {
  state = {
    upSortDirection: true,
    sortBy: "counter",
    less: 0,
    greater: 0
  };

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
    // let { countersList, less, greater } = this.state;
    // if (type === "less") {
    //   countersList = countersList.filter(
    //     counter => counter.count < Number(less)
    //   );
    // } else {
    //   countersList = countersList.filter(counter => counter.count > greater);
    // }
    // this.setState({ countersList });
  };

  clearFilters = e => {
    // e.preventDefault();
    // this.setState({ less: 0, greater: 0, countersList });
  };

  render() {
    const {
      showAddCounter,
      upSortDirection,
      sortBy,
      less,
      greater
    } = this.state;

    let { countersList } = this.props;
    console.log("MainComponent -> render -> countersList", countersList);

    countersList &&
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
        {countersList && <CountersListComponents countersList={countersList} />}
      </div>
    );
  }
}

MainComponent.propTypes = {
  countersList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      count: PropTypes.number
    })
  )
};

export default MainComponent;
