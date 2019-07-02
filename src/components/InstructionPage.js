import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchEmployees } from '../actions/fetch_employees';

import './InstructionPage.css';


export class InstructionPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            managers: [],
            employees: []
        }
    }
    componentDidMount() {
        this.props.dispatch(fetchEmployees())
        document.body.classList.add("background-color");
        setTimeout(() => {
            let managers = this.props.employees.employees.filter(element => element.admin === true);
            let employees = this.props.employees.employees.filter(element => element.admin === "" || false);
            this.setState({ managers, employees })
        }, 300) 
    }

    componentWillUnmount() {
        document.body.classList.remove("background-color");
    }
    
    render() {
        let managers = this.state.managers.map(manager => {
            return  <li key={ manager.username }>{ manager.username }</li> 
        })

        let employees = this.state.employees.map(employee => {
            return  <li key={ employee.username }>{ employee.username }</li> 
        })

        return (
            <div className="instruction_page">
                <p className="instructions_app_name">shift</p>
                <div className="instructions">
                    <div className="admin_instructions_div">
                        <ul>
                            <li>As a manager, log in using one of the following usernames.</li>
                            <li>Look at the latest updates of your staff availability.</li>
                            <li>Create new schedules by clicking on 'Breakfast', 'Lunch', 'Brunch' or 'Dinner'</li>
                        </ul>
                    </div>
                    <div className="mock_staff">
                        <ul>
                            <p>Managers:</p>
                            { managers }
                        </ul>
                    </div>
                    <div className="staff_instructions_div">
                        <ul> 
                            <li>As an employee, log in using one the following usernames.</li>
                            <li>Keep your availability up to date.</li>
                            <li>
                                Click on the shift(s) you are requesting coverage coverage for and they will be displayed red 
                                or click on the days off you are willing to work and they will be displayed 
                                green.
                            </li>
                        </ul>
                    </div>
                    <div className="mock_staff">
                        <ul>
                            <p>Floor/door staff:</p>
                            { employees }
                        </ul>
                    </div>
                    <div >
                        <li className="pw_instructions" style={{'listStyle': 'none'}}>Use <span style={{fontStyle: 'italic', fontWeight: 'bold'}}>'password'</span> for all employees and admin</li>
                    </div>
                </div>
                <p className="instructions_page_redirect">
                    <Link to='/login' style={{'textDecoration': 'none', color: 'rgba(38, 165, 106, 65)'}}>
                        Login | </Link><Link to='/' style={{'textDecoration': 'none', color: 'rgba(38, 165, 106, 65)'}}>Home </Link>
                </p>  
            </div>
        )
    }
}



const mapStateToprops = state => ({
	employees: state.employees
})

export default connect(mapStateToprops)(InstructionPage)
