import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { connect } from "react-redux";
import MainComponent from "./components/mainComponent";
import ErrorComponent from "./components/errorComponent";

const App = ({ error }) => {
  return (
    <div className="App" data-test="app-component">
      {error && <ErrorComponent message={error} />}
      {!error && <MainComponent />}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    error: state.error
  };
};

export default connect(mapStateToProps)(App);
