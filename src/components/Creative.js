import React, { Component } from "react";
import { Link } from "react-router-dom";

class Creative extends Component {
  constructor(props) {
    super(props);

    const initialState = {
      client: props.location.state.client ? props.location.state.client : "cpa",
      initiative: props.location.state.initiative
        ? props.location.state.initiative
        : "cpa"
    };
    this.state = initialState;
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
      error: null
    });
  }
}
