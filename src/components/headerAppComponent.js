import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setShowAddCounterForm,
  setSortBy,
  setLess,
  setGreater,
  setFilter,
  fetchCounters
} from "../actions";

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

const HeaderAppComponent = () => {
  const showAddCounter = useSelector(state => state.showAddCounter);
  const sortBy = useSelector(state => state.sortBy);
  const upSortDirection = useSelector(state => state.upSortDirection);
  const less = useSelector(state => state.less);
  const greater = useSelector(state => state.greater);

  const dispatch = useDispatch();
  // state = {
  //   showAddCounter: false
  // };
  // setShowAddCounter = e => {
  //   this.setState(prevState => ({
  //     showAddCounter: !prevState.showAddCounter
  //   }));
  // };

  // saveCounter = ({ title }) => {
  //   this.props.addCounter({ title });
  //   this.setState({
  //     showAddCounter: false
  //   });
  // };

  // render() {
  //   const {
  //     setSorter,
  //     setFilter,
  //     upSortDirection,
  //     sortBy,
  //     onChange,
  //     less,
  //     greater,
  //     clearFilters
  //   } = this.props;
  //   const { showAddCounter } = this.state;
  return (
    <div className="header-app" data-test="header-app">
      <div className="sorters">
        <div className="sorter-item">
          <Button
            variant={(sortBy === "counter" && "primary") || "outline-primary"}
            name="counter"
            onClick={e => dispatch(setSortBy(e.target.name))}
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
              onClick={e => dispatch(setSortBy(e.target.name))}
            >
              {sortBy === "name" && (
                <span>
                  <FontAwesomeIcon
                    icon={(upSortDirection && faArrowUp) || faArrowDown}
                  />{" "}
                </span>
              )}
              Título
            </Button>
          </div>
        </div>
        <div className="sorter-item">
          {!showAddCounter && (
            <button
              type="button"
              className="btn btn-success btn-circle"
              onClick={e => dispatch(setShowAddCounterForm(true))}
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
              onChange={e => dispatch(setLess(e.target.value))}
            />
          </div>
        </div>
        <div className="filter-item">
          <button
            type="button"
            className="btn btn-success btn-circle"
            onClick={e => dispatch(setFilter("less"))}
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
              onChange={e => dispatch(setGreater(e.target.value))}
            />
          </div>
        </div>
        <div className="filter-item">
          <button
            type="button"
            className="btn btn-success btn-circle"
            onClick={() => dispatch(setFilter("greater"))}
          >
            <FontAwesomeIcon icon={faFilter} />
          </button>
        </div>
        <div className="filter-item">
          <button
            type="button"
            className="btn btn-primary btn-circle"
            onClick={() => dispatch(fetchCounters())}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>

      {showAddCounter && (
        <div className="addcounter-form">
          <AddCounterComponent />
        </div>
      )}
    </div>
  );
};

export default HeaderAppComponent;
