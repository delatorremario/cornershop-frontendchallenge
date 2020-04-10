import React from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

class AddCounterComponent extends React.Component {
  state = {
    title: ""
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { saveCounter, setShowAddCounter } = this.props;

    return (
      <Form
        data-test="counter-form"
        className="counter-form"
        onSubmit={saveCounter({ title: this.state.title }).bind(this)}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Título del Nuevo Contador</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange.bind(this)}
          />
        </Form.Group>

        <div>
          <Button variant="primary" type="submit">
            Agregar
          </Button>{" "}
          <Button variant="secondary" onClick={setShowAddCounter}>
            Cancelar
          </Button>
        </div>
      </Form>
    );
  }
}

AddCounterComponent.propTypes = {
  saveCounter: PropTypes.func,
  setShowAddCounter: PropTypes.func
};

export default AddCounterComponent;
