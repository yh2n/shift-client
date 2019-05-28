import React, { Component, Fragment } from 'react';
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
				<Fragment key={index}>
                    <div className="contact_label-mobile">Name</div>
					<div className="contact_info-mobile">{employee.firstName} {employee.lastName}</div>
                    <div className="contact_label-mobile">Phone Number</div>
					<div className="contact_info-mobile">{employee.phone_number}</div>
                    <div className="contact_label-mobile">Email Address</div>
					<div className="contact_info-mobile">{employee.email_address}</div>
                    <div className="contact_label-mobile">Position</div>
					<div className="contact_info-mobile">{employee.position}</div>
                    <div className="contact_label-mobile">Availability</div>
					<Link to={`./contact-availability/${employee.id}`} style={{ textDecoration: 'none' }}>
						<div className="contact_info-mobile contact_availability">View</div>
					</Link>
				</Fragment>
			)
		)

		)
	}
}

const mapStateToprops = state => ({
	employees: state.employees
})

export default connect(mapStateToprops)(ContactRow)