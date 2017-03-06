import React, {Component} from 'react';
/*how the routes are defined, using inde link show the main link selected only when it is required*/
var {Link, IndexLink} = require('react-router');

import * as Redux from 'react-redux';
import router from 'app/router/';

class Nav extends Component {
  myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive navbar-left";
    } else {
        x.className = "topnav";
    }
  }
  render() {
    return (
      <div className="container-fluid thenav">
        <nav className="top-bar" role="navigation">
      <ul className="topnav" id="myTopnav">
        <li className="icon navbar-left">
          <a href="javascript:void(0);" onClick={this.myFunction}>☰</a>
        </li>
        <li className="navbar-right topright">
          <Link to="/about" className="eachLink" activeClassName="active">About</Link>
        </li>
        <li className="navbar-right topright">
          <Link to="/settings" className="eachLink" activeClassName="active">Settings</Link>
        </li>
        <li className="navbar-right topright">
          <Link to="/documentation" className="eachLink" activeClassName="active">Docs</Link>
        </li>
        <li className="navbar-right topright">
          <Link to="/blog" className="eachLink" activeClassName="active">Blog</Link>
        </li>
        <li className="navbar-right topright">
          <Link to="/main" className="eachLink" activeClassName="active">Home</Link>
        </li>
        <li className="titlename navbar-left">
          Football-Data<span>.org</span>
        </li>

      </ul>
    </nav>
    </div>
    );
  }
};

export default Nav;
