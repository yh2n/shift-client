import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { API_BASE_URL } from '../config';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Input from './Input';
import EmployeeInfoModal from './EmployeeInfoForm';
//import { fetchEmployeeInfo } from '../actions/fetch_employee_info';
//import { updateUserInfo } from '../actions/update_info';

import './UserInfo.css';

const currentUserId = localStorage.getItem("id");

export default class UserInfoForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			employee: {},
			address: {},
			// isVisible: false
		}
	}
	componentDidMount() {
		this.loadEmployee();
		this.loadAddress()
	}

	// handleChange = e => {
	// 	let target = e.target.value;
	// 	console.log(target);
	// 	this.setState({
	// 		value: target
	// 	})
	// 	console.log(this.state.value)
	// }

	// editInfo = (values) => {
	// 	console.log(this.state.value)
	// 	let position = this.state.value;
	// 	const {firstName, lastName} = values;
	// 	const info = {firstName, lastName, position};
	// 	console.log(values);
	// 	console.log("new info submitted");
	// 	return this.props
	// 		.dispatch(updateUserInfo(info))
	// }

	loadEmployee() {
		this.setState({
			loading: true,
			error: null
		})
		fetch(`${API_BASE_URL}/admin/employee/${currentUserId}`)
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
				console.log(this.state.employee.address.address_1)
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

	toggleInfoModal = () => {
		this.setState({
			isVisible: !this.state.isVisible
		})
		console.log("info modal toggled", this.state)
	}

	render() {
		console.log(this.props)
		let address = this.state.address
		console.log(address)
		let username = localStorage.getItem('username')
		return [
			<div className="profile_container">
				<ul>
					<li onClick={() => this.toggleInfoModal()}>First Name: {this.state.employee.firstName}</li>
					<li onClick={() => this.toggleInfoModal()}>Last Name: {this.state.employee.lastName}</li>
					<li onClick={() => this.toggleInfoModal()}>Address:
						<ul>
							<li>Address 1:{this.state.address.address_1}</li>
							<li>Address 2:{this.state.address.address_2}</li>
							<li>City:{this.state.address.city}</li>
							<li>State:{this.state.address.state}</li>
							<li>zip:{this.state.address.zip}</li>
						</ul>
					</li>
					<li>Phone Number: {this.state.employee.phone_number}</li>
					<li>Position:{this.state.employee.position}</li>
					<Link to={`./${username}/availability`} style={{ textDecoration: 'none' }}>
									<li>Availability</li>
						</Link>
					<li></li>
				</ul>
			</div>,
			<EmployeeInfoModal 
				//show={this.state.isVisible}
				close={this.toggleInfoModal}
			/>
		]
	}
}


