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
                    {/* <div className="background_images">
                        <img src={ Background1 } alt="" width="100%" height="100%"/>
                    </div>
                    <p className="intro_container_redirect-mobile">
                        shift
                    </p>
                    <LandingPageIcons /> */}
                    <div className="landing_page_animations">
                        <div className="animations_container">
                            <div className="laptop_container">
                                <div className="laptop">
                                    <div className="laptop_screen"></div>
                                    <div className="laptop_keypboard"></div>
                                </div>
                                <div className="laptop_instructions">
                                    <i className="far fa-calendar-alt"></i>
                                    <div className="animations_text">Create new schedule in minutes</div>
                                </div>
                            </div>
                        </div>
                        <div className="animations_container">
                            <div className="cell-phone_container">
                                <div className="cell-phone_instructions">
                                    <i className="far fa-calendar-alt"></i>
                                    <div className="animations_text">Get notified</div>
                                    <div className="animations_text">Receive schedule updates and requests in real-time</div>
                                </div>
                                <div className="cell-phone">
                                    <div className="cell-phone_screen"></div>
                                    <div className="cell-phone_bottom">
                                        <div className="cell-phone_home_button"></div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="animations_container">
                            <div className="laptop_container">
                                <div className="laptop">
                                    <div className="dialogue_bubble_left">Hey man, can you cover me tonite?</div>
                                    <div className="dialogue_bubble_right">Sorry bro, already on the schedule</div>
                                    <div className="dialogue_bubble_right">:(</div>
                                    <div className="dialogue_bubble_right">Ty</div>
                                </div>
                                <div className="laptop_instructions">
                                    <i className="far fa-calendar-alt"></i>
                                    <div className="animations_text">Ease the process...</div>
                                    <div className="animations_text">...scheduling, swapping shifts, communicating with the staff</div>
                                    <div className="animations_text">How much time is wasted looking for that server who's off but willing to pick a shift?</div>
                                    <div className="animations_text">How often do shifts get trade at the last minute with multiple unnecessary phone calls, 
                                        several unread text messages and  lots of headache?</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <p className="intro_container_redirect-desktop">
                    <Link to='/instructions' style={{'textDecoration': 'none'}}>
                        Demo | </Link><Link to='/login' style={{'textDecoration': 'none'}}>Login</Link>
                    
                </p>   */}
            </div>
        );
    }
}