import React from "react";
import Container from "muicss/lib/react/container";
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";
import Input from "muicss/lib/react/input";
import Button from "muicss/lib/react/button";
import { Formik } from "formik";
import * as validations from "../libraries/validations";
import createName from "../libraries/utils";
import Option from "muicss/lib/react/option";
import Select from "muicss/lib/react/select";
import { getCreativePillar } from "../data/creativePillars";
import { getCreativeType } from "../data/creativeTypes";
import { platform } from "../data/platforms";

function CreativeForm(props) {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleReset,
    dirty,
    submitForm
  } = props;

  const creativePillarList = getCreativePillar(values.client);
  const creativeTypeList = getCreativeType(values.initiative);

  function copyName(event) {
    event.preventDefault();
    // Defaults Values, when submiting
    if (!values.creativeVariation) {
      values.creativeVariation = "0";
    }
    submitForm();

    const signature = document.querySelector("#m8-create-name");
    const range = document.createRange();
    range.selectNode(signature);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    try {
      document.execCommand("copy");
      // values.btCopiedText = "Name copied!";
      // values.btCopiedClass = "copied";
    } catch (err) {
      values.btCopiedClass = err;
    }
    window.getSelection().removeAllRanges();
  }

  return (
    <div id="content-wrapper">
      <div className="mui--text-center">
        <div className="mui--appbar-height" />
        <br />
        {values.client !== "aaa" && (
          <div className="mui--text-subhead">
            Client code: {values.client.toUpperCase()}
          </div>
        )}
        <div className="mui--text-subhead">
          Initiative: {values.initiative.toUpperCase()}
        </div>
      </div>
      <form onSubmit={copyName}>
        <Container fluid={true}>
          <Row>
            <Col sm="6" md="6">
              <div>
                <Input
                  id="campaignCode"
                  name="campaignCode"
                  label={`Campaign code (Example: ${values.client.toUpperCase()}.1001)`}
                  floatingLabel={true}
                  type="text"
                  value={values.campaignCode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  invalid={
                    errors.campaignCode && touched.campaignCode ? true : false
                  }
                />
                {errors.campaignCode &&
                  touched.campaignCode && (
                    <div className="input-feedback">{errors.campaignCode}</div>
                  )}
              </div>
              <div>
                <Input
                  label="Creative concept"
                  floatingLabel={true}
                  id="concept"
                  name="concept"
                  type="text"
                  value={values.concept}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  invalid={errors.concept && touched.concept ? true : false}
                />
                {errors.concept &&
                  touched.concept && (
                    <div className="input-feedback">{errors.concept}</div>
                  )}
              </div>

              <div>
                <Input
                  label="Language (Example: spa or spa-eng)"
                  floatingLabel={true}
                  invalid={errors.language && touched.language ? true : false}
                  id="language"
                  name="language"
                  type="text"
                  value={values.language}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.language &&
                  touched.language && (
                    <div className="input-feedback">{errors.language}</div>
                  )}
              </div>

              <div>
                <Input
                  label="Creative variation"
                  floatingLabel={true}
                  invalid={
                    errors.creativeVariation && touched.creativeVariation
                      ? true
                      : false
                  }
                  id="creativeVariation"
                  name="creativeVariation"
                  type="text"
                  defaultValue="sssss0"
                  value={values.creativeVariation}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.creativeVariation &&
                  touched.creativeVariation && (
                    <div className="input-feedback">
                      {errors.creativeVariation}
                    </div>
                  )}
              </div>

              {values.initiative === "social" && (
                <div>
                  <Input
                    label="Carousel frame (if required)"
                    floatingLabel={true}
                    invalid={
                      errors.carouselFrame && touched.carouselFrame
                        ? true
                        : false
                    }
                    id="carouselFrame"
                    name="carouselFrame"
                    type="text"
                    value={values.carouselFrame}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.carouselFrame &&
                    touched.carouselFrame && (
                      <div className="input-feedback">
                        {errors.carouselFrame}
                      </div>
                    )}
                </div>
              )}
              {values.initiative === "other" && (
                <div>
                  <Input
                    label="Person"
                    floatingLabel={true}
                    invalid={errors.person && touched.person ? true : false}
                    id="person"
                    name="person"
                    type="text"
                    value={values.person}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.person &&
                    touched.person && (
                      <div className="input-feedback">{errors.person}</div>
                    )}
                </div>
              )}
              {values.initiative === "other" && (
                <div>
                  <Input
                    label="Date"
                    floatingLabel={false}
                    invalid={errors.date && touched.date ? true : false}
                    id="date"
                    name="date"
                    type="date"
                    format="yyyy-MM-dd"
                    value={values.date}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  {errors.date &&
                    touched.date && (
                      <div className="input-feedback">{errors.date}</div>
                    )}
                </div>
              )}
            </Col>
            <Col sm="6" md="6">
              {values.client === "other" ? (
                <div>
                  <Input
                    floatingLabel={true}
                    invalid={
                      errors.creativePillar && touched.creativePillar
                        ? true
                        : false
                    }
                    name="creativePillar"
                    id="creativePillar"
                    label="Creative pillar"
                    value={values.creativePillar}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  {errors.creativePillar &&
                    touched.creativePillar && (
                      <div className="input-feedback">
                        {errors.creativePillar}
                      </div>
                    )}
                </div>
              ) : (
                <div>
                  <Select
                    floatingLabel={true}
                    invalid={
                      errors.creativePillar && touched.creativePillar
                        ? true
                        : false
                    }
                    name="creativePillar"
                    id="creativePillar"
                    label="Creative pillar"
                    value={values.creativePillar}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    {creativePillarList.map(function(option, i) {
                      return (
                        <Option
                          key={i}
                          value={option.value}
                          label={option.label}
                        />
                      );
                    })}
                  </Select>

                  {errors.creativePillar &&
                    touched.creativePillar && (
                      <div className="input-feedback">
                        {errors.creativePillar}
                      </div>
                    )}
                </div>
              )}

              <div>
                <Select
                  label="Creative type"
                  floatingLabel={true}
                  invalid={
                    errors.creativeType && touched.creativeType ? true : false
                  }
                  id="creativeType"
                  name="creativeType"
                  value={values.creativeType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  {creativeTypeList.map(function(option, i) {
                    return (
                      <Option
                        key={i}
                        value={option.value}
                        label={option.label}
                      />
                    );
                  })}
                </Select>

                {errors.creativeType &&
                  touched.creativeType && (
                    <div className="input-feedback">{errors.creativeType}</div>
                  )}
              </div>

              <div>
                <Input
                  label="Size/lenght (Example: 300x200 or 5sec)"
                  floatingLabel={true}
                  invalid={errors.size && touched.size ? true : false}
                  id="size"
                  name="size"
                  type="text"
                  value={values.size}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.size &&
                  touched.size && (
                    <div className="input-feedback">{errors.size}</div>
                  )}
              </div>
              <div>
                <Input
                  label="Tech (optional)"
                  floatingLabel={true}
                  invalid={errors.tech && touched.tech ? true : false}
                  id="tech"
                  name="tech"
                  type="text"
                  value={values.tech}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.tech &&
                  touched.tech && (
                    <div className="input-feedback">{errors.tech}</div>
                  )}
              </div>

              {values.initiative === "social" && (
                <div>
                  <Select
                    label="Platform"
                    floatingLabel={true}
                    invalid={errors.platform && touched.platform ? true : false}
                    id="platform"
                    name="platform"
                    value={values.platform}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                  {errors.platform &&
                    touched.platform && (
                      <div className="input-feedback">{errors.platform}</div>
                    )}
                </div>
              )}

              {values.initiative === "other" && (
                <div>
                  <Input
                    label="Version"
                    floatingLabel={true}
                    invalid={errors.version && touched.version ? true : false}
                    id="version"
                    name="version"
                    type="text"
                    value={values.version}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.version &&
                    touched.version && (
                      <div className="input-feedback">{errors.version}</div>
                    )}
                </div>
              )}
            </Col>
          </Row>
          <Row>
            <Col md="8" md-offset="2">
              <div>
                <Input
                  htmlFor="createName"
                  label="Creative name:"
                  type="text"
                  id="m8-create-name"
                  value={createName(
                    values.campaignCode,
                    values.concept,
                    values.creativePillar,
                    values.creativeVariation,
                    values.size,
                    values.tech,
                    values.language,
                    values.creativeType,
                    values.carouselFrame,
                    values.platform,
                    values.date,
                    values.person,
                    values.version,
                    values.initiative
                  )}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="6" md-offset="3">
              <div className="mui--text-center">
                <Button variant="raised" type="submit" color="primary">
                  {values.btCopiedText}
                </Button>
              </div>
              <div className="mui--text-center">
                <Button
                  variant="raised"
                  color="primary"
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}
                >
                  Reset
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </form>
    </div>
  );
}

function CreativeFields(props) {
  const { client, initiative } = props;
  return (
    <Formik
      initialValues={{
        campaignCode: "",
        creativePillar: "",
        concept: "",
        creativeVariation: "",
        size: "",
        tech: "",
        language: "",
        creativeType: "",
        carouselFrame: "",
        platform: "",
        btCopiedText: "Copy name to clipboard!",
        btCopiedClass: "",
        client: client,
        initiative: initiative,
        date: "",
        person: "",
        version: ""
      }}
      validate={(values, props) => {
        let errors = {};

        errors.campaignCode = validations.validateCampaign(
          values.campaignCode,
          client
        );

        errors.creativePillar = validations.validateCreativePillar(
          values.creativePillar
        );

        errors.concept = validations.validateConcept(values.concept);

        errors.size = validations.validateSize(
          values.size,
          values.creativeType
        );

        errors.creativeVariation = validations.validateCreativeVariation(
          values.creativeVariation,
          values.creativePillar,
          values.client
        );

        errors.tech = validations.validateAlphanumeric(values.tech);

        errors.carouselFrame = validations.validateAlphanumeric(
          values.carouselFrame
        );

        errors.platform = validations.validateRequiredAlphanumeric(
          values.platform
        );

        errors.creativeType = validations.validateCreativeType(
          values.creativeType
        );

        errors.language = validations.validateLanguage(values.language);

        if (
          ["image+text", "email", "custom", "custom"].indexOf(
            values.creativeType
          ) >= 0
        ) {
          if (!values.size) {
            values.size = "1x1";
          }
        } else if (["deck"].indexOf(values.creativeType) >= 0) {
          if (!values.size) {
            values.size = "0";
          }
        }

        errors.date = validations.validateRequired(values.date);
        errors.person = validations.validateAlphabetic(values.person, true);
        errors.version = validations.validateNumbers(values.version, true);

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        console.log("al fin");
      }}
      render={({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        isSubmitting,
        submitForm,
        handleDateChange
      }) =>
        CreativeForm({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting,
          submitForm,
          handleDateChange
        })
      }
    />
  );
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
    return <CreativeFields {...this.state} />;
  }
}

export default Creative;
export { Creative };
