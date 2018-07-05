import React, { Component } from "react";
import { Link } from "react-router-dom";

class ErrorPage extends Component {
  render() {
    return (
      <div>
        <div id="content-wrapper" class="mui--text-center">
          <div class="mui--appbar-height" />
          <br />
          <br />
          <div className="mui--text-display1">
            Sorry, we couldn’t find that page
          </div>
          <div class="mui--text-headline">
            Go to the <Link to={"/"}>Homepage</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ErrorPage;
