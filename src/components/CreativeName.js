import React from "react";
import { Redirect } from "react-router";
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
import Tooltip from "@material-ui/core/Tooltip";

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
			languages: "",
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
			languages: false,
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
			btnText: "Copy name to clipboard!"
		};

		this.state = initialState;
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
		const value =
			target.type === "checkbox" ? target.checked : target.value;

		let _values = Object.assign({}, this.state.values); //creating copy of state
		_values[name] = value; //updating value

		this.setState(
			{ values: _values },

			function() {
				let _e = this.validate();
				this.setState(state => ({
					errors: { ...state.errors, [name]: _e[name] }
				}));
			}
		);
		this.resetSubmit();
	}

	onBlur(e) {
		const target = e.target;
		const name = target.name;
		const _e = this.validate();

		this.setState({ errors: _e });
		this.setState(state => ({
			touched: { ...state.touched, [name]: true }
		}));
		this.defaultValues();

		if (!utils.findError) {
			this.setState({ hasErrors: false });
		} else {
			this.setState({ hasErrors: true });
		}
	}

	allTouched() {
		const _touched = {
			campaignCode: true,
			concept: true,
			creativePillar: true,
			creativeVariation: true,
			size: true,
			tech: true,
			languages: true,
			creativeType: true,
			carouselFrame: true,
			platform: true,
			date: true,
			person: true,
			version: true
		};

		this.setState({ touched: _touched });
	}

	resetSubmit() {
		if (this.state.isSubmitting) {
			this.setState({ isSubmitting: false });
			this.setState({ btnText: "Copy name to clipboard!" });
			this.setState({ hasErrors: true });
		}
	}

	onReset(e) {
		e.preventDefault();
		document.location.href = "/";
	}

	onSubmit(e) {
		e.preventDefault();
		this.defaultValues();
		const _e = this.validate();
		this.setState({ errors: _e }, function() {
			this.allTouched();

			const signature = document.querySelector("#m8-create-name");
			const range = document.createRange();
			range.selectNode(signature);
			window.getSelection().removeAllRanges();
			window.getSelection().addRange(range);

			try {
				if (!utils.findError(this.state.errors)) {
					document.execCommand("copy");
					this.setState({ isSubmitting: true });
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

		errors.concept = validations.validateCreativeConcept(
			this.state.values.concept
		);

		errors.size = validations.validateSize(
			this.state.values.size,
			this.state.values.creativeType
		);

		errors.creativeVariation = validations.validateCreativeVariation(
			this.state.values.creativeVariation,
			this.state.values.creativePillar,
			this.state.client
		);

		errors.tech = validations.validateAlphanumeric(
			this.state.values.tech,
			false
		);

		errors.creativeType = validations.validateAlphanumeric(
			this.state.values.creativeType,
			true
		);

		errors.languages = validations.validateLanguage(
			this.state.values.languages
		);

		if (this.state.initiative === "social") {
			errors.carouselFrame = validations.validateCarouselFrame(
				this.state.values.carouselFrame,
				false
			);

			errors.platform = validations.validateAlphanumeric(
				this.state.values.platform,
				true
			);
		} else if (this.state.initiative === "other") {
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
				this.setState(state => ({
					values: { ...state.values, size: "1x1" }
				}));
				this.setState(state => ({
					touched: { ...state.touched, size: true }
				}));
			}
		} else if (
			["deck", "page"].indexOf(this.state.values.creativeType) >= 0
		) {
			if (!this.state.values.size) {
				this.setState(state => ({
					errors: { ...state.errors, size: null }
				}));
				this.setState(state => ({
					values: { ...state.values, size: "0" }
				}));
				this.setState(state => ({
					touched: { ...state.touched, size: true }
				}));
			}
		}

		if (!this.state.values.creativeVariation) {
			this.setState(state => ({
				values: { ...state.values, creativeVariation: "0" }
			}));

			this.setState(state => ({
				errors: { ...state.errors, creativeVariation: null }
			}));

			this.setState(state => ({
				touched: { ...state.touched, creativeVariation: true }
			}));
		}

		if (!this.state.values.date) {
			let _date = format(this.state.values.dateDisplay, "YYYY-MM-DD", {
				locale: this.locale
			});
			this.setState(state => ({
				errors: { ...state.errors, date: null }
			}));
			this.setState(state => ({
				values: { ...state.values, date: _date }
			}));
			this.setState(state => ({
				touched: { ...state.touched, date: true }
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
							<Col sm="12" md="6">
								<div>
									<Input
										id="campaignCode"
										name="campaignCode"
										label={`1. Campaign code (Example: ${this.state.client.toUpperCase()}.1001)`}
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

								{this.state.client === "aaa" ? (
									<div class="divHelp">
										<Input
											floatingLabel={true}
											invalid={
												this.state.errors
													.creativePillar &&
												this.state.touched
													.creativePillar
													? true
													: false
											}
											name="creativePillar"
											id="creativePillar"
											label="2. Creative pillar"
											value={
												this.state.values.creativePillar
											}
											onChange={this.onChange}
											onBlur={this.onBlur}
										/>
										<Tooltip
											title="Add"
											placement="left-start"
											aria-label="Add"
										>
											<i class="icoHelp material-icons">
												help
											</i>
										</Tooltip>

										{this.state.errors.creativePillar &&
											this.state.touched
												.creativePillar && (
												<div className="input-feedback">
													{
														this.state.errors
															.creativePillar
													}
												</div>
											)}
									</div>
								) : (
									<div class="divHelp">
										<Select
											floatingLabel={true}
											invalid={
												this.state.errors
													.creativePillar &&
												this.state.touched
													.creativePillar
													? true
													: false
											}
											name="creativePillar"
											id="creativePillar"
											label="2. Creative pillar"
											value={
												this.state.values.creativePillar
											}
											onChange={this.onChange}
											onBlur={this.onBlur}
										>
											{getCreativePillar(
												this.state.client
											).map(function(option, i) {
												return (
													<Option
														key={i}
														value={option.value}
														label={option.label}
													/>
												);
											})}
										</Select>
										<Tooltip
											title="Distinctive topics within the umbrella concept."
											placement="left-start"
										>
											<i class="icoHelp material-icons">
												help
											</i>
										</Tooltip>

										{this.state.errors.creativePillar &&
											this.state.touched
												.creativePillar && (
												<div className="input-feedback">
													{
														this.state.errors
															.creativePillar
													}
												</div>
											)}
									</div>
								)}
								<div class="divHelp">
									<Input
										label="3. Creative concept"
										floatingLabel={true}
										id="concept"
										name="concept"
										type="text"
										value={this.state.values.concept}
										onChange={this.onChange}
										onBlur={this.onBlur}
										invalid={
											this.state.errors.concept &&
											this.state.touched.concept
												? true
												: false
										}
									/>
									<Tooltip
										title="Distinctive feature of the creative piece."
										placement="left-start"
									>
										<i class="icoHelp material-icons">
											help
										</i>
									</Tooltip>

									{this.state.errors.concept &&
										this.state.touched.concept && (
											<div className="input-feedback">
												{this.state.errors.concept}
											</div>
										)}
								</div>

								{this.state.initiative !== "social" && (
									<div class="divHelp">
										<Input
											label="4. Creative variant (Example: rate, norate, 20off)"
											floatingLabel={true}
											invalid={
												this.state.errors
													.creativeVariation &&
												this.state.touched
													.creativeVariation
													? true
													: false
											}
											id="creativeVariation"
											name="creativeVariation"
											type="text"
											defaultValue="0"
											value={
												this.state.values
													.creativeVariation
											}
											onChange={this.onChange}
											onBlur={this.onBlur}
										/>
										<Tooltip
											title="Description of the creative concept variant (If it were necessary)"
											placement="left-start"
										>
											<i class="icoHelp material-icons">
												help
											</i>
										</Tooltip>
										{this.state.errors.creativeVariation &&
											this.state.touched
												.creativeVariation && (
												<div className="input-feedback">
													{
														this.state.errors
															.creativeVariation
													}
												</div>
											)}
									</div>
								)}

								{this.state.initiative === "social" && (
									<div class="divHelp">
										<Input
											label="4. Creative variant (Example: rate, norate, 20off)"
											floatingLabel={true}
											invalid={
												this.state.errors
													.creativeVariation &&
												this.state.touched
													.creativeVariation
													? true
													: false
											}
											id="creativeVariation"
											name="creativeVariation"
											type="text"
											defaultValue="0"
											value={
												this.state.values
													.creativeVariation
											}
											onChange={this.onChange}
											onBlur={this.onBlur}
										/>
										<Tooltip
											title="Description of the creative concept variant (If it were necessary)"
											placement="left-start"
										>
											<i class="icoHelp material-icons">
												help
											</i>
										</Tooltip>
										{this.state.errors.creativeVariation &&
											this.state.touched
												.creativeVariation && (
												<div className="input-feedback">
													{
														this.state.errors
															.creativeVariation
													}
												</div>
											)}
									</div>
								)}
								{this.state.initiative === "social" && (
									<div class="divHelp">
										<Input
											label="5. Tech (Optional, Example: 1mb, 18fps)"
											floatingLabel={true}
											invalid={
												this.state.errors.tech &&
												this.state.touched.tech
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
										<Tooltip
											title={
												<React.Fragment>
													<p>
														Description of a
														technical aspect or
														certain functionality of
														a piece.
														<br />
														For videos: also use
														pixel size.
													</p>
												</React.Fragment>
											}
											placement="left-start"
										>
											<i class="icoHelp material-icons">
												help
											</i>
										</Tooltip>
										{this.state.errors.tech &&
											this.state.touched.tech && (
												<div className="input-feedback">
													{this.state.errors.tech}
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
												this.state.errors.person &&
												this.state.touched.person
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
										<MuiPickersUtilsProvider
											utils={DateFnsUtils}
										>
											<MuiThemeProvider
												theme={materialTheme}
											>
												<div>
													<DatePicker
														className="pickerDiv"
														value={
															this.state.values
																.dateDisplay
														}
														onChange={
															this
																.handleDateChange
														}
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
							<Col sm="12" md="6">
								{this.state.initiative !== "social" && (
									<div class="divHelp">
										<Input
											label="5. Tech (Optional, Example: 1mb, 18fps)"
											floatingLabel={true}
											invalid={
												this.state.errors.tech &&
												this.state.touched.tech
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
										<Tooltip
											title={
												<React.Fragment>
													<p>
														Description of a
														technical aspect or
														certain functionality of
														a piece.
														<br />
														For videos: also use
														pixel size.
													</p>
												</React.Fragment>
											}
											placement="left-start"
										>
											<i class="icoHelp material-icons">
												help
											</i>
										</Tooltip>
										{this.state.errors.tech &&
											this.state.touched.tech && (
												<div className="input-feedback">
													{this.state.errors.tech}
												</div>
											)}
									</div>
								)}

								<div class="divHelp">
									<Input
										label="6. Image size or Audio/Video lenght"
										/* (Example: 300x200 or 5sec) */
										floatingLabel={true}
										invalid={
											this.state.errors.size &&
											this.state.touched.size
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
									<Tooltip
										title={
											<React.Fragment>
												<p>
												- For Display use width x height. Example: 300x250 <br />
												- For Audio or Video use running time in two digits accompanied by "sec". Example: 06sec <br />
												- Default value is 1x1 <br />
													{/* Video, audio: 15sec <br />
													Image, HTML5, Rich Media:
													(WxH) 300x250 <br />
													Default value: 1x1 */}
												</p>
											</React.Fragment>
										}
										placement="left-start"
									>
										<i class="icoHelp material-icons">
											help
										</i>
									</Tooltip>
									{this.state.errors.size &&
										this.state.touched.size && (
											<div className="input-feedback">
												{this.state.errors.size}
											</div>
										)}
								</div>

								<div>
									<Input
										label="7. Language (Example: spa or spa-eng)"
										floatingLabel={true}
										invalid={
											this.state.errors.languages &&
											this.state.touched.languages
												? true
												: false
										}
										id="languages"
										name="languages"
										type="text"
										value={this.state.values.languages}
										onChange={this.onChange}
										onBlur={this.onBlur}
									/>
									{this.state.errors.languages &&
										this.state.touched.languages && (
											<div className="input-feedback">
												{this.state.errors.languages}
											</div>
										)}
								</div>

								<div>
									<Select
										label="8. Creative type"
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
										{getCreativeType(
											this.state.initiative
										).map(function(option, i) {
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

								{this.state.initiative === "social" && (
									<div>
										<Input
											label="9. Carousel frame (if required)"
											floatingLabel={true}
											invalid={
												this.state.errors
													.carouselFrame &&
												this.state.touched.carouselFrame
													? true
													: false
											}
											id="carouselFrame"
											name="carouselFrame"
											type="text"
											value={
												this.state.values.carouselFrame
											}
											onChange={this.onChange}
											onBlur={this.onBlur}
										/>
										{this.state.errors.carouselFrame &&
											this.state.touched
												.carouselFrame && (
												<div className="input-feedback">
													{
														this.state.errors
															.carouselFrame
													}
												</div>
											)}
									</div>
								)}

								{this.state.initiative === "social" && (
									<div>
										<Select
											label="10. Platform"
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
												this.state.errors.version &&
												this.state.touched.version
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
											this.state.values.languages,
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
									<Button
										variant="raised"
										type="submit"
										color="primary"
									>
										{this.state.btnText}
									</Button>
								</div>
								<div className="mui--text-center">
									<Button
										variant="raised"
										color="primary"
										onClick={this.onReset}
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
}

class Creative extends React.Component {
	constructor(props) {
		super(props);

		try {
			this.state = {
				client: props.location.state.client,
				initiative: props.location.state.initiative,
				error: false
			};
		} catch (error) {
			this.state = {
				client: "",
				initiative: "",
				error: true
			};
		}
	}

	render() {
		return !this.state.error ? (
			<CreativeForm {...this.state} />
		) : (
			<Redirect to="/" />
		);
	}
}

export default Creative;
export { Creative };
