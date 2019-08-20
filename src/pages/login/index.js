import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "../../components/NavBar";
import LoginForm from "../../components/LoginForm";
import { Link, Redirect } from "react-router-dom";
import { username } from "../../utils/currentUser";

import "./style.css";

export class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employee: true,
            admin: false
        };
    }

    render() {
        if (this.props.loggedIn && this.props.currentUser.admin) {
            return <Redirect to={`/admin`} />;
        } else if (this.props.loggedIn) {
            return <Redirect to={`/my_account/${username}/schedule`} />;
        }

        return (
            <div>
                <NavBar
                    text="Sign up"
                    component="RegistrationPage"
                    to="/registration"
                />
                <LoginForm />
                <p className="register-redirect">
                    New to <span>shift </span>? Register
                    <Link to="/registration" style={{ textDecoration: "none" }}>
                        {" "}
                        here{" "}
                    </Link>
                </p>
                <p className="home-about_redirect">
                    <Link to="/" style={{ textDecoration: "none" }}>
                        {" "}
                        Home{" "}
                    </Link>{" "}
                    |{" "}
                    <Link to="/instructions" style={{ textDecoration: "none" }}>
                        {" "}
                        About{" "}
                    </Link>
                </p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null,
    currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(LoginPage);
