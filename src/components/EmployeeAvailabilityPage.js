import React, { Component } from 'react';
import AccountNav from './AccountNav';
import AdminMenuModal from './AdminMenuModal';
import ContactAvailability from './ContactAvailability';


export default class EmployeeAvailabilityPage extends Component {
    constructor(props) {
		super(props);

		this.state = { 
            isOpen : false,
            availability_alert: false,
			schedule_alert: false,
			new_notification: false 
        }
    }	
    
    toggleModal = () => {
		this.setState({ isOpen: !this.state.isOpen });
    }
    
    render() {
        return (
            <div className="contact_availability_page">
                <AccountNav 
					onClick={() => this.toggleModal()}
					className={this.state.new_notification === false ? "material-icons no_notification" : "material-icons new_notification"}
					markAsRead={this.markAsRead}
					username={localStorage.getItem('username')}
				/>
				<AdminMenuModal
					show={this.state.isOpen}
                    onClose={this.toggleModal}
				/>
                <ContactAvailability 
                    {...this.props}
                    linkTo={`/admin/employee_database`} 
                />
            </div>
        )
    }
}