import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchEmployees } from '../actions/fetch_employees';

import './StaffData.css';


export class StaffData extends Component {
	componentDidMount() {
		this.props.dispatch(fetchEmployees())
	}

	render() {
		let body;
		let employees = this.props.employees.employees;
		if (this.props.employees.error) {
			body = (
				<div className="error_message">
					{this.props.employees.error}
				</div>
			)
		}
		else {
			body = (
				<div className="admin_employee_list">
					{employees.map((employee, index) => 
						<div key={index} className="admin_employee_row">
							<div>
								<Link to ={`/admin/employee/${employee.id}`} style={{textDecoration:'none'}}>
									<div>
										id: {employee.id}
									</div>
								</Link>
									<div>First name: {employee.firstName}</div>
									<div>Last name: {employee.lastName}</div>
									<div>Position: {employee.position}</div>
							</div>
						</div>
					)}
				</div>
				)
			
		}
		return (
			<div className="staff_page">
				{body}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	employees: state.employees
})

export default connect(mapStateToProps)(StaffData)