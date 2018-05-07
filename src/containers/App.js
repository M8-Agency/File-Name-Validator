import React, { Component } from 'react';
import '../styles/app.css';
import NameGenerator from "../components/NameGenerator";

class App extends Component {
  render() {
    return (
      <main>
        <h1>M8 Name Validator</h1>
        <NameGenerator />
      </main>
    );
  }
}

export default App;
