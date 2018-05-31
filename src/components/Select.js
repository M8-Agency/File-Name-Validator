import React from "react";
import ReactDOM from "react-dom";
import Option from "muicss/lib/react/option";
import Select from "muicss/lib/react/select";

function RSelect(props) {
  const {
    name, 
    value, 
    onChange
  }
  return (
    <Select name={props.name} value={props.value} onChange={props.onChange()}>
      {props.list.map(function(option, i) {
        return <Option key={i} value={option.value} label={option.label} />;
      })}
    </Select>
  );
}
