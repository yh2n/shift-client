import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchEmployees } from "../../actions/fetch_employees";

import "./style.css";

export class InstructionPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            managers: [],
            employees: []
        };
    }
    componentDidMount() {
        this.props.dispatch(fetchEmployees());
        document.body.classList.add("background-color");
        setTimeout(() => {
            let managers = this.props.employees.employees.filter(
                element => element.admin === true
            );
            let employees = this.props.employees.employees.filter(
                element => element.admin === "" || false
            );
            this.setState({ managers, employees });
        }, 300);
    }

    componentWillUnmount() {
        document.body.classList.remove("background-color");
    }

    render() {
        let managers = this.state.managers.map(manager => {
            return <li key={manager.username}>{manager.username}</li>;
        });

        let employees = this.state.employees.map(employee => {
            return <li key={employee.username}>{employee.username}</li>;
        });

        return (
            <div className="instruction_page">
                <Link
                    to="/"
                    style={{
                        textDecoration: "none"
                    }}
                >
                    <p className="instructions_app_name">shift</p>
                </Link>
                <div className="instructions">
                    <div className="admin_instructions_div">
                        <ul>
                            <li>
                                As a manager, log in with one of the usernames
                                below
                            </li>
                            <li>
                                Look at the latest updates of your staff
                                availability
                            </li>
                            <li>
                                Create new schedules by clicking on the shifts
                                you wish to select
                            </li>
                            <li>
                                Submit your changes: each staff member gets
                                notified{" "}
                            </li>
                        </ul>
                    </div>
                    <div className="mock_staff">
                        <ul>
                            <p>Managers:</p>
                            {managers}
                        </ul>
                    </div>
                    <div className="staff_instructions_div">
                        <ul>
                            <li>
                                As an employee, log in with one of the usernames
                                below.
                            </li>
                            <li>Keep your availability up to date.</li>
                            <li>
                                Click on the shift(s) you are requesting
                                coverage for: they will turn red and indicate
                                your request <br />
                                Click on the days off you are willing to work:
                                they will turn green and show you are
                                available/looking to pick up those shifts
                            </li>
                            <li>
                                Submit your update(s): everyone gets notified of
                                the latest schedule request(s)
                            </li>
                        </ul>
                    </div>
                    <div className="mock_staff">
                        <ul>
                            <p>Floor/door staff:</p>
                            {employees}
                        </ul>
                    </div>
                    <div>
                        <li
                            className="pw_instructions"
                            style={{ listStyle: "none" }}
                        >
                            Use{" "}
                            <span
                                style={{
                                    fontStyle: "italic",
                                    fontWeight: "bold"
                                }}
                            >
                                'password'
                            </span>{" "}
                            for all employees and admin
                        </li>
                    </div>
                    <div className="staff_instructions_div">
                        <ul>
                            <p>To test the app:</p>
                            <li>
                                {" "}
                                Launch your browser and open a second private
                                window
                            </li>
                            <li>
                                Log in as manager from one window and as
                                employee from the other
                            </li>
                            <li>
                                Create and edit schedules, submit your
                                availability and your schedule requests
                            </li>
                            <li>
                                See instant notifications and schedule changes
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="instructions_page_redirect">
                    <Link
                        to="/login"
                        style={{
                            textDecoration: "none",
                            color: "rgba(38, 165, 106, 65)"
                        }}
                    >
                        Login |{" "}
                    </Link>
                    <Link
                        to="/"
                        style={{
                            textDecoration: "none",
                            color: "rgba(38, 165, 106, 65)"
                        }}
                    >
                        Home{" "}
                    </Link>
                </p>
            </div>
        );
    }
}

const mapStateToprops = state => ({
    employees: state.employees
});

export default connect(mapStateToprops)(InstructionPage);
