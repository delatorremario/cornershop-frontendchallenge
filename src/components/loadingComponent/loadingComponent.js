import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingComponent = () => (
  <Spinner data-test="loading" animation="border" role="status">
    <span className="sr-only">Buscando listado de Contadores ...</span>
  </Spinner>
);
export default LoadingComponent;
