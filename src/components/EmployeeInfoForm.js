import React, { Component } from 'react';
import { API_BASE_URL } from '../config';
import Input from './Input';
import PositionSelect from './PositionSelect'


import './EmployeeInfoForm.css';


export default class EmployeeInfoForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			employeeInfo: {}, 
			address: {},
			currentUserId: localStorage.getItem("id")
		}
	}
	componentDidMount() {
		this.loadEmployeeInfo();
		this.loadAddress();
	}

	handleChange = e => {
		const { name, value } = e.target
		// Inline editing
		const updatedEmployeeInfo = {
            ...this.state.employeeInfo,
            [name]: value
		}

		const updatedAddress = {
            ...this.state.address,
            [name]: value
		}

		this.setState({ 
			employeeInfo: updatedEmployeeInfo,
			address: updatedAddress
		})
	}

	editInfo = () => {
		const id = localStorage.getItem("id");
		const { employeeInfo, address } = this.state;
		const info = { employeeInfo, address }
 		return fetch(`${ API_BASE_URL }/employee/${id}/info`, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(info),
			mode: 'cors'
		})
		.then(res => res.json(info))
		.catch(err => {
			console.log(err)
		});
	}

	loadEmployeeInfo = () => {
		fetch(`${API_BASE_URL}/employee/employee/${this.state.currentUserId}`)
		.then(res => {
			if(!res.ok) {
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then(employeeInfo => {
			this.setState({employeeInfo})
			})
			.catch(err => {
				this.setState({
					error: `Couldn't load employee, ${err}`,
				})
			})
	}

	loadAddress = () => {
		this.setState({
			loading: true,
			error: null
		})
		fetch(`${API_BASE_URL}/employee/${this.state.currentUserId}/info`)
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
			})
			.catch(err => {
				this.setState({
					error: `Couldn't load employee, ${err}`,
				})
			})
	}

	render() {
		return(
			<>
			<form className="user-info-form" onSubmit={this.editInfo}>
					<fieldset>
						<label htmlFor="first-name"></label>			
						<Input
							name="firstName" 
							placeholder="First Name"
							// Prevents input from being undefined when first rendered
							// and causing switch from uncontrolled to controlled 
							value={this.state.employeeInfo.firstName || ''}
							onChange={this.handleChange}
						/>
						<label htmlFor="last-name"></label>			
						<Input
							name="lastName" 
							value={this.state.employeeInfo.lastName || ''}
							onChange={this.handleChange}
							placeholder="Last Name"
						/>

						<label htmlFor="address">Home Address</label>
						<div className="address-field">
						<label htmlFor="address1"></label>			
						<Input
							name="address_1" 
							value={this.state.address.address_1 || ''}
							onChange={this.handleChange}
							placeholder="e.g Street, Ave, Blvd"
							/>
						<label htmlFor="address2"></label>			
						<Input
							name="address_2" 
							value={this.state.address.address_2 || ''}
							onChange={this.handleChange}
							placeholder="e.g apt #"
							/>
						<label htmlFor="city" ></label>			
						<Input
							name="city" 
							value={this.state.address.city || ''}
							onChange={this.handleChange}
							placeholder="City"
							/>
						<label htmlFor="state"></label>			
						<Input
							name="state" 
							value={this.state.address.state || ''}
							onChange={this.handleChange}
							placeholder="State"
							/>
						<label htmlFor="zip"></label>			
						<Input
							name="zip" 
							value={this.state.address.zip || ''}
							onChange={this.handleChange}
							placeholder="ZIP"
							/>
						</div>
						<div>
						<label htmlFor="state">Contact Info</label>			
						<Input
							name="email_address" 
							value={this.state.employeeInfo.email_address || ''}
							onChange={this.handleChange}
							placeholder="Email address"
						/>
						<Input
							name="phone_number" 
							type="tel"
							value={this.state.employeeInfo.phone_number || ''}
							onChange={this.handleChange}
							placeholder="Phone number"
						/>
						</div>

						<label>Position</label>
						<div className="select-save-div">
							<PositionSelect 
								className="position_select"
								name="position"
								value={this.state.employeeInfo.position}
								onChange={this.handleChange}
							/>
							<button 
								className="update_btn" 
								type="submit"
							>
								Save
							</button>
						</div>
					</fieldset>
				</form>
            </>
			)
	}
}



