import React, { Component } from "react";
import Builder from "./containers/Builder/Builder";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Builder />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
