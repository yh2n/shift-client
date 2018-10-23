import React, { Component } from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import { registerAdmin } from '../actions/register_admin';
import { login } from '../actions/auth';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';

import Input from './Input';

import './RegistrationForm.css';

export class AdminRegistrationForm extends Component {
	onSubmit(values) {
		const {username, password, firstName, lastName, email} = values;
		const admin = {username, password, firstName, lastName, email};
		console.log(values);
		alert('registration details submitted');
		return this.props
		.dispatch(registerAdmin(admin))
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
						Register
					</button>
				</fieldset>
			</form>
		)
	}
}

export default reduxForm({
	form: 'admin_registration',
	onSubmitFail: (errors, dispatch) =>
		dispatch(focus('admin_registration', Object.keys(errors)[0]))
})(AdminRegistrationForm);