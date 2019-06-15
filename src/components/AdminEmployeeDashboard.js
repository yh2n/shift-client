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
		document.body.classList.add("employee_dashboard_background-color");
	}

	componentWillUnmount() {
        document.body.classList.remove("employee_dashboard_background-color");
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
					<div className="admin_employee_dashboard">
						<div className="admin_employee_info">
							<div>First name</div>
							<div>Last name </div>
							<div>Position </div>
							<div>Username </div>
							<div>Phone number </div>
							{/* <div>Address </div> */}
							<div>Email address: </div>
							<Link to={`/admin/employee-availability/${employee.id}`} style={{ textDecoration: 'none' }}>
										<div>Availability</div>
							</Link>
						</div>
						<div className="admin_employee_data">
							<div>{employee.firstName}</div>
							<div>{employee.lastName? employee.lastName : "N/A"}</div>
							<div>{employee.position ? employee.position : "N/A"}</div>
							<div>{employee.username? employee.username : "N/A"}</div>
							<div>{employee.phone_number ? employee.phone_number : "N/A"}</div>
							{/* <div>{employee.address.address1 || "N/A"}</div> */}
							<div>{employee.email_address ? employee.email_address : "N/A"}</div>
							
						</div>
					</div>
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
				<div className="employee_contact_info">
					{body}
				</div>
				<Link to ={'/admin'} style={{textDecoration:'none'}}>
					<div className="employee-database_redirect">
						Back to schedule
					</div>
				</Link>
        	</div>
		)
    }
}