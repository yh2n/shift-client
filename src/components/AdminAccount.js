import React, { Component } from 'react';
import { connect } from 'react-redux';
import AccountNav from './AccountNav';
import AdminMenuModal from './AdminMenuModal';
import Notifications from './Notifications';
import ContactRow from './ContactRow';
import ContactLabels from './ContactLabels';
import ContactRowMobile from './ContactRowMobile';
import { fetchEmployees } from '../actions/fetch_employees';
import './AdminAccount.css'

export  class AdminAccount extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			isOpen: false,
			isDisplayed: false,
			availability_alert: false,
			schedule_alert: false,
			new_notification: false
		};
	}

	componentDidMount() {
		this.props.dispatch(fetchEmployees())
	}

	toggleMenuModal = () => {
		this.setState({
			isDisplayed: !this.state.isDisplayed
		});
	}
    render() {
        return (
            <div>
				<div>
				<AccountNav 
					onClick={this.toggleMenuModal}
					className={this.state.new_notification === false ? "material-icons no_notification" : "material-icons new_notification"}
					markAsRead={this.markAsRead}
					username={localStorage.getItem('username')}
				/>
					<AdminMenuModal
						show={this.state.isDisplayed}
						onClose={this.toggleMenuModal}
					/>
				</div>
				<div className="contact_page">
					<div className="contact_list_container">
						<ContactLabels />
						<ContactRow 
							className="contacts"
							linkTo={'employee-availability'}
						/>
					</div>
					<div className="contact_list_container-mobile">
						<ContactRowMobile 
							className="contacts"
							linkTo={'employee-availability'}
						/>
					</div>
				</div>
        	</div>
        )
    }
}

const mapStateToProps = state => ({
	employees: state.employees
})

export default connect(mapStateToProps)(AdminAccount)