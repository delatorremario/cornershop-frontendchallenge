import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { connect } from "react-redux";
import { fetchCounters } from "./actions";

import MainComponent from "./components/mainComponent";

class App extends Component {
  componentDidMount() {
    this.props.fetchCounters();
  }

  render() {
    return (
      <div className="App" data-test="app-component">
        <MainComponent />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counters: state.counters
  };
};

export default connect(
  mapStateToProps,
  { fetchCounters }
)(App);
