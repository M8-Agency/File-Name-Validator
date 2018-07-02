import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import CreativeSpecs from "../components/CreativeSpecs";
import { Creative } from "../components/CreativeName";
import Header from "../containers/Header";

import NCreative from "../components/Creative";
import "../styles/styles.css";

function NoMatch() {
  return <div>WHOOPS!</div>;
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={CreativeSpecs} />
            <Route path="/creative/" component={Creative} />
            <Route path="/ncreative/" component={NCreative} />

            <Route component={NoMatch} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
