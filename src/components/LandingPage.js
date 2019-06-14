import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LandingPageNav from './LandingPageNav';
import LandingPageIcons from './LandingPageIcons';
import Background1 from '../images/blurred-background-calendar-cellphone-1893424.jpg';

import './LandingPage.css';


export default class LandingPage extends Component {
    state = {  }
    render() {
        return (
            <div className="landing_page">
                <div className="intro_container">
                    <LandingPageNav />   
                    <div className="background_images">
                        <img src={ Background1 } alt="" width="100%" height="100%"/>
                    </div>
                    <p className="intro_container_redirect-mobile">
                        shift
                    </p>
                    <LandingPageIcons />
                </div>
                <p className="intro_container_redirect-desktop">
                    <Link to='/instructions' style={{'textDecoration': 'none'}}>
                        Demo | </Link><Link to='/login' style={{'textDecoration': 'none'}}>Login</Link>
                    
                </p>  
            </div>
        );
    }
}