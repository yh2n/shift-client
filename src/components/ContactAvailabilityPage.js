import React, { Component } from 'react';
import AccountNav from './AccountNav';
import UserMenuModal from './UserMenuModal';
import ContactAvailability from './ContactAvailability';

export default class ContactAvailabilityPage extends Component {
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
		this.setState({ isOpen: !this.state.isOpen })
    }
    
    render() {
        let username = localStorage.getItem('username')
        return (
            <div className="contact_availability_page">
                <AccountNav 
					onClick={() => this.toggleModal()}
					className={this.state.new_notification === false ? "material-icons no_notification" : "material-icons new_notification"}
					markAsRead={this.markAsRead}
                    username={localStorage.getItem('username')}
                    linkTo={`/my_account/${username}/schedule`}
				/>
				<UserMenuModal
					show={this.state.isOpen}
                    onClose={this.toggleModal}
				/>
                <ContactAvailability 
                    {...this.props} 
                    linkTo={`/my_account/${username}/contacts`}
                />
            </div>
        )
    }
}