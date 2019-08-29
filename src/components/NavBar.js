import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default class NavBar extends Component {
  render() {
    return (
      <div className="nav">
        <p className="app_name">shift</p>
        <Link to={this.props.to} component={this.props.component}>
          <button className="nav_redirect_button">{this.props.text}</button>
        </Link>
      </div>
    );
  }
}
