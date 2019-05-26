import React, { Component } from 'react';
import EmployeeInfoForm from './EmployeeInfoForm';
import AccountNav from './AccountNav';
import UserMenuModal from './UserMenuModal';
import './UserAccount.css';

export default class UserAccount extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen : false
		}
	}	

	toggleModal = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<div className="user_page">
				<AccountNav onClick={this.toggleModal}/>
				<UserMenuModal
					show={this.state.isOpen}
					onClose={this.toggleModal}
				/> 
				<EmployeeInfoForm />
			</div>
		)
	}
}