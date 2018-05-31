import React from "react";
import { Grid, Col, Row } from "react-bootstrap";
import { Formik } from "formik";
import createName from "../utils/validator";
import Option from "muicss/lib/react/option";
import Select from "muicss/lib/react/select";

function CreativeForm(props) {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleChange1,
    handleBlur,
    handleSubmit,
    handleReset,
    dirty
  } = props;

  const temp = createName();

  return (
    <form onSubmit={handleSubmit}>
      <Grid>
        <Row>
          <Col sm={6} md={6}>
            <div className="input-holder">
              <label htmlFor="campaignCode">Campaign code</label>
              <input
                id="campaignCode"
                name="campaignCode"
                type="text"
                value={values.campaignCode}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.campaignCode && touched.campaignCode
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.campaignCode &&
                touched.campaignCode && (
                  <div className="input-feedback">{errors.campaignCode}</div>
                )}
            </div>
            <div className="input-holder">
              <label htmlFor="concept">Concept</label>
              <input
                id="concept"
                name="concept"
                type="text"
                value={values.concept}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.concept && touched.concept
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.concept &&
                touched.concept && (
                  <div className="input-feedback">{errors.concept}</div>
                )}
            </div>

            <div className="input-holder">
              <label htmlFor="creativeVariation">Creative variation</label>
              <input
                id="creativeVariation"
                name="creativeVariation"
                type="text"
                value={values.creativeVariation}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.creativeVariation && touched.creativeVariation
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.creativeVariation &&
                touched.creativeVariation && (
                  <div className="input-feedback">
                    {errors.creativeVariation}
                  </div>
                )}
            </div>

            <div className="input-holder">
              <label htmlFor="language">Language</label>
              <input
                id="language"
                name="language"
                type="text"
                value={values.language}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.language && touched.language
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.language &&
                touched.language && (
                  <div className="input-feedback">{errors.language}</div>
                )}
            </div>

            <div className="input-holder">
              <label htmlFor="carouselFrame">Carousel frame</label>
              <input
                id="carouselFrame"
                name="carouselFrame"
                type="text"
                value={values.carouselFrame}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.carouselFrame && touched.carouselFrame
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.carouselFrame &&
                touched.carouselFrame && (
                  <div className="input-feedback">{errors.carouselFrame}</div>
                )}
            </div>
          </Col>
          <Col sm={6} md={6}>
            <div className="input-holder">
              <label htmlFor="creativePilar">Creative pilar</label>
              <input
                id="creativePilar"
                name="creativePilar"
                type="text"
                value={values.creativePilar}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.creativePilar && touched.creativePilar
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.creativePilar &&
                touched.creativePilar && (
                  <div className="input-feedback">{errors.creativePilar}</div>
                )}
            </div>
            <div className="input-holder">
              <label htmlFor="size">Size/lenght</label>
              <input
                id="size"
                name="size"
                type="text"
                value={values.size}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.size && touched.size
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.size &&
                touched.size && (
                  <div className="input-feedback">{errors.size}</div>
                )}
            </div>

            <div className="input-holder">
              <label htmlFor="tech">Tech (optional)</label>
              <input
                id="tech"
                name="tech"
                type="text"
                value={values.tech}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.tech && touched.tech
                    ? "text-input error"
                    : "text-input"
                }
              />
              {errors.tech &&
                touched.tech && (
                  <div className="input-feedback">{errors.tech}</div>
                )}
            </div>

            {/* <div className="input-holder">
                            <label htmlFor="creativeType">Creative type</label>
                            <input
                                id="creativeType"
                                name="creativeType"
                                type="text"
                                value={values.creativeType}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.creativeType && touched.creativeType ? "text-input error" : "text-input"}
                            />
                            {errors.creativeType && touched.creativeType && <div className="input-feedback">{errors.creativeType}</div>}
                        </div> */}

            {/* <select
                            id="creativeType"
                            name="creativeType"
                            value={values.creativeType}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={errors.creativeType && touched.creativeType ? "text-input error" : "text-input"}
                        >
                            <option value=""></option>
                            <option value="carousel">carousel</option>
                            <option value="video">video</option>
                            <option value="slideshow">slideshow</option>
                            <option value="leadform">leadform</option>
                            <option value="dynamic">dynamic</option>
                        </select>  */}

            <div className="input-holder">
              <label htmlFor="creativeType">Creative type</label>
              <select
                id="creativeType"
                name="creativeType"
                value={values.creativeType}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.creativeType && touched.creativeType
                    ? "text-input error"
                    : "text-input"
                }
              >
                <option value="" />
                <option value="carousel">carousel</option>
                <option value="video">video</option>
                <option value="slideshow">slideshow</option>
                <option value="leadform">leadform</option>
                <option value="dynamic">dynamic</option>
              </select>

              {errors.creativeType &&
                touched.creativeType && (
                  <div className="input-feedback">{errors.creativeType}</div>
                )}
            </div>

            <div className="input-holder">
              <label htmlFor="platform">Platform</label>
              <select
                id="platform"
                name="platform"
                value={values.platform}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.platform && touched.platform
                    ? "text-input error"
                    : "text-input"
                }
              >
                <option value="" />
                <option value="fb">Facebook</option>
                <option value="ig">Instagram</option>
                <option value="fb+ig">Facebook+Instagram</option>
                <option value="tw">Twitter</option>
                <option value="yt">Youtube</option>
              </select>
              {errors.platform &&
                touched.platform && (
                  <div className="input-feedback">{errors.platform}</div>
                )}
            </div>
            {/* <div className="input-holder">
                            <label htmlFor="platform">Platform</label>
                            <input
                                id="platform"
                                name="platform"
                                type="text"
                                value={values.platform}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={errors.platform && touched.platform ? "text-input error" : "text-input"}
                            />
                            {errors.platform && touched.platform && <div className="input-feedback">{errors.platform}</div>}


                        </div> */}
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12}>
            <div className="input-holder" align="center">
              <div className="input-holder">
                <label htmlFor="createName">Creative name:</label>
                <input
                  className="center"
                  htmlFor="createName"
                  type="text"
                  id="m8-create-name"
                  value={createName(
                    values.campaignCode,
                    values.concept,
                    values.creativePilar,
                    values.creativeVariation,
                    values.size,
                    values.tech,
                    values.language,
                    values.creativeType,
                    values.carouselFrame,
                    values.platform
                  )}
                />
                <input
                  className={values.btCopiedClass}
                  type="submit"
                  value={values.btCopiedText}
                />
                <button
                  type="submit"
                  onClick={handleReset}
                  disabled={!dirty || isSubmitting}
                >
                  Reset
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </form>
  );
}

function CreativeFields(props) {
  const { client, initiative } = props;
  return (
    <Formik
      initialValues={{
        campaignCode: "",
        creativePilar: "",
        concept: "",
        creativeVariation: "",
        size: "",
        tech: "",
        language: "",
        creativeType: "",
        carouselFrame: "",
        platform: "",
        btCopiedText: "Paste name to clipboard!",
        btCopiedClass: "",
        languageTemp: "",
        client: client,
        initiative: initiative
      }}
      validate={(values, props) => {
        let errors = {};
        if (!values.campaignCode) {
          errors.campaignCode = "Required";
        } else if (!/^([A-Z]){2,3}\.+([0-9]){4}$/i.test(values.campaignCode)) {
          errors.campaignCode =
            "Invalid characters or format. Example: VFL.7897";
        }

        if (!values.creativePilar) {
          errors.creativePilar = "Required";
        } else if (!/^([a-z]){1,15}$/i.test(values.creativePilar)) {
          errors.creativePilar = "Invalid characters on creative pilar";
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
        } else if (!/^([a-z]){3}(\-([a-z]){3})*$/i.test(values.language)) {
          errors.language = "Invalid characters";
        }

        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);

        const signature = document.querySelector("#m8-create-name");
        const range = document.createRange();
        range.selectNode(signature);
        window.getSelection().addRange(range);

        try {
          document.execCommand("copy");
          values.btCopiedText = "Name copied!";
          values.btCopiedClass = "copied";
        } catch (err) {
          values.btCopiedClass = err;
        }

        window.getSelection().removeAllRanges();
      }}
      render={({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) =>
        CreativeForm({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
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
    return (
      <main>
        <CreativeFields {...this.state} />
      </main>
    );
  }
}

export default Creative;
export { Creative };
