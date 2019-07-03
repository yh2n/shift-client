import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local_storage';
import moment from 'moment';
import './AccountNav.css';

export class AccountNav extends Component{
    logOut() {
        console.log("logging out")
        this.props.dispatch(clearAuth());
        clearAuthToken();
        localStorage.removeItem("currentUser")
    }

    render() {
        if (!this.props.loggedIn) {
            return <Redirect to='/login' />;
        }
        if(this.props.newNotification === false) {
            var Icon = (
                <i 
                className={ this.props.className }
            >
                add_alert
            </i>
            )
        }
        else {
            var Icon = (
            <Link to={ this.props.linkTo } >
                <i 
                className={ this.props.className }
                onClick={ this.props.markAsRead }
                >
                add_alert
                </i>
            </Link>
            )
        }
        let currentUser = localStorage.getItem('currentUser')
        return(
            <div className="account_nav">
                <div className="menu_icon" onClick={ this.props.onClick }>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                { Icon }
                <p className="nav_date">{moment().format("dddd, MMMM Do YYYY")}</p>
                <p className="nav_user_name">{ currentUser }</p>
                <button 
                    className="nav_log-out_button"
                    onClick={() => this.logOut()}
                >
                    Log out
                </button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(AccountNav);