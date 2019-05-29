import React, { Component } from 'react';
import AccountNav from './AccountNav';
import UserMenuModal from './UserMenuModal';
import ContactAvailability from './ContactAvailability';

import { Link } from 'react-router-dom';

export default class ContactAvailabilityPage extends Component {
    constructor(props) {
		super(props);

		this.state = {
			isOpen : false,
		}
    }	
    
    toggleModal = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
    }
    
    render() {
        let username = localStorage.getItem("username");
        return (
            <div className="contact_availability_page">
                <AccountNav onClick={this.toggleModal}/>
				<UserMenuModal
					show={this.state.isOpen}
                    onClose={this.toggleModal}
				/>
                <ContactAvailability 
                {...this.props}
                />
                <Link to={`/my_account/${username}/contacts`} style={{ textDecoration: 'none' }}>
                    <button>Back to Contacts</button>
                </Link>
            </div>
        )
    }
}