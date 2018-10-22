import React, { Component }from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import LoginForm from './LoginForm';
import { Redirect } from 'react-router-dom';

import './AdminLogin.css';


export class AdminLogin extends Component{
	constructor(props) {
		super(props);

		this.state = {
			employee: false,
			admin: true
		}
	}


	render() {
	console.log(this.props.currentUser);
	//let username = localStorage.getItem("username");
	if (this.props.loggedIn) {
        return <Redirect to={`/admin`} />;
    }

	return(
		<div>
			<NavBar 
				text="Sign up"
				component="RegistrationPage"
				to='/registration'/>
			<LoginForm adminSelected={this.state.admin}/>
		</div>
		);
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null,
	currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(AdminLogin);