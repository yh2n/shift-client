import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pusher from 'pusher-js';
import ContactLabels from './ContactLabels';
import Notifications from './Notifications';
import ContactRow from './ContactRow';
import ContactRowMobile from './ContactRowMobile';

import AccountNav from './AccountNav';
import UserMenuModal from './UserMenuModal';

import { fetchEmployees } from '../actions/fetch_employees';
import './Contacts.css'


export class Contacts extends Component {
    constructor(props) {
		super(props);

		this.state = {
			isOpen : false,
			availability_alert: false,
			schedule_alert: false,
			new_notification: false
		}
	}	
	
	componentDidMount() {
		this.props.dispatch(fetchEmployees());
		document.body.classList.add("background-color");

		this.pusher = new Pusher('dd4cfaae3504bbdaa2b2', {
            cluster: 'us2',
            forceTLS: true
        });

        this.channel = this.pusher.subscribe('update');
        this.channel.bind('availability_update', () => {
            this.handleAvailabilityAlert()
		})

		this.channel = this.pusher.subscribe('new_schedule');
        this.channel.bind('schedule_update', () => {
            this.handleScheduleAlert()
            console.log('new schedule')
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

	handleScheduleAlert = () => {
        this.setState({
            schedule_alert: true,
            new_notification: true
        })

        setTimeout(() => {
            this.setState({
                schedule_alert: false
            })
            
        }, 7000);
    }
	markAsRead = () => {
        this.setState({new_notification: false})
    }

	componentWillUnmount() {
		this.pusher.disconnect()
		document.body.classList.remove("background-color");
    }
    render() {
        return (
			<div>
				<div>
					<AccountNav 
						onClick={this.toggleModal}
						className={this.state.new_notification === false ? "material-icons no_notification" : "material-icons new_notification"}
						markAsRead={this.markAsRead}
						username={localStorage.getItem('username')}
                        newNotification={this.state.new_notification}
					/>
					<UserMenuModal
						show={this.state.isOpen}
						onClose={this.toggleModal}
					/>
				</div>
				<Notifications 
					className={this.state.availability_alert ? "user_contacts-availability_alert" : "user_contacts-availability_alert notifications-hidden"}
					text="New schedule request!"
				/>
				<Notifications 
                        className={this.state.schedule_alert ? "user_contacts-schedule_alert" : "user_contacts-schedule_alert notifications-hidden"}
                        text="New schedule available!"
				/>
				<div className="contact_page">
					<div className="contact_list_container">
						<ContactLabels />
						<ContactRow 
							className="contacts"
							linkTo={'contact-availability'}
						/>
					</div>
					<div className="contact_list_container-mobile">
						<ContactRowMobile 
							className="contacts"
							linkTo={'contact-availability'}
						/>
					</div>
				</div>
            </div>
        )
    }
}

const mapStateToprops = state => ({
	employees: state.employees
})

export default connect(mapStateToprops)(Contacts)