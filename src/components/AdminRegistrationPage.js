import React from "react";
import { connect } from "react-redux";
import AdminRegistrationForm from "../pages/admin/registration";
import { Link, Redirect } from "react-router-dom";

// import "../pages/registration/style.css";

export function AdminRegistrationPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/admin/current_schedule" />;
    }
    return (
        <div>
            <AdminRegistrationForm />
            <p className="login-redirect">
                Have an account?<Link to="/">Login</Link>.
            </p>
        </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(AdminRegistrationPage);
