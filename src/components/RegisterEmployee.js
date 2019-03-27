import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import Employee from './Employee';
import AccountNav from './AccountNav';
import AdminMenuModal from './AdminMenuModal';

import './Employees.css';
import './MenuModal.css';

export class RegisterEmployee extends Component {
	constructor(props) {
		super(props);
	
		this.state = { 
			isOpen: false,
			isDisplayed: false
		};
	}

	// onSubmit = (values) => {
	// 	const {firstName, lastName, phoneNumber, email} = values;
	// 	console.log(values);
	// 	alert('Employee added')
	// 	return fetch('http://localhost:8080/api/admin/new_hire', {
	// 		method: 'POST',
	// 		body: JSON.stringify(values)
	// 	})
	// }

	toggleMenuModal = () => {
		console.log('menu modal toggled')
		this.setState({
			isDisplayed: !this.state.isDisplayed
		});
	}
	
	render() {
		return (
			<div>
				<AccountNav onClick={this.toggleMenuModal}/>
				<AdminMenuModal
						show={this.state.isDisplayed}
						onClose={this.toggleMenuModal}
					/>
				<div className="main_container">
					<fieldset className="employees_fieldset">
						<form className="employee_info" onSubmit={this.props.handleSubmit(values => 
							this.onSubmit(values))}>
							<label htmlFor="barbacks" className="employee_position">Barbacks</label>
							<Field 
								name="barback" 
								component={Employee} 
								type="text"
							/>
						</form>
						<form className="employee_info" onSubmit={this.props.handleSubmit(values => 
							this.onSubmit(values))}>
							<label htmlFor="bartenders" className="employee_position">Bartenders</label>
							<Field 
								name="bartender" 
								component={Employee} 
								type="text"  
							/>
						</form>
						<form className="employee_info" onSubmit={this.props.handleSubmit(values => 
							this.onSubmit(values))}>
							<label htmlFor="bussers" className="employee_position">Bussers</label>
							<Field 
								name="busser" 
								component={Employee} 
								type="text"  
							/>
						</form>
						<form className="employee_info" onSubmit={this.props.handleSubmit(values => 
							this.onSubmit(values))}>
							<label htmlFor="Host/Hostess" className="employee_position">Host staff</label>
							<Field 
								name="host_staff" 
								component={Employee} 
								type="text"  
							/>
						</form>
						<form className="employee_info" onSubmit={this.props.handleSubmit(values => 
							this.onSubmit(values))}>
							<label htmlFor="managers" className="employee_position">Managers</label>
							<Field 
								name="manager" 
								component={Employee} 
								type="text"  
							/>
						</form>
						<form className="employee_info"onSubmit={this.props.handleSubmit(values => 
							this.onSubmit(values))}>
							<label htmlFor="maître d'" className="employee_position">Maître d'</label>
							<Field 
								name="maître d'" 
								component={Employee} 
								type="text"  
							/>
						</form>
						<form className="employee_info"onSubmit={this.props.handleSubmit(values => 
							this.onSubmit(values))}>
							<label htmlFor="servers" className="employee_position">Servers</label>
							<Field 
								name="server" 
								component={Employee} 
								type="text"  
							/>
						</form>
					</fieldset>
				</div>
			</div>
		)
	}
}

// function validate(values) {
// 	const errors = {};
// 	if(!values) {
// 		errors.values = "cannot be blank!"
// 	}
// 	//if 'errors' is empty the form is fine to submit
// }

export default reduxForm({
	form: 'employeesInfo'
})(RegisterEmployee);