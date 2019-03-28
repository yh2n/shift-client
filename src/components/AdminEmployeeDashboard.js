import React, { Component } from 'react';
import AccountNav from './AccountNav';
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
			employee: []
		};
	}

	componentDidMount() {
		this.loadEmployee();
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
					employee,
					loading: false,
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
    render() {
		console.log(this.state);
		
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
					<ul>
						<li>id: {employee.id}</li>
						<li>First name: {employee.firstName}</li>
						<li>Last name: {employee.lastName}</li>
						<li>Position: {employee.position}</li>
						<li>Phone number: {employee.phone_number}</li>
						<li>Address: {employee.address_1}</li>
						<li>Email address: {employee.email_address}</li>
						<Link to={`/admin/employee-availability/${employee.id}`} style={{ textDecoration: 'none' }}>
									<li>Availability</li>
						</Link>
					</ul>
				)
		}

        return (
			<div>
				<div>
					<AccountNav onClick={this.toggleMenuModal}/>
					<AdminMenuModal
							show={this.state.isDisplayed}
							onClose={this.toggleMenuModal}
					/>
				</div>
				<Link to ={'/admin/employee_database'} style={{textDecoration:'none'}}>
					<button className="employee-database_redirect">
						Back to database
					</button>
				</Link>
				<div className="employee_contact_info">
					{body}
				</div>
        	</div>
		)
    }
}