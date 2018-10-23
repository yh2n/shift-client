import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AdminMenu extends Component {
    render() {
        return(
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
                    <Link to='/admin'style={{ textDecoration: 'none' }}>
                        <button 
                            className="menu_modal_employee_redirect"
                            type="button" 
                            onClick={this.props.onAdd}
                        >
                            <i class="material-icons">schedule</i> Schedule  
                        </button>
                    </Link>
                    <Link to='/admin/employee_database' style={{ textDecoration: 'none' }}>
                        <button 
                            className="menu_modal_employee_redirect"
                            type="button" 
                            onClick={this.props.onAdd}
                        >
                            <i class="material-icons">group</i> Staff 
                        </button>
                    </Link>
                    <Link to='/admin/register_employee' style={{ textDecoration: 'none' }}>
                    <button 
                        className="menu_modal_employee_redirect"
                        type="button"
                    >
                        <i class="material-icons">group_add</i> New hire
                    </button>
                    </Link>
                </div>
            </div>
        </div>
        )
    }
}