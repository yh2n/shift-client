import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LandingPageIcons from './LandingPageIcons';
import Background1 from '../images/blurred-background-calendar-cellphone-1893424.jpg';

import './LandingPage.css';


export default class LandingPage extends Component {
    state = {  }
    render() {
        return (
            <div className="landing_page">
                <div className="header">
                    <p>shift</p>
                </div>
                <div className="background_images">
                    <img src={ Background1 } alt="" width="100%" height="100%"/>
                </div>
                <p className="landing_page_redirect-mobile">
                    shift
                </p>
                <LandingPageIcons />
                <p className="landing_page_redirect-desktop">
                    <Link to='/instructions' style={{'textDecoration': 'none'}}>
                        Check the demo!
                    </Link>
                </p>  
            </div>
        );
    }
}