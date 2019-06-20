import React, { Component } from 'react';
import Pusher from 'pusher-js';
import EmployeeInfoForm from './EmployeeInfoForm';
import AccountNav from './AccountNav';
import Notifications from './Notifications';
import UserMenuModal from './UserMenuModal';
import './UserAccount.css';

export default class UserAccount extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen : false,
			availability_alert: false,
			new_notification: false
		}
	}	

	componentDidMount() {
		this.pusher = new Pusher('dd4cfaae3504bbdaa2b2', {
            cluster: 'us2',
            forceTLS: true
        });

        Pusher.logToConsole = true;
        this.channel = this.pusher.subscribe('update');
        this.channel.bind('availability_update', () => {
            this.handleAvailabilityAlert()
            console.log('change of availability')
        })
	}
	toggleModal = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	handleAvailabilityAlert = () => {
        this.setState({
            availability_alert: true,
            new_notification: true
        })
        setTimeout(() => {
            this.setState({
                availability_alert: false
            })
            
        }, 7000);
    }

	markAsRead = () => {
        this.setState({new_notification: false})
    }

	render() {
		return (
			<div className="user_page">
				<AccountNav 
					onClick={this.toggleModal}
					className={this.state.new_notification === false ? "material-icons no_notification" : "material-icons new_notification"}
					markAsRead={this.markAsRead}
					username={localStorage.getItem('username')}
				/>
				<UserMenuModal
					show={this.state.isOpen}
					onClose={this.toggleModal}
				/> 
					<Notifications 
						className={this.state.availability_alert ? "user_account-availability_alert" : "user_account-availability_alert notifications-hidden"}
						text="New schedule request!"
					/>
					<EmployeeInfoForm />
				</div>
		)
	}
}