import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchEmployees } from '../actions/fetch_employees';

import './Contacts.css'



export class ContactRow extends Component {
	componentDidMount() {
		this.props.dispatch(fetchEmployees())
	}
	
	render() {
		let employees = this.props.employees.employees
		return (
			employees.map((employee, index) => (
				<div className="contact_row" key={index}>
					<div className="contact_list">{employee.firstName} {employee.lastName}</div>
					<div className="contact_list">{employee.phone_number}</div>
					<div className="contact_list">{employee.email_address}</div>
					<div className="contact_list">{employee.position}</div>
					<Link to={`./contact-availability/${employee.id}`} style={{ textDecoration: 'none' }}>
						<div className="contact_list availability_redirect">View</div>
					</Link>
				</div>
			)
		)

		)
	}
}

const mapStateToprops = state => ({
	employees: state.employees
})

export default connect(mapStateToprops)(ContactRow)