import React, { Component } from 'react';
import Availability from './Availability';
import AccountNav from './AccountNav';
import UserMenuModal from './UserMenuModal';
import './AvailabilityPage.css';


export default class AvailabilityPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen : false,
		}
	}	
		
	toggleModal = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<div className="availability_page">
				<AccountNav onClick={() => this.toggleModal()}/>
				<UserMenuModal
					show={this.state.isOpen}
					onClose={this.toggleModal}
				/>
				<div className="availability_prompt">
					<p>Indicate your availability:</p>
				</div>
				<Availability />
			</div>
		)
	}
}