import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { API_BASE_URL } from '../config';
import Input from './Input';
import { fetchEmployeeInfo } from '../actions/fetch_employee_info';
import { updateUserInfo } from '../actions/update_info';

import './UserInfo.css';

const currentUserId = localStorage.getItem("id");

export class EmployeeInfoModal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			employee: {}, 
			address: {}
		}
	}
	componentDidMount() {
		this.loadEmployee();
		this.loadAddress();
	}

	handleChange = e => {
		let target = e.target.value;
		console.log(target);
		this.setState({
			value: target
		})
		console.log(this.state.value)
	}

	editInfo = (values) => {
		console.log(this.state.value)
		let position = this.state.value;
		const {firstName, lastName, phone_number, emailAddress, address_1, address_2, city, state, zip} = values;
		const info = {firstName, lastName, position, phone_number, emailAddress, address_1, address_2, city, state, zip};
		console.log(values);
		console.log("new info submitted");
		return this.props.dispatch(updateUserInfo(info))
	}

	loadEmployee() {
		fetch(`${API_BASE_URL}/employee/employee/${currentUserId}`)
		.then(res => {
			if(!res.ok) {
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then(employee => {
			this.setState({
				employee,
				//value: employee.position,
				loading: false,
			})
			console.log(this.state.value, this.state.employee.firstName, this.state.employee.address.address_1)
			console.log(this.state.employee)
			})
			.catch(err => {
				this.setState({
					error: `Couldn't load employee, ${err}`,
				})
			})
	}

	loadAddress() {
		this.setState({
			loading: true,
			error: null
		})
		fetch(`${API_BASE_URL}/employee/${currentUserId}/info`)
			.then(res => {
				if(!res.ok) {
					return Promise.reject(res.statusText);
				}
				return res.json();
			})
			.then(address => {
				this.setState({
					address,
					loading: false,
				})
				console.log(this.state.employee)
			})
			.catch(err => {
				this.setState({
					error: `Couldn't load employee, ${err}`,
				})
			})
	}

	render() {
        // console.log(this.props);
        // if(!this.props.show) {
        //     return null
        // }
		return(
			<div className="form-container">
			<form className="user-info-form" onSubmit={this.props.handleSubmit(values => 
				this.editInfo(values))}>
					<fieldset>
					{/* <i className="material-icons done" onClick={this.props.close}>close</i> */}
						<label htmlFor="first-name"></label>			
						<Field
							component={Input}
							name="firstName" 
							placeholder="First Name"
							//allows initialization from state
							defaultValue={this.state.employee.firstName}
							onChange={this.handleChange}
							pristine={false}
						/>
						<label htmlFor="last-name"></label>			
						<Field
							component={Input}
							name="lastName" 
							value={this.state.employee.lastName}
							placeholder="Last Name"
						/>

						<label htmlFor="address">Home Address</label>
						<div className="address-field">
							<label htmlFor="address1"></label>			
							<Field
								component={Input}
								name="address_1" 
								defaultValue={this.state.address.address_1}
								placeholder="e.g Street, Ave, Blvd"
								/>
							<label htmlFor="address2"></label>			
							<Field
								component={Input}
								name="address_2" 
								defaultValue={this.state.address.address_2}
								placeholder="e.g apt #"
								/>
							<label htmlFor="city" ></label>			
							<Field
								component={Input}
								name="city" 
								defaultValue={this.state.address.city}
								placeholder="City"
								/>
							<label htmlFor="state"></label>			
							<Field
								component={Input}
								name="state" 
								defaultValue={this.state.address.state}
								placeholder="State"
								/>
							<label htmlFor="zip"></label>			
							<Field
								component={Input}
								name="zip" 
								defaultValue={this.state.address.zip}
								placeholder="ZIP"
								/>
						</div>
						<div>
							<label htmlFor="state">Contact Info</label>			
							<Field
								component={Input}
								name="emailAddress" 
								defaultValue={this.state.employee.email_address}
								placeholder="Email address"
							/>
							<Field
								component={Input}
								name="phone_number" 
								type="tel"
								defaultValue={this.state.employee.phone_number}
								placeholder="Phone number"
							/>
						</div>

						<label>Position</label>
						<Field 
							component="select" 
							name="position"
							//value={this.state.value} 
							onChange={(e) => this.handleChange(e)}>
							<option value="default">{this.state.employee.position === "" ? "Select your position..." : this.state.employee.position}</option>
							<option value="Bartender">Bartender</option>
							<option value="Barback">Barback</option>
							<option value="Busser">Busser</option>
							<option value="Captain">Captain</option>
							<option value="Hostess/Host">Hostess/Host</option>
							<option value="Maitre d'">Maître d'</option>
							<option value="Manager">Manager</option>
							<option value="Runner">Runner</option>
							<option value="Server">Server</option>
							<option value="Sommelier">Sommelier</option>
						</Field>
						<button 
							className="update-btn" 
							type="submit"
						>
							Save
						</button>
					</fieldset>
				</form>
            </div>
			)
	}
}

EmployeeInfoModal = reduxForm({
	form: 'user_info',
})(EmployeeInfoModal)

const mapStateToprops = state => {
	return {
	employee: state.employee,
	// initialValues: {
	// 	firstName: state.firstName,
	// 	lastName: "Potico"
	// 	 },
	}	
}

export default connect(mapStateToprops)(EmployeeInfoModal)

// EmployeeInfoModal = connect(
// 	mapStateToprops,
// )(UserInfoForm)

// export default reduxForm({
// 	form: 'user_info',
// 	initilaValues: state => {
// 		position: this.state.value
// 	}
// })(EmployeeInfoModal)

