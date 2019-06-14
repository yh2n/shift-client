import React from 'react';
import  { Link } from 'react-router-dom';
 
const LandingPageNav = () => {
    return (
        <div className="header">
            <p className="landing_page_app_name">shift</p>
            <Link to='/instructions' style={{'textDecoration': 'none'}}>
                <p className="landing_page_header_redirect">How It Works</p>
            </Link>
            <Link to='/login' style={{'textDecoration': 'none'}}>
                <p className="landing_page_header_redirect">Login</p>
            </Link>
        </div>
    )
}

export default LandingPageNav