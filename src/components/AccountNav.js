import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { clearAuth } from "../actions/auth";
import { clearAuthToken } from "../local_storage";
import { currentUser } from "../utils/currentUser";
import moment from "moment";
import "./AccountNav.css";

export class AccountNav extends Component {
  logOut() {
    console.log("logged out");
    this.props.dispatch(clearAuth());
    clearAuthToken();
    localStorage.removeItem("currentUser");
  }

  render() {
    console.log(this.props.device);
    if (!this.props.loggedIn) {
      return <Redirect to="/login" />;
    }
    if (this.props.newNotification === false) {
      var Icon = <i className={this.props.className}>add_alert</i>;
    } else {
      Icon = (
        <Link to={this.props.linkTo}>
          <i className={this.props.className} onClick={this.props.markAsRead}>
            add_alert
          </i>
        </Link>
      );
    }
    return (
      <div className="account_nav">
        <div className="menu_icon" onClick={this.props.onClick}>
          <div />
          <div />
          <div />
        </div>
        {Icon}
        <p className="nav_date">
          {this.props.device === "desktop"
            ? `${moment().format("dddd, MMMM Do YYYY")}`
            : `${moment().format("dd, M/D/YY")}`}
        </p>
        <p className="nav_user_name">{currentUser}</p>
        <button className="nav_log-out_button" onClick={() => this.logOut()}>
          {this.props.device === "desktop" ? (
            "logout"
          ) : (
            <i className="fas fa-power-off" />
          )}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.auth.currentUser !== null,
});

export default connect(mapStateToProps)(AccountNav);
