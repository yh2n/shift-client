import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactLabels from './ContactLabels';
import ContactRow from './ContactRow';

import AccountNav from './AccountNav';
import UserMenuModal from './UserMenuModal';

import { fetchEmployees } from '../actions/fetch_employees';
import './Contacts.css'


export class Contacts extends Component {
    constructor(props) {
		super(props);

		this.state = {
			isOpen : false,
		}
	}	
	
	componentDidMount() {
		this.props.dispatch(fetchEmployees())
	}

	toggleModal = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

    render() {
        return (
			<div className="contact_page">
				<div>
					<AccountNav onClick={this.toggleModal}/>
					<UserMenuModal
						show={this.state.isOpen}
						onClose={this.toggleModal}
					/>
				</div>
				<div className="contact_list_container">
					<ContactLabels />
					<ContactRow />
				</div>
            </div>
        )
    }
}

const mapStateToprops = state => ({
	employees: state.employees
})

export default connect(mapStateToprops)(Contacts)