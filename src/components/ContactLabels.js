import React, { Component } from 'react';

export default class ContactLabels extends Component {
    render() {
        return (
            <>
                <div className="contact_list">Name</div>
                <div className="contact_list">Phone Number</div>
                <div className="contact_list">Email Address</div>
                <div className="contact_list">Position</div>
                <div className="contact_list">Availability</div>
            </>
        );
    }
}