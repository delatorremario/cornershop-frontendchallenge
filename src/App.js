import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import HeaderAppComponent from "./components/headerAppComponent";
import CountersListComponents from "./components/countersListComponent";

function App() {
  return (
    <div className="App">
      <HeaderAppComponent />
      <CountersListComponents />
    </div>
  );
}

export default App;
