import React from "react";
import Container from "muicss/lib/react/container";
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";
import Input from "muicss/lib/react/input";
import Button from "muicss/lib/react/button";
import { Formik } from "formik";
import { createName, validateClient } from "../utils/validator";
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

    // } else {
    //   alert("no entro");
    // }
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
                  label="Concept"
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

              {values.initiative === "social" && (
                <div>
                  <Input
                    label="Carousel frame"
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
        languageTemp: "",
        client: client,
        initiative: initiative,
        countError: 0
      }}
      validate={(values, props) => {
        let errors = {};
        if (!values.campaignCode) {
          errors.campaignCode = "Required";
        } else if (!/^([A-Z]){2,3}\.+([0-9]){4}$/i.test(values.campaignCode)) {
          errors.campaignCode =
            "Invalid characters or format. Example: VFL.7897";
        } else {
          errors.campaignCode = validateClient(
            values.campaignCode,
            values.client
          );
        }

        if (!values.creativePillar) {
          errors.creativePillar = "Required";
        } else if (!/^([a-z0-9%$]){1,15}$/i.test(values.creativePillar)) {
          errors.creativePillar = "Invalid characters on creative pillar";
        }

        if (!values.concept) {
          errors.concept = "Required";
        } else if (!/^([a-z]){1,15}$/i.test(values.concept)) {
          errors.concept = "Invalid characters on concept";
        }

        if (!values.size) {
          errors.size = "Required";
        } else if (
          !/^(([0-9]){1,3}x([0-9]){1,3}$)|^([0-9])*(sec)$/i.test(values.size)
        ) {
          errors.size = "Invalid characters";
        }

        if (!values.creativeVariation) {
          errors.creativeVariation = "Required";
        } else if (!/([A-Za-z0-9])*/i.test(values.creativeVariation)) {
          errors.creativeVariation = "Invalid characters";
        }

        if (!/([A-Za-z0-9])*/i.test(values.tech)) {
          errors.tech = "Invalid characters";
        }

        if (!/([A-Za-z0-9])*/i.test(values.carouselFrame)) {
          errors.carouselFrame = "Invalid characters";
        }

        if (!values.platform) {
          errors.platform = "Required";
        } else if (!/([A-Za-z0-9])*/i.test(values.platform)) {
          errors.platform = "Invalid characters";
        }

        if (!values.creativeType) {
          errors.creativeType = "Required";
        } else if (!/([A-Za-z0-9])*/i.test(values.creativeType)) {
          errors.creativeType = "Invalid characters";
        }

        if (!values.language) {
          errors.language = "Required";
        } else if (!/^([a-z]){3}(-([a-z]){3})*$/i.test(values.language)) {
          errors.language = "Invalid characters";
        }

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
        submitForm
      }) =>
        CreativeForm({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting,
          submitForm
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
