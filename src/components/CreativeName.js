import React from "react";
import Container from "muicss/lib/react/container";
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";
import Input from "muicss/lib/react/input";
import Button from "muicss/lib/react/button";
import * as validations from "../libraries/validations";
import * as utils from "../libraries/utils";
import createName from "../libraries/utils";
import Option from "muicss/lib/react/option";
import Select from "muicss/lib/react/select";
import { getCreativePillar } from "../data/creativePillars";
import { getCreativeType } from "../data/creativeTypes";
import { platform } from "../data/platforms";
import MuiPickersUtilsProvider from "material-ui-pickers/utils/MuiPickersUtilsProvider";
import DatePicker from "material-ui-pickers/DatePicker";
import DateFnsUtils from "material-ui-pickers/utils/date-fns-utils";
import format from "date-fns/format";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";

const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: blue.A200
      }
    },
    MuiPickersCalendarHeader: {
      switchHeader: {
        // backgroundColor: blue.A200,
        // color: "white"
      }
    },
    MuiPickersDay: {
      day: {
        color: blue.A700
      },
      selected: {
        backgroundColor: blue["400"]
      },
      current: {
        color: blue["900"]
      }
    },
    MuiPickersModal: {
      dialogAction: {
        color: blue["400"]
      }
    }
  }
});

class CreativeForm extends React.Component {
  constructor(props) {
    super(props);

    const _values = {
      campaignCode: "",
      concept: "",
      creativePillar: "",
      creativeVariation: "",
      size: "",
      tech: "",
      language: "",
      creativeType: "",
      carouselFrame: "",
      platform: "",
      dateDisplay: new Date(),
      date: "",
      person: "",
      version: ""
    };
    const _touched = {
      campaignCode: false,
      concept: false,
      creativePillar: false,
      creativeVariation: false,
      size: false,
      tech: false,
      language: false,
      creativeType: false,
      carouselFrame: false,
      platform: false,
      date: false,
      person: false,
      version: false
    };
    const _errors = {};
    const initialState = {
      client: props.client,
      initiative: props.initiative,
      values: _values,
      touched: _touched,
      errors: _errors,
      isSubmitting: false,
      dirty: false,
      hasErrors: true,
      nameVisible: false,
      btnText: "Copy name to clipboard!"
    };

    this.state = initialState;

    console.log(this.state);

    this.onChange = this.onChange.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.validate = this.validate.bind(this);
    this.defaultValues = this.defaultValues.bind(this);
    this.allTouched = this.allTouched.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange = date => {
    let _date = format(date, "YYYY-MM-DD", { locale: this.locale });
    this.setState(state => ({
      values: { ...state.values, date: _date }
    }));

    this.setState(state => ({
      values: { ...state.values, dateDisplay: date }
    }));

    this.setState(state => ({
      touched: { ...state.touched, date: true }
    }));
  };
  onChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    let _values = Object.assign({}, this.state.values); //creating copy of state
    _values[name] = value; //updating value

    this.setState(
      { values: _values },

      function() {
        let _e = this.validate();
        this.setState(state => ({
          errors: { ...state.errors, [name]: _e[name] }
        }));
        this.defaultValues();
      }
    );
  }

  onBlur(e) {
    const target = e.target;
    const name = target.name;

    this.defaultValues();

    const _e = this.validate();
    this.setState({ errors: _e });

    this.setState(state => ({
      touched: { ...state.touched, [name]: true }
    }));

    if (!utils.findError) {
      this.setState({ hasErrors: false });
    } else {
      this.setState({ hasErrors: true });
    }

    this.setState({ dirty: true });
  }

  allTouched() {
    const _touched = {
      campaignCode: true,
      concept: true,
      creativePillar: true,
      creativeVariation: true,
      size: true,
      tech: true,
      language: true,
      creativeType: true,
      carouselFrame: true,
      platform: true,
      date: true,
      person: true,
      version: true
    };

    this.setState({ touched: _touched });
  }

  onReset(e) {
    this.props.navigation.navigate("/");
  }

  onSubmit(e) {
    e.preventDefault();

    this.defaultValues();

    const _e = this.validate();
    this.setState({ errors: _e }, function() {
      this.allTouched();

      this.setState({ isSubmitting: true });

      const signature = document.querySelector("#m8-create-name");
      const range = document.createRange();
      range.selectNode(signature);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);

      try {
        if (!utils.findError(this.state.errors)) {
          this.setState({ nameVisible: true });
          console.log("entro");
          document.execCommand("copy");
          this.setState({ btnText: "Name copied!" });
          this.setState({ hasErrors: false });
        }
      } catch (err) {}
      window.getSelection().removeAllRanges();
    });
  }

  validate() {
    let errors = {};
    errors.campaignCode = validations.validateCampaign(
      this.state.values.campaignCode,
      this.state.client
    );

    errors.creativePillar = validations.validateCreativePillar(
      this.state.values.creativePillar
    );

    errors.concept = validations.validateConcept(this.state.values.concept);

    errors.size = validations.validateSize(
      this.state.values.size,
      this.state.values.creativeType
    );

    errors.creativeVariation = validations.validateCreativeVariation(
      this.state.values.creativeVariation,
      this.state.values.creativePillar,
      this.state.client
    );

    errors.tech = validations.validateAlphanumeric(this.state.values.tech);

    errors.creativeType = validations.validateCreativeType(
      this.state.values.creativeType
    );

    errors.language = validations.validateLanguage(this.state.values.language);

    if (this.state.initiative == "social") {
      errors.carouselFrame = validations.validateAlphanumeric(
        this.state.values.carouselFrame
      );

      errors.platform = validations.validateRequiredAlphanumeric(
        this.state.values.platform
      );
    } else if (this.state.initiative == "other") {
      errors.date = validations.validateRequired(this.state.values.date);
      errors.person = validations.validateAlphabetic(
        this.state.values.person,
        true
      );
      errors.version = validations.validateNumbers(
        this.state.values.version,
        true
      );
    }

    return errors;
  }

  defaultValues() {
    if (
      ["image+text", "email", "custom", "copy"].indexOf(
        this.state.values.creativeType
      ) >= 0
    ) {
      if (!this.state.values.size) {
        this.setState(state => ({
          errors: { ...state.errors, size: null }
        }));
        this.setState({
          values: { ...this.state.values, size: "1x1" }
        });
        this.setState(state => ({
          touched: { ...state.touched, size: true }
        }));
      }
    } else if (["deck", "page"].indexOf(this.state.values.creativeType) >= 0) {
      if (!this.state.values.size) {
        this.setState(state => ({
          errors: { ...state.errors, size: null }
        }));
        this.setState({
          values: { ...this.state.values, size: "0" }
        });
        this.setState(state => ({
          touched: { ...state.touched, size: true }
        }));
      }
    }

    if (!this.state.values.creativeVariation) {
      this.setState(state => ({
        errors: { ...state.errors, creativeVariation: null }
      }));
      this.setState({
        values: { ...this.state.values, creativeVariation: "0" }
      });
      this.setState(state => ({
        touched: { ...state.touched, creativeVariation: true }
      }));
    }

    if (!this.state.values.date) {
      let _date = format(this.state.values.dateDisplay, "YYYY-MM-DD", {
        locale: this.locale
      });
      this.setState(state => ({
        errors: { ...state.errors, creativeVariation: null }
      }));
      this.setState({
        values: { ...this.state.values, date: _date }
      });
      this.setState(state => ({
        touched: { ...state.touched, creativeVariation: true }
      }));
    }
  }

  render() {
    return (
      <div id="content-wrapper">
        <div className="mui--text-center">
          <div className="mui--appbar-height" />
          <br />
          {this.state.client !== "aaa" && (
            <div className="mui--text-subhead">
              Client code: {this.state.client.toUpperCase()}
            </div>
          )}
          <div className="mui--text-subhead">
            Initiative: {this.state.initiative.toUpperCase()}
          </div>
        </div>
        <form onSubmit={this.onSubmit}>
          <Container fluid={true}>
            <Row>
              <Col sm="6" md="6">
                <div>
                  <Input
                    id="campaignCode"
                    name="campaignCode"
                    label={`Campaign code (Example: ${this.state.client.toUpperCase()}.1001)`}
                    floatingLabel={true}
                    type="text"
                    value={this.state.values.campaignCode}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    invalid={
                      this.state.errors.campaignCode &&
                      this.state.touched.campaignCode
                        ? true
                        : false
                    }
                  />
                  {this.state.errors.campaignCode &&
                    this.state.touched.campaignCode && (
                      <div className="input-feedback">
                        {this.state.errors.campaignCode}
                      </div>
                    )}
                </div>
                <div>
                  <Input
                    label="Creative concept"
                    floatingLabel={true}
                    id="concept"
                    name="concept"
                    type="text"
                    value={this.state.values.concept}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                    invalid={
                      this.state.errors.concept && this.state.touched.concept
                        ? true
                        : false
                    }
                  />
                  {this.state.errors.concept &&
                    this.state.touched.concept && (
                      <div className="input-feedback">
                        {this.state.errors.concept}
                      </div>
                    )}
                </div>

                <div>
                  <Input
                    label="Language (Example: spa or spa-eng)"
                    floatingLabel={true}
                    invalid={
                      this.state.errors.language && this.state.touched.language
                        ? true
                        : false
                    }
                    id="language"
                    name="language"
                    type="text"
                    value={this.state.values.language}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                  />
                  {this.state.errors.language &&
                    this.state.touched.language && (
                      <div className="input-feedback">
                        {this.state.errors.language}
                      </div>
                    )}
                </div>

                <div>
                  <Input
                    label="Creative variation"
                    floatingLabel={true}
                    invalid={
                      this.state.errors.creativeVariation &&
                      this.state.touched.creativeVariation
                        ? true
                        : false
                    }
                    id="creativeVariation"
                    name="creativeVariation"
                    type="text"
                    defaultValue="sssss0"
                    value={this.state.values.creativeVariation}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                  />
                  {this.state.errors.creativeVariation &&
                    this.state.touched.creativeVariation && (
                      <div className="input-feedback">
                        {this.state.errors.creativeVariation}
                      </div>
                    )}
                </div>

                {this.state.initiative === "social" && (
                  <div>
                    <Input
                      label="Carousel frame (if required)"
                      floatingLabel={true}
                      invalid={
                        this.state.errors.carouselFrame &&
                        this.state.touched.carouselFrame
                          ? true
                          : false
                      }
                      id="carouselFrame"
                      name="carouselFrame"
                      type="text"
                      value={this.state.values.carouselFrame}
                      onChange={this.onChange}
                      onBlur={this.onBlur}
                    />
                    {this.state.errors.carouselFrame &&
                      this.state.touched.carouselFrame && (
                        <div className="input-feedback">
                          {this.state.errors.carouselFrame}
                        </div>
                      )}
                  </div>
                )}
                {this.state.initiative === "other" && (
                  <div>
                    <Input
                      label="Person"
                      floatingLabel={true}
                      invalid={
                        this.state.errors.person && this.state.touched.person
                          ? true
                          : false
                      }
                      id="person"
                      name="person"
                      type="text"
                      value={this.state.values.person}
                      onChange={this.onChange}
                      onBlur={this.onBlur}
                    />
                    {this.state.errors.person &&
                      this.state.touched.person && (
                        <div className="input-feedback">
                          {this.state.errors.person}
                        </div>
                      )}
                  </div>
                )}
                {this.state.initiative === "other" && (
                  <div>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <MuiThemeProvider theme={materialTheme}>
                        <div>
                          <DatePicker
                            className="pickerDiv"
                            value={this.state.values.dateDisplay}
                            onChange={this.handleDateChange}
                            label="Date"
                            format="YYYY-MM-DD"
                            id="date"
                            name="date"
                          />
                        </div>
                      </MuiThemeProvider>
                    </MuiPickersUtilsProvider>
                  </div>
                )}
              </Col>
              <Col sm="6" md="6">
                {this.state.client === "other" ? (
                  <div>
                    <Input
                      floatingLabel={true}
                      invalid={
                        this.state.errors.creativePillar &&
                        this.state.touched.creativePillar
                          ? true
                          : false
                      }
                      name="creativePillar"
                      id="creativePillar"
                      label="Creative pillar"
                      value={this.state.values.creativePillar}
                      onChange={this.onChange}
                      onBlur={this.onBlur}
                    />

                    {this.state.errors.creativePillar &&
                      this.state.touched.creativePillar && (
                        <div className="input-feedback">
                          {this.state.errors.creativePillar}
                        </div>
                      )}
                  </div>
                ) : (
                  <div>
                    <Select
                      floatingLabel={true}
                      invalid={
                        this.state.errors.creativePillar &&
                        this.state.touched.creativePillar
                          ? true
                          : false
                      }
                      name="creativePillar"
                      id="creativePillar"
                      label="Creative pillar"
                      value={this.state.values.creativePillar}
                      onChange={this.onChange}
                      onBlur={this.onBlur}
                    >
                      {getCreativePillar(this.state.client).map(function(
                        option,
                        i
                      ) {
                        return (
                          <Option
                            key={i}
                            value={option.value}
                            label={option.label}
                          />
                        );
                      })}
                    </Select>

                    {this.state.errors.creativePillar &&
                      this.state.touched.creativePillar && (
                        <div className="input-feedback">
                          {this.state.errors.creativePillar}
                        </div>
                      )}
                  </div>
                )}

                <div>
                  <Select
                    label="Creative type"
                    floatingLabel={true}
                    invalid={
                      this.state.errors.creativeType &&
                      this.state.touched.creativeType
                        ? true
                        : false
                    }
                    id="creativeType"
                    name="creativeType"
                    value={this.state.values.creativeType}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                  >
                    {getCreativeType(this.state.initiative).map(function(
                      option,
                      i
                    ) {
                      return (
                        <Option
                          key={i}
                          value={option.value}
                          label={option.label}
                        />
                      );
                    })}
                  </Select>

                  {this.state.errors.creativeType &&
                    this.state.touched.creativeType && (
                      <div className="input-feedback">
                        {this.state.errors.creativeType}
                      </div>
                    )}
                </div>

                <div>
                  <Input
                    label="Size/lenght (Example: 300x200 or 5sec)"
                    floatingLabel={true}
                    invalid={
                      this.state.errors.size && this.state.touched.size
                        ? true
                        : false
                    }
                    id="size"
                    name="size"
                    type="text"
                    value={this.state.values.size}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                  />
                  {this.state.errors.size &&
                    this.state.touched.size && (
                      <div className="input-feedback">
                        {this.state.errors.size}
                      </div>
                    )}
                </div>
                <div>
                  <Input
                    label="Tech (optional)"
                    floatingLabel={true}
                    invalid={
                      this.state.errors.tech && this.state.touched.tech
                        ? true
                        : false
                    }
                    id="tech"
                    name="tech"
                    type="text"
                    value={this.state.values.tech}
                    onChange={this.onChange}
                    onBlur={this.onBlur}
                  />
                  {this.state.errors.tech &&
                    this.state.touched.tech && (
                      <div className="input-feedback">
                        {this.state.errors.tech}
                      </div>
                    )}
                </div>

                {this.state.initiative === "social" && (
                  <div>
                    <Select
                      label="Platform"
                      floatingLabel={true}
                      invalid={
                        this.state.errors.platform &&
                        this.state.touched.platform
                          ? true
                          : false
                      }
                      id="platform"
                      name="platform"
                      value={this.state.values.platform}
                      onChange={this.onChange}
                      onBlur={this.onBlur}
                      keyboard
                      clearable
                      disableOpenOnEnter
                    >
                      {platform.map(function(option, i) {
                        return (
                          <Option
                            key={i}
                            value={option.value}
                            label={option.label}
                          />
                        );
                      })}
                    </Select>
                    {this.state.errors.platform &&
                      this.state.touched.platform && (
                        <div className="input-feedback">
                          {this.state.errors.platform}
                        </div>
                      )}
                  </div>
                )}

                {this.state.initiative === "other" && (
                  <div>
                    <Input
                      label="Version"
                      floatingLabel={true}
                      invalid={
                        this.state.errors.version && this.state.touched.version
                          ? true
                          : false
                      }
                      id="version"
                      name="version"
                      type="text"
                      value={this.state.values.version}
                      onChange={this.onChange}
                      onBlur={this.onBlur}
                    />
                    {this.state.errors.version &&
                      this.state.touched.version && (
                        <div className="input-feedback">
                          {this.state.errors.version}
                        </div>
                      )}
                  </div>
                )}
              </Col>
            </Row>
            <Row>
              <Col md="8" md-offset="2">
                {/* <div className={!this.state.nameVisible && "_hidden"}> */}
                <div>
                  <br />
                  <Input
                    htmlFor="createName"
                    label="Creative name:"
                    type="text"
                    id="m8-create-name"
                    onClick={this.onSubmit}
                    value={createName(
                      this.state.values.campaignCode,
                      this.state.values.concept,
                      this.state.values.creativePillar,
                      this.state.values.creativeVariation,
                      this.state.values.size,
                      this.state.values.tech,
                      this.state.values.language,
                      this.state.values.creativeType,
                      this.state.values.carouselFrame,
                      this.state.values.platform,
                      this.state.values.date,
                      this.state.values.person,
                      this.state.values.version,
                      this.state.initiative
                    )}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="6" md-offset="3">
                <div className="mui--text-center">
                  <Button variant="raised" type="submit" color="primary">
                    {this.state.btnText}
                  </Button>
                </div>
                {/* <div className="mui--text-center">
                  <Button
                    variant="raised"
                    color="primary"
                    onClick={this.onReset}
                    disabled={!this.state.dirty || this.state.isSubmitting}
                  >
                    Reset
                  </Button>
                </div> */}
              </Col>
            </Row>
          </Container>
        </form>
      </div>
    );
  }
}

class Creative extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      client: props.location.state.client,
      initiative: props.location.state.initiative
    };
  }

  render() {
    return <CreativeForm {...this.state} />;
  }
}

export default Creative;
export { Creative };
