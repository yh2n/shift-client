import React, { Component } from 'react';
import { connect } from 'react-redux';
import EmployeeRow from './EmployeeRow';
import AccountNav from './AccountNav';
import AdminMenuModal from './AdminMenuModal';
import ContactLabels from './ContactLabels';
import { fetchEmployees } from '../actions/fetch_employees';
import './AdminAccount.css'

export  class AdminAccount extends Component {
	constructor(props) {
		super(props);

		this.state = { 
			isOpen: false,
			isDisplayed: false
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
					<AccountNav onClick={this.toggleMenuModal}/>
					<AdminMenuModal
						show={this.state.isDisplayed}
						onClose={this.toggleMenuModal}
					/>
				</div>
				<div className="staff_member_container">
					<ContactLabels />
					<EmployeeRow />
				</div>
        	</div>
        )
    }
}

const mapStateToProps = state => ({
	employees: state.employees
})

export default connect(mapStateToProps)(AdminAccount)