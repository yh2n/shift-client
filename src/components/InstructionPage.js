import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchEmployees } from '../actions/fetch_employees';

import './InstructionPage.css';


export class InstructionPage extends Component {
    componentDidMount() {
		this.props.dispatch(fetchEmployees())
    }
    
    render() {
        let users = this.props.employees.employees
        let usernames = users.map(user => {
            return  <li key={ user.username }>{ user.username }</li> 
        })
        return (
            <div className="instructions">
                <div className="admin_instructions_div">
                    <ul>
                        <li>As an administrator/manager, you can log in using one of the following usernames.</li>
                        <li>Look at the latest version of your staff availabily to avoid scheduling conflicts.</li>
                        <li>Create new schedules by clicking on 'Breakfast', 'Lunch', 'Brunch' or 'Dinner'</li>
                    </ul>
                </div>
                <div className="staff_instructions_div">
                    <ul>
                        <li>As an employee, log in using one the following usernames.</li>
                        <li>Keep your availability up to date.</li>
                        <li>
                            Click on the shift you need to get covered and will be displayed red or 
                            click on the days off you are willing to work and they will be displayed 
                            green.
                        </li>
                    </ul>
                </div>
                <div className="mock_staff">
                    <ul>
                        { usernames }
                    </ul>
                </div>
                <div >
                    <li className="pw_instructions" style={{'listStyle': 'none'}}>Use 'password' for all employees and admin</li>
                </div>
                <p className="instructions_page_redirect">
                    <Link to='/login' style={{'textDecoration': 'none'}}>
                        Login
                    </Link>
                </p>  
            </div>
        )
    }
}



const mapStateToprops = state => ({
	employees: state.employees
})

export default connect(mapStateToprops)(InstructionPage)
