import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LandingPageNav from './LandingPageNav';
import LandingPageIcons from './LandingPageIcons';
import Background1 from '../images/blurred-background-calendar-cellphone-1893424.jpg';

import './LandingPage.css';


export default class LandingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            request_alert: false,
            schedule_alert: false
        }
    }

    componentDidMount() {
        this.handleRequestAlert()
    }

    handleRequestAlert = () => {
        setInterval(() => {
            this.setState({
                request_alert: !this.state.request_alert
            })
        }, 3000);
    }
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
                    <div className="app_presentation_container">
                        <div className="app_presentation left_icons" style={{color: 'purple'}}>
                            <i className="far fa-bell"></i>
                        </div>
                        <div className="app_presentation center_text">
                            <p>ADDING REALTIME EXPERIENCE</p>
                            <p>TO STAFF MANAGEMENT</p>
                            <p>AND SCHEDULING</p>
                        </div>
                        <div className="app_presentation right_icons" style={{color: 'purple'}}>
                            <i className="fas fa-users"></i>
                            <i className="far fa-calendar-check"></i>
                        </div>
                    </div>
                    <div className="bottom_border"></div>
                    <div className="landing_page_animations">
                        <div className="animations_container">
                            <div className="laptop_container">
                                <div className="laptop">
                                    <div className="laptop_screen"></div>
                                    <div className="laptop_keypboard">
                                        <div className="laptop_keyboard_button"></div>
                                    </div>
                                </div>
                                <div className="laptop_instructions">
                                    <i className="far fa-calendar-alt" style={{'fontSize': '40px', color: '#5D87BF'}}></i>
                                    <div className="animations_text icon_text">Create new schedule in minutes</div>
                                    <div className="animations_text">Easily recall previous templates</div>
                                    <div className="animations_text">Have access to everyone's updated availability and plan accordingly</div>
                                </div>
                            </div>
                        </div>
                        <div className="dotted_bottom_border"></div>
                        <div className="animations_container cell">
                            <div className="cell-phone_container">
                                <div className="cell-phone">
                                    <div className="cell-phone_screen">
                                        <p style={{fontSize: '9px'}}>VeriMo Wi-Fi <i className="fas fa-wifi" ></i></p>
                                        <div className={!this.state.request_alert ? "cellphone_alert request_alert alert_hidden" : "cellphone_alert request_alert"  }>New schedule request!</div>
                                    </div>
                                    <div className="cell-phone_bottom">
                                        <div className="cell-phone_home_button"></div>
                                    </div>
                                </div>
                                <div className="cell-phone_instructions">
                                    <i className="fas fa-bell landing_page_bell" style={{'fontSize': '40px', color: '#5D87BF'}}></i>
                                    <div className="animations_text icon_text">Get notified</div>
                                    <div className="animations_text">Receive schedule updates and requests in real-time</div>
                                    <div className="animations_text">Pick up open shifts</div>
                                    <div className="animations_text">Keep track of last minutes changes</div>
                                </div>
                            </div>
                        </div>
                        <div className="dotted_bottom_border"></div>
                        <div className="animations_container">
                            <div className="dialogue_container">
                                <div className="dialogue_icon1">
                                    <div className="dialogue_bubble_left">Hey man, can you cover me tonite?</div>
                                    <div className="dialogue_bubble_right">Sorry bro, already on the schedule</div>
                                    <div className="dialogue_bubble_left"><i className="far fa-sad-tear" style={{fontSize: '20px'}}></i></div>
                                    <div className="dialogue_bubble_left">Ty</div>
                                </div>
                                {/* <div className="dialogue_icon2">
                                    <i className="fas fa-angry" style={{color: 'red'}}></i>
                                    <i className="far fa-frown" style={{color: 'orangeRed'}}></i>
                                    <i className="fas fa-grimace" style={{color: 'blue'}}></i>
                                    <i className="far fa-comment"></i>
                                    <i className="fas fa-phone-alt"></i>
                                    <i className="fas fa-quote-left"></i>
                                    <i className="fas fa-envelope-open"></i>
                                    <i className="fas fa-bell"></i>
                                    <i className="fas fa-voicemail"></i>
                                    <i className="far fa-flushed"></i>
                                    <i className="fas fa-mobile-alt"></i>
                                    <i className="far fa-comments"></i>
                                    <i className="fas fa-at"></i>
                                </div> */}
                                <div className="laptop_instructions">
                                    <div className="last_instructions">
                                        <i className="fas fa-umbrella-beach" style={{'fontSize': '40px', color: '#5D87BF'}}></i>
                                        <i className="far fa-laugh-beam" style={{'fontSize': '40px', color: 'rgba(216, 73, 73, 85)'}}></i>
                                        <i className="fas fa-sun landing_page_sun" style={{'fontSize': '40px', color: '#26A56A'}}></i>
                                    </div>
                                    <div className="animations_text icon_text">Ease the process...</div>
                                    <div className="animations_text">...of scheduling, swapping shifts, communicating with every staff member</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="intro_container_redirect-desktop">
                    <div className="demo_login_redirect"> 
                        <Link to='/instructions' style={{'textDecoration': 'none',  color: '#26A56A'}}>
                            Demo | </Link><Link to='/login' style={{'textDecoration': 'none',  color: '#26A56A'}}>Login</Link>
                    </div>
                    {/* <div className="portfolio_gh_redirect">
                        <div><span ><Link to='https://yh2n.github.io/portfolio/'>Yohann Potico</Link></span>&#9400;</div>
                        <div><i class="fab fa-github"></i></div>
                    </div> */}
                </div>  
            </div>
        );
    }
}