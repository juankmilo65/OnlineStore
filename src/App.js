import React, { Component } from "react";

import Navigation from "./components/navigation";
import Router from "./Router";

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <Navigation />
        <Router />
      </div>
    );
  }
}

export default App;
