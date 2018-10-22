import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local_storage';
import moment from 'moment';
import './MenuIcon.css';

export class MenuIcon extends Component{
    logOut() {
        console.log("logging out")
        this.props.dispatch(clearAuth());
        clearAuthToken();
    }
    render() {
        // if (this.props.loggedOut) {
        //     return <Redirect to='/login' />;
        // }
        if (this.props.loggedOut) {
            console.log(currentUser)
        }
        let currentUser = localStorage.getItem('currentUser')
        return(
            <div className="account_nav">
                <div className="menu_icon" onClick={this.props.onClick}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <p className="nav_date">{moment().format("dddd, MMMM Do YYYY")}</p>
                <p className="nav_user_name">{currentUser}</p>
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
    loggedOut: state.auth.currentUser === null
});

export default connect(mapStateToProps)(MenuIcon);