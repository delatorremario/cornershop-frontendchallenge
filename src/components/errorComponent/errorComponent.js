import React from "react";
import { Alert, Jumbotron } from "react-bootstrap";

const ErrorComponent = ({ message }) => (
  <Jumbotron>
    <Alert data-test="error" className="danger">
      <p>Error al obtner el listado de Contadores</p>
      <p>{message}</p>
    </Alert>
  </Jumbotron>
);
export default ErrorComponent;
