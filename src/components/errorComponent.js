import React from "react";
import { Toast } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchCounters } from "../actions";

const ErrorComponent = ({ message }) => {
  const dispatch = useDispatch();
  return (
    <Toast
      onClose={() => dispatch(fetchCounters())}
      show={message}
      style={{
        marginTop: " 100px",
        margin: "auto"
      }}
    >
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
        <strong className="mr-auto">Error</strong>
        <small>Cierre para intentar nuevamente</small>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};
export default ErrorComponent;
