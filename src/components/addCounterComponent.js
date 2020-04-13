import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCounter, setShowAddCounterForm } from "../actions";

import { Form, Button } from "react-bootstrap";

const AddCounterComponent = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  return (
    <Form
      data-test="counter-form"
      className="counter-form"
      onSubmit={e => {
        e.preventDefault();
        dispatch(addCounter({ title }));
      }}
    >
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
          // onClick={() => dispatch(addCounter({ title }))}
          type="submit"
        >
          Agregar
        </Button>{" "}
        <Button
          variant="secondary"
          onClick={() => dispatch(setShowAddCounterForm(false))}
        >
          Cancelar
        </Button>
      </div>
    </Form>
  );
};

export default AddCounterComponent;
