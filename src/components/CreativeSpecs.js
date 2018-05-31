import React from "react";
import Option from "muicss/lib/react/option";
import Select from "muicss/lib/react/select";
import clients from "../data/clients";
import initiatives from "../data/initiatives";

class CreativeSpecs extends React.Component {
  constructor(props) {
    super(props);

    const initialState = {
      client: "cpa",
      initiative: "display"
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

  onClick(e) {
    this.props.history.push("/creative/", {
      client: this.state.client,
      initiative: this.state.initiative
    });
  }

  render() {
    return (
      <form>
        <legend>Please select client:</legend>
        <Select
          name="client"
          value={this.state.client}
          onChange={this.onChange}
        >
          {clients.map(function(option, i) {
            return <Option key={i} value={option.value} label={option.label} />;
          })}
        </Select>
        <legend>Select initiative:</legend>
        <Select
          name="initiative"
          value={this.state.initiative}
          onChange={this.onChange}
        >
          {initiatives.map(function(option, i) {
            return <Option key={i} value={option.value} label={option.label} />;
          })}
        </Select>

        <button
          className="mui-btn mui-btn--raised"
          onClick={this.onClick.bind(this)}
        >
          Get started
        </button>
      </form>
    );
  }
}

export default CreativeSpecs;
