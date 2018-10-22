import React, { Component } from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { registerUser } from '../actions/register_user';
import { login } from '../actions/auth';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';

import Input from './Input';

import './RegistrationForm.css';

export class RegistrationForm extends Component {
	onSubmit(values) {
		const {username, password, firstName, lastName, email} = values;
		const user = {username, password, firstName, lastName, email};
		console.log(values);
		localStorage.setItem("username", user.username);
		alert('registration details submitted');
		return this.props
			.dispatch(registerUser(user))
			.then(() => this.props.dispatch(login(username, password)));
	}
	render() {
		return (
			<form className="registration-form" onSubmit={this.props.handleSubmit(values => 
				this.onSubmit(values))}>
				<fieldset>
					<label htmlFor="first-name"></label>			
					<Field component= {Input}
						name="firstName"
						type="text"
						placeholder="First Name" validate={[required, nonEmpty, isTrimmed]}
					/>

					<label htmlFor="last-name"></label>			
					<Field component={Input}
						name="lastName"
						type="text"
						placeholder="Last Name" validate={[required, nonEmpty, isTrimmed]}
					/>

					<label htmlFor="username"></label>			
					<Field component={Input}
						name="username"
						type="text"
						placeholder="User Name" validate={[required, nonEmpty, isTrimmed]}
					/>

					<label htmlFor="email"></label>			
					<Field component={Input}
						name="email"
						type="text"
						placeholder="Email" validate={[required, nonEmpty, isTrimmed]}
					/>

					<label htmlFor="password"></label>			
					<Field component={Input}
						name="password"
						type="password"
						placeholder="Password"
						validate={[required, length({min: 8, max: 72}), isTrimmed]}
					/>

					<label htmlFor="password_confirm"> </label>			
					<Field component={Input}
						name="password_confirm"
						type="password"
						placeholder="Confirm Password"
						validate={[required, nonEmpty, matches('password')]}
					/>

					<label></label>
					<button 
						className="registration-btn" 
						type="submit"
						disabled={this.props.pristine || this.props.submitting}
					>
						Sign up
					</button>
				</fieldset>
			</form>
		)
	}
}

export default reduxForm({
	form: 'registration',
	onSubmitFail: (errors, dispatch) =>
		dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);