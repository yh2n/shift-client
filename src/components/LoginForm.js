import React, { Component } from 'react';
import { reduxForm, Field, focus } from 'redux-form';
import Input from './Input';
import { login } from '../actions/auth';
import { required, nonEmpty } from '../validators';
import './LoginForm.css';

export class LoginForm extends Component {

	onSubmit(values) {
		console.log(values);
		const { username, password } = values;
		const user = {username, password};
		localStorage.setItem("username", user.username);
		return this.props.dispatch(login(username, password));
		}
	
	render() {
		let error;
        if (this.props.error) {
            error = (
                <div className="form_error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
		return (
			<div>
				<form 
					className="login-form" 
					onSubmit={this.props.handleSubmit(values => this.onSubmit(values)
					)}>
					{error}
					<fieldset>
						<label htmlFor="username" name="username"></label>
						<Field 
							component={Input} 
							name="username"
							type="text" 
							validate={[required, nonEmpty]}
							placeholder="Username"
						/>
						<label htmlFor="password" name="password"></label>
						<Field 
							component={Input} 
							name="password"
							type="password" 
							validate={[required, nonEmpty]}
							placeholder="Password"
						/>
						
						<button 
							className="log_in_button"
							type="submit"
							disabled={this.props.pristine || this.props.submitting}
						>
							Log In
						</button>
					</fieldset>
				</form>
			</div>
			
		)
	}
}

export default reduxForm({
	form: 'login',
	onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);