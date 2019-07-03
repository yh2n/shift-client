import React from 'react';

const CellPhone = props => {
    return (
        <div className="cell-phone">
            <div className="cell-phone_screen">
                <p style={{fontSize: '9px'}}>VeriMo Wi-Fi <i className="fas fa-wifi" ></i></p>
                <div 
                    className={!props.requestAlert ? "cellphone_alert request_alert alert_hidden" : "cellphone_alert request_alert alert_visible"}
                >
                    New schedule request!
                </div>
            </div>
            <div className="cell-phone_bottom">
                <div className="cell-phone_home_button"></div>
            </div>
        </div>
    )
}

export default CellPhone;