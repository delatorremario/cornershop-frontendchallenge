import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { connect } from "react-redux";
import MainComponent from "./components/mainComponent";
import ErrorComponent from "./components/errorComponent/errorComponent";
import LoadingComponent from "./components/loadingComponent/loadingComponent";

const App = ({ error, loading }) => {
  return (
    <div className="App" data-test="app-component">
      {error && <ErrorComponent message={error} />}
      {loading && <LoadingComponent />}
      {!error && !loading && <MainComponent />}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    error: state.error,
    loading: state.loading
  };
};

export default connect(mapStateToProps)(App);
