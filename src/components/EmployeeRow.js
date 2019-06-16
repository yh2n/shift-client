import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { fetchEmployees } from '../actions/fetch_employees';


export class EmployeeRow extends Component {
	componentDidMount() {
		this.props.dispatch(fetchEmployees())
	}
	
	render() {
		let employees = this.props.employees.employees
		return (
			employees.map(employee => (
				<Fragment key={employee.id}>
					<div className="contact_list">{employee.firstName} {employee.lastName}</div>
					<div className="contact_list">{employee.phone_number === "" ? "" : employee.phone_number}</div>
					<div className="contact_list">{employee.email}</div>
					<div className="contact_list">{employee.position}</div>
					<Link to={`/admin/employee-availability/${employee.id}`} style={{ textDecoration: 'none' }}>
						<div className="contact_list">View</div>
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

export default connect(mapStateToprops)(EmployeeRow)