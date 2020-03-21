import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import CountersListComponents from "./components/countersListComponent";

function App() {
  return (
    <div className="App">
      CornerShop Challenge!
      <header className="App-header">
        <CountersListComponents />
      </header>
    </div>
  );
}

export default App;
