import React from "react";
import { Form, Button } from "react-bootstrap";

class AddCounterComponent extends React.Component {
  state = {
    name: ""
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
        onSubmit={saveCounter({ name: this.state.name }).bind(this)}
      >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Nombre del Nuevo Contador</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={this.state.name}
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

export default AddCounterComponent;
