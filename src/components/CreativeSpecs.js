import React from "react";
import Option from "muicss/lib/react/option";
import Select from "muicss/lib/react/select";
import clients from "../data/clients";
import initiatives from "../data/initiatives";
import Container from "muicss/lib/react/container";
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";
import Button from "muicss/lib/react/button";

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
      <div>
        <div id="content-wrapper" class="mui--text-center">
          <div class="mui--appbar-height" />
          <br />
          <br />
          <div class="mui--text-display2">Creative Name</div>
        </div>
        <Container fluid={true}>
          <Row>
            <Col md="2" md-offset="5">
              <form>
                <Select
                  label="Client:"
                  name="client"
                  value={this.state.client}
                  onChange={this.onChange}
                >
                  {clients.map(function(option, i) {
                    return (
                      <Option
                        key={i}
                        value={option.value}
                        label={option.label}
                      />
                    );
                  })}
                </Select>

                <Select
                  label="initiative"
                  name="initiative"
                  value={this.state.initiative}
                  onChange={this.onChange}
                >
                  {initiatives.map(function(option, i) {
                    return (
                      <Option
                        key={i}
                        value={option.value}
                        label={option.label}
                      />
                    );
                  })}
                </Select>

                <div className="mui--text-center">
                  <Button
                    className="mui-btn mui-btn--raised"
                    color="primary"
                    onClick={this.onClick.bind(this)}
                  >
                    Get started
                  </Button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default CreativeSpecs;
