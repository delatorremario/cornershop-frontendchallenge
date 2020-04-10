import React from "react";
import PropTypes from "prop-types";

import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";

const CounterCardComponent = ({ name, count }) => (
  <Card
    data-test="counter-card"
    className="counter-card"
    style={{ width: "18rem" }}
  >
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>{count}</Card.Text>
      <div>
        <button type="button" className="btn btn-info btn-circle">
          <FontAwesomeIcon icon={faPlus} />
        </button>
        {"  "}
        <button type="button" className="btn btn-danger btn-circle">
          <FontAwesomeIcon icon={faMinus} />
        </button>
      </div>
      <div>
        <button type="button" className="btn btn-default btn-circle">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </Card.Body>
  </Card>
);

CounterCardComponent.propTypes = {
  name: PropTypes.string,
  count: PropTypes.number
};

export default CounterCardComponent;
