import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header class="mui-appbar mui--z1">
        <div class="mui-container">
          <table>
            <tr class="mui--appbar-height">
              <td class="mui--text-title">M8 Name Validator</td>
              <td class="mui--text-right">
                <ul class="mui-list--inline mui--text-body2">
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>
                  <li>
                    <Link to={"/"}>Help</Link>
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
      </header>
    );
  }
}

export default Header;
