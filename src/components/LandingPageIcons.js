import React from 'react';
import './LandingPageIcons.css';


const LandingPageIcons = () => {
    return (
        <div className="landing_pg_icons">
            <div>
                <img src="https://img.icons8.com/ios/50/000000/calendar-16.png" alt="" width="50px"/>
                <p>Schedule easily</p>
            </div>
            <div>
                <img src="https://img.icons8.com/wired/64/000000/monitor.png" alt="" width="64px"/>
                <p>Monitor activity and keep track of changes</p>
            </div>
            <div>
                <img src="https://img.icons8.com/wired/64/000000/sms.png" alt="" width="64px"/>
                <p>Get notified</p>
            </div>
        </div>
    )
}

export default LandingPageIcons