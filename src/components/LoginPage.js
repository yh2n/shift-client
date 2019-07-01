import React, { Component }from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';
import LoginForm from './LoginForm';
import { Link, Redirect } from 'react-router-dom';

import './LoginPage.css';


export class HomePage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			employee: true,
			admin: false
		}
	}

	render() {
	console.log(this.props.currentUser);
	let username = localStorage.getItem("username");
	if (this.props.loggedIn) {
        return <Redirect to={`/my_account/${username}/schedule`} />;
    }

	return(
		<div>
			<NavBar 
				text="Sign up"
				component="RegistrationPage"
				to='/registration'/>
			<LoginForm employeeSelected={this.state.employee}/>
			<p className="register-redirect">
				New to <span>shift </span>? Register 
				<Link to='/registration' style={{'textDecoration': 'none'}}> here </Link>
			</p>
			<p className="home-about_redirect">
				<Link to='/' style={{'textDecoration': 'none'}}> Home </Link> | <Link to='/instructions' style={{'textDecoration': 'none'}}> About </Link>
			</p>
		</div>
		);
	}
}

const mapStateToProps = state => ({
	loggedIn: state.auth.currentUser !== null,
	currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(HomePage);