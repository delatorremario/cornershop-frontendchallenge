import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faPlus,
  faFilter,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

import { Button, Form } from "react-bootstrap";

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
    const {
      upSortDirection,
      sortBy,
      setSorter,
      setFilter,
      onChange,
      less,
      greater,
      clearFilters
    } = this.props;
    const { showAddCounter } = this.state;
    return (
      <div className="header-app">
        <div className="sorters">
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
        <div className="filters">
          <div className="filter-item">
            <div>Menor que </div>
          </div>
          <div className="filter-item">
            <div className="filter-item-input">
              <Form.Control
                type="number"
                name="less"
                value={less}
                step={1}
                onChange={onChange.bind(this)}
              />
            </div>
          </div>
          <div className="filter-item">
            <button
              type="button"
              className="btn btn-success btn-circle"
              onClick={setFilter("less")}
            >
              <FontAwesomeIcon icon={faFilter} />
            </button>
          </div>
          <div className="filter-item">
            <div>Mayor que </div>
          </div>
          <div className="filter-item">
            <div className="filter-item-input">
              <Form.Control
                type="number"
                name="greater"
                value={greater}
                step={1}
                onChange={onChange.bind(this)}
              />
            </div>
          </div>
          <div className="filter-item">
            <button
              type="button"
              className="btn btn-success btn-circle"
              onClick={setFilter("greater")}
            >
              <FontAwesomeIcon icon={faFilter} />
            </button>
          </div>
          <div className="filter-item">
            <button
              type="button"
              className="btn btn-primary btn-circle"
              onClick={clearFilters.bind(this)}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
        <div className="sorters">
          <div className="sorter-item">
            <div className="counter">{`Total ${110}`}</div>
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
