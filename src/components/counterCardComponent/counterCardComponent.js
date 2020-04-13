import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { incCounter, decCounter, deleteCounter } from "../../actions";

import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const CounterCardComponent = ({
  id,
  title,
  count
}) => {
  const dispatch = useDispatch();
  return (
    <Card
      data-test="counter-card"
      className="counter-card"
      style={{ width: "18rem" }}
    >
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{count}</Card.Text>
        <div>
          <button
            type="button"
            className="btn btn-info btn-circle"
            onClick={e => dispatch(incCounter({ id }))}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
          {"  "}
          <button
            type="button"
            className="btn btn-danger btn-circle"
            onClick={e => dispatch(decCounter({ id }))}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-default btn-circle"
            onClick={e => dispatch(deleteCounter({ id }))}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </Card.Body>
    </Card>
  );
};

CounterCardComponent.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number
};

export default CounterCardComponent;
