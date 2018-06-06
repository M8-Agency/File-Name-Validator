import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="mui-appbar mui--z1">
        <div className="mui-container">
          <table>
            <tbody>
              <tr className="mui--appbar-height">
                <td className="mui--text-title">M8 Name Validator</td>
                <td className="mui--text-right">
                  <ul className="mui-list--inline mui--text-body2">
                    <li>
                      <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Help</Link>
                    </li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </header>
    );
  }
}

export default Header;
