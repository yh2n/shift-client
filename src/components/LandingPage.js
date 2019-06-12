import React, { Component } from 'react';
import LandingPageIcons from './LandingPageIcons';
import Background1 from '../images/blurred-background-calendar-cellphone-1893424.jpg';

import './LandingPage.css';


export default class LandingPage extends Component {
    state = {  }
    render() {
        return (
            <div>
                <div className="header">shift</div>
            <div className="landing_page">
                <div className="background_images">
                    <img src={Background1} alt="" width="100%" height="100%"/>
                </div>
                <div>
                    Welcome to Shift!!
                </div>
                <div className="instructions">
                </div>
                <LandingPageIcons />
                <p>
                    Check the demo!
                </p>  
            </div>
            </div>
        );
    }
}