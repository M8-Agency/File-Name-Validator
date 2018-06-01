import React, { Component } from "react";
import Appbar from "muicss/lib/react/appbar";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    let s1 = { verticalAlign: "middle" };
    let s2 = { textAlign: "right" };

    return (
      <Appbar>
        <table width="100%">
          <tbody>
            <tr style={s1}>
              <td className="mui--appbar-height">
                <Link to={"/"}>M8 Name Validator</Link>
              </td>
              <td className="mui--appbar-height" style={s2}>
                <Link to={"/"}>Help</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </Appbar>
    );
  }
}

export default Header;
