import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import CreativeSpecs from "../components/CreativeSpecs";
import { Creative } from "../components/CreativeName";
import "../styles/app.css";

function NoMatch() {
  return <div>WHOOPS!</div>;
}

class App extends Component {
  render() {
    return (
      <main>
        <h1>M8 Name Validator</h1>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={CreativeSpecs} />
            <Route path="/creative/" component={Creative} />
            <Route component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
