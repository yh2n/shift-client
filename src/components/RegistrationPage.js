import React from 'react';
import { connect } from 'react-redux'; 
import { Link, Redirect } from 'react-router-dom';
import NavBar from './NavBar';
import RegistrationForm from './RegistrationForm';


import './RegistrationPage.css';



export function RegistrationPage(props) {
	let username = localStorage.getItem("username");
	if (props.loggedIn) {
        return <Redirect to={`/my_account/${username}`}/>;
    }
	return (
			<div>
				<NavBar 
					text="Log in"
					component="LoginPage" 
					to='/login'/>
			    <RegistrationForm />
			    <p className="login-redirect">
				    Have an account? <Link to='/login'>Login</Link>.
				</p>
			</div>
		);
	}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(RegistrationPage);