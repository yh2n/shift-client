import React, { Component } from 'react';
import AccountNav from './AccountNav';
import AdminMenuModal from './AdminMenuModal';
import EmployeeAvailability from './EmployeeAvailability';
import { Link } from 'react-router-dom';

export default class EmployeeAvailabilityPage extends Component {
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
            <div>
                <AccountNav onClick={this.toggleModal}/>
				<AdminMenuModal
					show={this.state.isOpen}
                    onClose={this.toggleModal}
				/>
                <EmployeeAvailability 
                {...this.props}
                />
                <Link to={`/admin/employee_database`} style={{ textDecoration: 'none' }}>
                    <button>Back to Contacts</button>
                </Link>
            </div>
        )
    }
}