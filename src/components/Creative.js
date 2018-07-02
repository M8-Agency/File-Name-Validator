import React from "react";
import Option from "muicss/lib/react/option";
import Select from "muicss/lib/react/select";
import clients from "../data/clients";
import initiatives from "../data/initiatives";
import Container from "muicss/lib/react/container";
import Row from "muicss/lib/react/row";
import Col from "muicss/lib/react/col";
import Input from "muicss/lib/react/input";
import Button from "muicss/lib/react/button";
import * as validations from "../libraries/validations";
import createName from "../libraries/utils";
import { getCreativePillar } from "../data/creativePillars";
import { getCreativeType } from "../data/creativeTypes";
import { platform } from "../data/platforms";

class NCreative extends React.Component {
  //   constructor() {
  //     // super(props);
  //     const _values = {
  //       campaignCode: "",
  //       concept: "",
  //       creativePillar: "",
  //       creativeVariation: "",
  //       size: "",
  //       tech: "",
  //       language: "",
  //       creativeType: "",
  //       carouselFrame: "",
  //       platform: "",
  //       date: "",
  //       person: "",
  //       version: ""
  //     };
  //     const _touched = {
  //       campaignCode: false,
  //       concept: false,
  //       creativePillar: false,
  //       creativeVariation: false,
  //       size: false,
  //       tech: false,
  //       language: false,
  //       creativeType: false,
  //       carouselFrame: false,
  //       platform: false,
  //       date: false,
  //       person: false,
  //       version: false
  //     };
  //     const _errors = {
  //       campaignCode: "",
  //       concept: "",
  //       creativePillar: "",
  //       creativeVariation: "",
  //       size: "",
  //       tech: "",
  //       language: "",
  //       creativeType: "",
  //       carouselFrame: "",
  //       platform: "",
  //       date: "",
  //       person: "",
  //       version: ""
  //     };
  //     const initialState = {
  //       client: "cpa",
  //       initiative: "display",
  //       values: _values,
  //       touched: _touched,
  //       errors: _errors,
  //       isSubmitting: false,
  //       dirty: false
  //     };
  //     this.state = initialState;
  //     this.onChange = this.onChange.bind(this);
  //     this.onReset = this.onReset.bind(this);
  //     this.onBlur = this.onBlur.bind(this);
  //     this.onSubmit = this.onSubmit.bind(this);
  //     // this.creativePillarList = creativePillarList.bind(this);
  //     // this.creativeTypeList = creativeTypeList.bind(this);
  //   }
  //   creativePillarList = getCreativePillar(this.state.client);
  //   creativeTypeList = getCreativeType(this.state.initiative);
  //   onChange(e) {
  //     const target = e.target;
  //     const name = target.name;
  //     const value = target.type === "checkbox" ? target.checked : target.value;
  //     this.setState({
  //       [name]: value,
  //       error: null
  //     });
  //   }
  //   onBlur(e) {
  //     const target = e.target;
  //     const name = target.name;
  //     const value = target.type === "checkbox" ? target.checked : target.value;
  //     // this.setState({
  //     //   [name]: value,
  //     //   error: null
  //     // });
  //   }
  //   onReset() {
  //     console.log("this.onReset");
  //   }
  //   onClick(e) {
  //     this.props.history.push("/creative/", {
  //       client: this.state.client,
  //       initiative: this.state.initiative
  //     });
  //   }
  //   onSubmit(e) {
  //     console.log("this.onReset");
  //   }
  //   render() {
  //     return (
  //       <div id="content-wrapper">
  //         <div className="mui--text-center">
  //           <div className="mui--appbar-height" />
  //           <br />
  //           {this.state.values.client !== "aaa" && (
  //             <div className="mui--text-subhead">
  //               Client code: {this.state.client.toUpperCase()}
  //             </div>
  //           )}
  //           <div className="mui--text-subhead">
  //             Initiative: {this.state.initiative.toUpperCase()}
  //           </div>
  //         </div>
  //         <form onSubmit={this.onSubmit}>
  //           <Container fluid={true}>
  //             <Row>
  //               <Col sm="6" md="6">
  //                 <div>
  //                   <Input
  //                     id="campaignCode"
  //                     name="campaignCode"
  //                     label={`Campaign code (Example: ${this.state.client.toUpperCase()}.1001)`}
  //                     floatingLabel={true}
  //                     type="text"
  //                     value={this.state.values.campaignCode}
  //                     onChange={this.onChange}
  //                     onBlur={this.onBlur}
  //                     invalid={
  //                       this.state.errors.campaignCode &&
  //                       this.state.touched.campaignCode
  //                         ? true
  //                         : false
  //                     }
  //                   />
  //                   {this.state.errors.campaignCode &&
  //                     this.state.touched.campaignCode && (
  //                       <div className="input-feedback">
  //                         {this.state.errors.campaignCode}
  //                       </div>
  //                     )}
  //                 </div>
  //                 <div>
  //                   <Input
  //                     label="Creative concept"
  //                     floatingLabel={true}
  //                     id="concept"
  //                     name="concept"
  //                     type="text"
  //                     value={this.state.values.concept}
  //                     onChange={this.onChange}
  //                     onBlur={this.onBlur}
  //                     invalid={
  //                       this.state.errors.concept && this.state.touched.concept
  //                         ? true
  //                         : false
  //                     }
  //                   />
  //                   {this.state.errors.concept &&
  //                     this.state.touched.concept && (
  //                       <div className="input-feedback">
  //                         {this.state.errors.concept}
  //                       </div>
  //                     )}
  //                 </div>
  //                 <div>
  //                   <Input
  //                     label="Language (Example: spa or spa-eng)"
  //                     floatingLabel={true}
  //                     invalid={
  //                       this.state.errors.language && this.state.touched.language
  //                         ? true
  //                         : false
  //                     }
  //                     id="language"
  //                     name="language"
  //                     type="text"
  //                     value={this.state.values.language}
  //                     onChange={this.onChange}
  //                     onBlur={this.onBlur}
  //                   />
  //                   {this.state.errors.language &&
  //                     this.state.touched.language && (
  //                       <div className="input-feedback">
  //                         {this.state.errors.language}
  //                       </div>
  //                     )}
  //                 </div>
  //                 <div>
  //                   <Input
  //                     label="Creative variation"
  //                     floatingLabel={true}
  //                     invalid={
  //                       this.state.errors.creativeVariation &&
  //                       this.state.touched.creativeVariation
  //                         ? true
  //                         : false
  //                     }
  //                     id="creativeVariation"
  //                     name="creativeVariation"
  //                     type="text"
  //                     defaultValue="sssss0"
  //                     value={this.state.values.creativeVariation}
  //                     onChange={this.onChange}
  //                     onBlur={this.onBlur}
  //                   />
  //                   {this.state.errors.creativeVariation &&
  //                     this.state.touched.creativeVariation && (
  //                       <div className="input-feedback">
  //                         {this.state.errors.creativeVariation}
  //                       </div>
  //                     )}
  //                 </div>
  //                 {this.state.values.initiative === "social" && (
  //                   <div>
  //                     <Input
  //                       label="Carousel frame (if required)"
  //                       floatingLabel={true}
  //                       invalid={
  //                         this.state.errors.carouselFrame &&
  //                         this.state.touched.carouselFrame
  //                           ? true
  //                           : false
  //                       }
  //                       id="carouselFrame"
  //                       name="carouselFrame"
  //                       type="text"
  //                       value={this.state.values.carouselFrame}
  //                       onChange={this.onChange}
  //                       onBlur={this.onBlur}
  //                     />
  //                     {this.state.errors.carouselFrame &&
  //                       this.state.touched.carouselFrame && (
  //                         <div className="input-feedback">
  //                           {this.state.errors.carouselFrame}
  //                         </div>
  //                       )}
  //                   </div>
  //                 )}
  //                 {this.state.values.initiative === "other" && (
  //                   <div>
  //                     <Input
  //                       label="Person"
  //                       floatingLabel={true}
  //                       invalid={
  //                         this.state.errors.person && this.state.touched.person
  //                           ? true
  //                           : false
  //                       }
  //                       id="person"
  //                       name="person"
  //                       type="text"
  //                       value={this.state.values.person}
  //                       onChange={this.onChange}
  //                       onBlur={this.onBlur}
  //                     />
  //                     {this.state.errors.person &&
  //                       this.state.touched.person && (
  //                         <div className="input-feedback">
  //                           {this.state.errors.person}
  //                         </div>
  //                       )}
  //                   </div>
  //                 )}
  //                 {this.state.values.initiative === "other" && (
  //                   <div>
  //                     <Input
  //                       label="Date"
  //                       floatingLabel={false}
  //                       invalid={
  //                         this.state.errors.date && this.state.touched.date
  //                           ? true
  //                           : false
  //                       }
  //                       id="date"
  //                       name="date"
  //                       type="date"
  //                       format="yyyy-MM-dd"
  //                       value={this.state.values.date}
  //                       onChange={this.onChange}
  //                       onBlur={this.onBlur}
  //                     />
  //                     {this.state.errors.date &&
  //                       this.state.touched.date && (
  //                         <div className="input-feedback">
  //                           {this.state.errors.date}
  //                         </div>
  //                       )}
  //                   </div>
  //                 )}
  //               </Col>
  //               <Col sm="6" md="6">
  //                 {this.state.values.client === "other" ? (
  //                   <div>
  //                     <Input
  //                       floatingLabel={true}
  //                       invalid={
  //                         this.state.errors.creativePillar &&
  //                         this.state.touched.creativePillar
  //                           ? true
  //                           : false
  //                       }
  //                       name="creativePillar"
  //                       id="creativePillar"
  //                       label="Creative pillar"
  //                       value={this.state.values.creativePillar}
  //                       onChange={this.onChange}
  //                       onBlur={this.onBlur}
  //                     />
  //                     {this.state.errors.creativePillar &&
  //                       this.state.touched.creativePillar && (
  //                         <div className="input-feedback">
  //                           {this.state.errors.creativePillar}
  //                         </div>
  //                       )}
  //                   </div>
  //                 ) : (
  //                   <div>
  //                     <Select
  //                       floatingLabel={true}
  //                       invalid={
  //                         this.state.errors.creativePillar &&
  //                         this.state.touched.creativePillar
  //                           ? true
  //                           : false
  //                       }
  //                       name="creativePillar"
  //                       id="creativePillar"
  //                       label="Creative pillar"
  //                       value={this.state.values.creativePillar}
  //                       onChange={this.onChange}
  //                       onBlur={this.onBlur}
  //                     >
  //                       {this.creativePillarList.map(function(option, i) {
  //                         return (
  //                           <Option
  //                             key={i}
  //                             value={option.value}
  //                             label={option.label}
  //                           />
  //                         );
  //                       })}
  //                     </Select>
  //                     {this.state.errors.creativePillar &&
  //                       this.state.touched.creativePillar && (
  //                         <div className="input-feedback">
  //                           {this.state.errors.creativePillar}
  //                         </div>
  //                       )}
  //                   </div>
  //                 )}
  //                 <div>
  //                   <Select
  //                     label="Creative type"
  //                     floatingLabel={true}
  //                     invalid={
  //                       this.state.errors.creativeType &&
  //                       this.state.touched.creativeType
  //                         ? true
  //                         : false
  //                     }
  //                     id="creativeType"
  //                     name="creativeType"
  //                     value={this.state.values.creativeType}
  //                     onChange={this.onChange}
  //                     onBlur={this.onBlur}
  //                   >
  //                     {this.creativeTypeList.map(function(option, i) {
  //                       return (
  //                         <Option
  //                           key={i}
  //                           value={option.value}
  //                           label={option.label}
  //                         />
  //                       );
  //                     })}
  //                   </Select>
  //                   {this.state.errors.creativeType &&
  //                     this.state.touched.creativeType && (
  //                       <div className="input-feedback">
  //                         {this.state.errors.creativeType}
  //                       </div>
  //                     )}
  //                 </div>
  //                 <div>
  //                   <Input
  //                     label="Size/lenght (Example: 300x200 or 5sec)"
  //                     floatingLabel={true}
  //                     invalid={
  //                       this.state.errors.size && this.state.touched.size
  //                         ? true
  //                         : false
  //                     }
  //                     id="size"
  //                     name="size"
  //                     type="text"
  //                     value={this.state.values.size}
  //                     onChange={this.onChange}
  //                     onBlur={this.onBlur}
  //                   />
  //                   {this.state.errors.size &&
  //                     this.state.touched.size && (
  //                       <div className="input-feedback">
  //                         {this.state.errors.size}
  //                       </div>
  //                     )}
  //                 </div>
  //                 <div>
  //                   <Input
  //                     label="Tech (optional)"
  //                     floatingLabel={true}
  //                     invalid={
  //                       this.state.errors.tech && this.state.touched.tech
  //                         ? true
  //                         : false
  //                     }
  //                     id="tech"
  //                     name="tech"
  //                     type="text"
  //                     value={this.state.values.tech}
  //                     onChange={this.onChange}
  //                     onBlur={this.onBlur}
  //                   />
  //                   {this.state.errors.tech &&
  //                     this.state.touched.tech && (
  //                       <div className="input-feedback">
  //                         {this.state.errors.tech}
  //                       </div>
  //                     )}
  //                 </div>
  //                 {this.state.values.initiative === "social" && (
  //                   <div>
  //                     <Select
  //                       label="Platform"
  //                       floatingLabel={true}
  //                       invalid={
  //                         this.state.errors.platform &&
  //                         this.state.touched.platform
  //                           ? true
  //                           : false
  //                       }
  //                       id="platform"
  //                       name="platform"
  //                       value={this.state.values.platform}
  //                       onChange={this.onChange}
  //                       onBlur={this.onBlur}
  //                       keyboard
  //                       clearable
  //                       disableOpenOnEnter
  //                     >
  //                       {platform.map(function(option, i) {
  //                         return (
  //                           <Option
  //                             key={i}
  //                             value={option.value}
  //                             label={option.label}
  //                           />
  //                         );
  //                       })}
  //                     </Select>
  //                     {this.state.errors.platform &&
  //                       this.state.touched.platform && (
  //                         <div className="input-feedback">
  //                           {this.state.errors.platform}
  //                         </div>
  //                       )}
  //                   </div>
  //                 )}
  //                 {this.state.values.initiative === "other" && (
  //                   <div>
  //                     <Input
  //                       label="Version"
  //                       floatingLabel={true}
  //                       invalid={
  //                         this.state.errors.version && this.state.touched.version
  //                           ? true
  //                           : false
  //                       }
  //                       id="version"
  //                       name="version"
  //                       type="text"
  //                       value={this.state.values.version}
  //                       onChange={this.onChange}
  //                       onBlur={this.onBlur}
  //                     />
  //                     {this.state.errors.version &&
  //                       this.state.touched.version && (
  //                         <div className="input-feedback">
  //                           {this.state.errors.version}
  //                         </div>
  //                       )}
  //                   </div>
  //                 )}
  //               </Col>
  //             </Row>
  //             <Row>
  //               <Col md="8" md-offset="2">
  //                 <div>
  //                   <Input
  //                     htmlFor="createName"
  //                     label="Creative name:"
  //                     type="text"
  //                     id="m8-create-name"
  //                     value={createName(
  //                       this.state.values.campaignCode,
  //                       this.state.values.concept,
  //                       this.state.values.creativePillar,
  //                       this.state.values.creativeVariation,
  //                       this.state.values.size,
  //                       this.state.values.tech,
  //                       this.state.values.language,
  //                       this.state.values.creativeType,
  //                       this.state.values.carouselFrame,
  //                       this.state.values.platform,
  //                       this.state.values.date,
  //                       this.state.values.person,
  //                       this.state.values.version,
  //                       this.state.values.initiative
  //                     )}
  //                   />
  //                 </div>
  //               </Col>
  //             </Row>
  //             <Row>
  //               <Col md="6" md-offset="3">
  //                 <div className="mui--text-center">
  //                   <Button variant="raised" type="submit" color="primary">
  //                     {this.state.values.btCopiedText}
  //                   </Button>
  //                 </div>
  //                 <div className="mui--text-center">
  //                   <Button
  //                     variant="raised"
  //                     color="primary"
  //                     onClick={this.onReset}
  //                     disabled={!this.state.dirty || this.state.isSubmitting}
  //                   >
  //                     Reset
  //                   </Button>
  //                 </div>
  //               </Col>
  //             </Row>
  //           </Container>
  //         </form>
  //       </div>
  //     );
  //   }
}

export default NCreative;
