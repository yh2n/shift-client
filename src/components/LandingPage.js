import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LandingPageNav from './LandingPageNav';
import Laptop from './Laptop';
import LaptopInstructions from './LaptopInstructions';
import CellPhone from './CellPhone';
import AnimationsInstructions from './AnimationsInstructions';


import './LandingPage.css';


export default class LandingPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            request_alert: false,
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
                                <Laptop />
                                <LaptopInstructions />
                            </div>
                        </div>
                        <div className="dotted_bottom_border"></div>
                        <div className="animations_container cell">
                            <div className="cell-phone_container">
                                <CellPhone requestAlert={this.state.request_alert}/>
                                {/* <div className="cell-phone_instructions">
                                    <i className="fas fa-bell landing_page_bell" style={{'fontSize': '40px', color: '#5D87BF'}}></i>
                                    <div className="animations_text icon_text">Get notified</div>
                                    <div className="animations_text">Receive schedule updates and requests in real-time</div>
                                    <div className="animations_text">Pick up open shifts</div>
                                    <div className="animations_text">Keep track of last minutes changes</div>
                                </div> */}
                                <AnimationsInstructions 
                                    classOne="animations_text icon_text"
                                    textOne="Get notified"
                                />
                            </div>
                        </div>
                        <div className="dotted_bottom_border"></div>
                        <div className="animations_container">
                            <div className="dialogue_container">
                                <div className="dialogue_icon1">
                                    <div className="dialogue_bubble_left">Hey man, can you cover me tonite?</div>
                                    <div className="dialogue_bubble_right">Sorry bro, already on the schedule :(</div>
                                    <div className="dialogue_bubble_left"><i className="far fa-sad-tear" style={{fontSize: '20px'}}></i></div>
                                    <div className="dialogue_bubble_left">Ty</div>
                                </div>
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
                        <div><a href='https://github.com/' target='_blank' rel="noopener noreferrer"><i className="fab fa-github" style={{'textDecoration': 'none',  color: '#26A56A', fontSize: '18px'}}></i></a></div>
                        <div className="credits" style={{fontSize: '14px'}}>© 2019 <a href='https://yh2n.github.io/portfolio/' target='_blank' rel="noopener noreferrer"style={{textDecoration: 'none', color: '#26A56A'}}>Yohann Potico </a></div>
                </div>  
            </div>
        );
    }
}