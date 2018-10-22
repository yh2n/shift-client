import React from 'react';
import { connect } from 'react-redux'; 
import AdminRegistrationForm from './AdminRegistrationForm';
import { Link, Redirect } from 'react-router-dom';

import './RegistrationPage.css';

export function AdminRegistrationPage(props) {
	if (props.loggedIn) {
        return <Redirect to="/admin/current_schedule" />;
    }
	return (
			<div>
			    <AdminRegistrationForm />
			    <p className="login-redirect">
				    Have an account?<Link to='/'>Login</Link>.
				</p>
			</div>
		);
	}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(AdminRegistrationPage);