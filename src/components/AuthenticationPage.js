import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import Input from './Input';
import './AuthenticationPage.css';

export class AuthenticationPage extends Component {
	onInputChange(e) {
        console.log(e.target.value)
    }
	render() {
		return (
			<div className="authentication-page">
				<form className="authentication-form">
					<fieldset className="authentication_fieldset">
						<p className="verification-prompt">Please verify your account in order to register</p>
						<div className="verfication_email">
						<label htmlFor="verfication_email"></label>			
						<Input 
							name="verification_email"
							onChange={this.onInputChange}
							placeholder="Email"/>
						</div>
						<div className="pw">
						<label htmlFor="password"></label>			
						<Input 
							name="password"
							onChange={this.onInputChange}
							type="password"
							placeholder="Passcode"/>
						</div>
						<label></label>
					<button className="verification-btn" type="submit">Verify</button>
					</fieldset>
				</form>
			</div>
		)
	}
}

export default reduxForm({
	form: 'Verfication'
})(AuthenticationPage);