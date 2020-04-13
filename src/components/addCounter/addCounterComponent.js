import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCounter } from "../../actions";

import { Form, Button } from "react-bootstrap";

const AddCounterComponent = ({ setShowAddCounter }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  return (
    <Form data-test="counter-form" className="counter-form">
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Título del Nuevo Contador</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </Form.Group>

      <div>
        <Button
          variant="primary"
          data-test="button-submit"
          onClick={() => dispatch(addCounter({ title }))}
        >
          Agregar
        </Button>{" "}
        <Button variant="secondary" onClick={() => setShowAddCounter(false)}>
          Cancelar
        </Button>
      </div>
    </Form>
  );
};

export default AddCounterComponent;
