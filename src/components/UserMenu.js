import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UserMenu extends Component {
    render() {
        let username = localStorage.getItem("username");
        return (
            <div className="menu_modal">
                <div className="menu_modal_content">
                    <div>
                        <button 
                            className="menu_modal_close" 
                            type="button"
                            onClick={this.props.onClose}
                        >
                            &times;
                        </button>
                    </div>
                    <div className="menu_modal_links">
                        <Link to={`/my_account/${username}/availability`}style={{ textDecoration: 'none' }}>
                            <button 
                                className="menu_modal_employee_redirect"
                                type="button" 
                                onClick={this.props.onAdd}
                            >
                                <i className="material-icons">event_available</i> Availability 
                            </button>
                        </Link>
                        <Link to={`/my_account/${username}/schedule`} style={{ textDecoration: 'none' }}>
                        <button 
                            className="menu_modal_employee_redirect"
                            type="button"
                        >
                            <i className="material-icons">schedule</i> Schedule
                        </button>
                        </Link>
                        <Link to={`/my_account/${username}/contacts`} style={{ textDecoration: 'none' }}>
                            <button 
                                className="menu_modal_employee_redirect"
                                type="button"
                            >
                                <i className="material-icons">people</i> Contacts
                            </button>
                        </Link>
                        <Link to={`/my_account/${username}`} style={{ textDecoration: 'none' }}>
                            <button 
                                className="menu_modal_employee_redirect"
                                type="button" 
                                onClick={this.props.onAdd}
                            >
                                <i className="material-icons">account_circle</i> Profile  
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
      }
    }