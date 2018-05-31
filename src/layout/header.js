import React from "react";
function Header() {
  return (
    <header id="header">
      <div class="mui-appbar mui--appbar-line-height">
        <div class="mui-container-fluid">
          <a class="sidedrawer-toggle mui--visible-xs-inline-block mui--visible-sm-inline-block js-show-sidedrawer">
            ☰
          </a>
          <a class="sidedrawer-toggle mui--hidden-xs mui--hidden-sm js-hide-sidedrawer">
            ☰
          </a>
          <span class="mui--text-title mui--visible-xs-inline-block">M8</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
