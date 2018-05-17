import React, { Component } from 'react';
import Builder from "./containers/Builder/Builder"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Main Parent</h1>
        <Builder/>
      </div>
    );
  }
}

export default App;
