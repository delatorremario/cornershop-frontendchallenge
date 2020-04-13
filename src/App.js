import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { connect } from "react-redux";
import MainComponent from "./components/mainComponent";
import ErrorComponent from "./components/errorComponent/errorComponent";
import LoadingComponent from "./components/loadingComponent/loadingComponent";

import { addCounter, incCounter, decCounter, deleteCounter } from "./actions";

class App extends Component {
  render() {
    const {
      counters,
      error,
      loading,
      addCounter,
      incCounter,
      decCounter,
      deleteCounter
    } = this.props;
    console.log("App -> render -> counters", counters)
    return (
      <div className="App" data-test="app-component">
        {error && <ErrorComponent message={error} />}
        {loading && <LoadingComponent />}
        {!error && !loading && (
          <MainComponent
            counters={counters}
            addCounter={addCounter}
            incCounter={incCounter}
            decCounter={decCounter}
            deleteCounter={deleteCounter}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counters: state.counters,
    error: state.error,
    loading: state.loading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addCounter: counter => dispatch(addCounter(counter)),
    incCounter: counter => dispatch(incCounter(counter)),
    decCounter: counter => dispatch(decCounter(counter)),
    deleteCounter: counter => dispatch(deleteCounter(counter))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
