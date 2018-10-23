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
				<ol className="admin_employee_list">
					{employees.map((employee, index) => 
						<li key={index} className="admin_employee_row">
							<ul>
								<Link to ={`/admin/employee/${employee.id}`} style={{textDecoration:'none'}}>
									<li>
										id: {employee.id}
									</li>
								</Link>
									<li>First name: {employee.firstName}</li>
									<li>Last name: {employee.lastName}</li>
									<li>Position: {employee.position}</li>
							</ul>
						</li>
					)}
				</ol>
				)
			
		}
		return (
			<div>
				{body}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	employees: state.employees
})

export default connect(mapStateToProps)(StaffData)