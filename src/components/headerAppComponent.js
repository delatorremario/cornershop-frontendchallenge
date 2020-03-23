import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faPlus
} from "@fortawesome/free-solid-svg-icons";

import { Button } from "react-bootstrap";

import AddCounterComponent from "./addCounterComponent";

class HeaderAppComponent extends React.Component {
  state = {
    showAddCounter: false
  };
  setShowAddCounter = e => {
    e.preventDefault();
    this.setState(prevState => ({
      showAddCounter: !prevState.showAddCounter
    }));
  };

  saveCounter = ({ name }) => e => {
    e.preventDefault();
    console.log("HeaderAppComponent -> name", name);
    this.setState({
      showAddCounter: false
    });
  };

  render() {
    const { upSortDirection, sortBy, setSorter } = this.props;
    const { showAddCounter } = this.state;
    return (
      <div className="header-app">
        <div className="sorters">
          <div className="sorter-item">
            <div className="counter">{`Total ${110}`}</div>
          </div>
          <div className="sorter-item">
            <Button
              variant={(sortBy === "counter" && "primary") || "outline-primary"}
              name="counter"
              onClick={setSorter.bind(this)}
            >
              {sortBy === "counter" && (
                <span>
                  <FontAwesomeIcon
                    icon={(upSortDirection && faArrowUp) || faArrowDown}
                  />{" "}
                </span>
              )}
              Contador
            </Button>
          </div>
          <div className="sorter-item">
            <div className="sorter-item">
              <Button
                variant={(sortBy === "name" && "primary") || "outline-primary"}
                name="name"
                onClick={setSorter.bind(this)}
              >
                {sortBy === "name" && (
                  <span>
                    <FontAwesomeIcon
                      icon={(upSortDirection && faArrowUp) || faArrowDown}
                    />{" "}
                  </span>
                )}
                Nombre
              </Button>
            </div>
          </div>
          <div className="sorter-item">
            {!showAddCounter && (
              <button
                type="button"
                className="btn btn-success btn-circle"
                onClick={this.setShowAddCounter.bind(this)}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            )}
          </div>
        </div>
        {showAddCounter && (
          <div className="addcounter-form">
            <AddCounterComponent
              saveCounter={this.saveCounter}
              setShowAddCounter={this.setShowAddCounter}
            />
          </div>
        )}
      </div>
    );
  }
}

export default HeaderAppComponent;
