import React, { Component } from 'react';
import AccountNav from './AccountNav';
import Pusher from 'pusher-js';
import Notifications from './Notifications';


import { API_BASE_URL } from '../config';
import { Link } from 'react-router-dom';
import AdminMenuModal from './AdminMenuModal';
import './AdminEmployeeDashboard.css';

export default class AdminEmployeeDashboard extends Component {
    constructor(props) {
		super(props);

		this.state = { 
			isOpen: false,
			isDisplayed: false,
			loading: false,
			error: null,
			employee: [],
			availability_alert: false,
            new_notification: false,
		};
	}

	componentDidMount() {
		this.loadEmployee();
		document.body.classList.add("employee_dashboard_background-color");

		this.pusher = new Pusher('dd4cfaae3504bbdaa2b2', {
            cluster: 'us2',
            forceTLS: true
        });

        this.channel = this.pusher.subscribe('update');
        this.channel.bind('availability_update', () => {
            this.handleAvailabilityAlert()
		})
	}

	toggleModal = () => {
		this.setState({ isOpen: !this.state.isOpen })
    }
    

	loadEmployee() {this.setState({loading: true,error: null})
		let id = this.props.match.params.id
		console.log("logging id", id);
		fetch(`${API_BASE_URL}/admin/employee/${id}`)
			.then(res => {
				if(!res.ok) {
					return Promise.reject(res.statusText);
				}
				return res.json();
			})
			.then(employee => {
				this.setState({
					employee
				})
			})
			.catch(err => {
				this.setState({
					error: `Couldn't load employee, ${err}`,
				})
			})
	}

	toggleMenuModal = () => {
		this.setState({
			isDisplayed: !this.state.isDisplayed
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

	componentWillUnmount() {
		document.body.classList.remove("employee_dashboard_background-color");
		this.pusher.disconnect()
    }
    render() {
		console.log(this.state.employee);
		
		let body;
		if (this.state.error) {
			body = (
				<div className="error_message">
					{this.state.error}
				</div>
			)
		}
		else {
			let employee = this.state.employee;
			
			body = (
					<div className="info_container">
						<div className="admin_employee_dashboard">
							<div className="admin_employee_info">
								<div>First name</div>
								<div>Last name </div>
								<div>Position </div>
								<div>Username </div>
								<div>Phone number </div>
								<div>Email address: </div>
								<Link to={`/admin/employee-availability/${employee.id}`} style={{ textDecoration: 'none', color: '#26A56A' }}>
											<div>Availability</div>
								</Link>
							</div>
							<div className="admin_employee_data">
								<div>{employee.firstName}</div>
								<div>{employee.lastName? employee.lastName : "N/A"}</div>
								<div>{employee.position ? employee.position : "N/A"}</div>
								<div>{employee.username? employee.username : "N/A"}</div>
								<div>{employee.phone_number ? employee.phone_number : "N/A"}</div>
								<div>{employee.email ? employee.email : "N/A"}</div>
							</div>
						</div>
						<Link to ={'/admin'} style={{textDecoration:'none'}}>
							<div className="employee-database_redirect">
								Back to schedule
							</div>
						</Link>
					</div>
				)
		}

        return (
			<div>
				<div>
					<AccountNav 
                        onClick={this.toggleModal}
                        className={this.state.new_notification === false ? "material-icons no_notification" : "material-icons new_notification"}
                        markAsRead={this.markAsRead}
                        username={localStorage.getItem('username')}
						newNotification={this.state.new_notification}
						linkTo={'/admin'}
                    />	
					<AdminMenuModal
							show={this.state.isDisplayed}
							onClose={this.toggleMenuModal}
					/>
				<Notifications 
                        className={this.state.availability_alert ? "employee_dashboard_notifications" : "employee_dashboard_notifications notifications-hidden"}
                        text="New schedule request!"
				/>
				</div>
				<div className="employee_contact_info">
					{body}
				</div>
        	</div>
		)
    }
}