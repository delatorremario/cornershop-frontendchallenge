import React from "react";
import { Alert, Jumbotron } from "react-bootstrap";

const LoadingComponent = ( ) => (
  <Jumbotron>
    <Alert data-test="loading" className="info">
      <p>Buscando listado de Contadores ...</p>
    </Alert>
  </Jumbotron>
);
export default LoadingComponent;
