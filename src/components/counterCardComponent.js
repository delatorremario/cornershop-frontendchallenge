import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const CounterCardComponent = ({ name, count }) => (
  <Card style={{ width: "18rem" }}>
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
    </Card.Body>
  </Card>
);

export default CounterCardComponent;
