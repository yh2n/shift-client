import React, { Component } from 'react';
import NavBar from './NavBar';
import HomePage from './HomePage';

import './LandingPage.css';
import { Link } from 'react-router-dom';


export default class LandingPage extends Component {
    render() {
        return (
            <>
                <NavBar 
                    text="Sign up"
                    component="RegistrationPage"
                    to='/registration'
                />
                <div className="background">
                    <div className="box">
                        <Link to='/admin/login'><button className="user_redirect admin">Login as admin</button></Link>
                        <Link to='/login'><button className="user_redirect employee">Login as employee</button></Link>
                    </div>
                </div>
            </>
        );
    }
}