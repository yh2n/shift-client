import React, { Component } from 'react';
import { Field } from 'redux-form';
import Input from './Input';
//import {required, nonEmpty, email} from '../validators';
import './Employee.css';

export default class Employee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inputVal: "gg"
        }
    }
    onInputChange(e) {
        console.log(e);
        console.log(e.target.value);
    }

    render() {
        // if(!this.props.show) {
        //     return null;
        // }
        return (
            <div className="employee_input_div">
                <Field component={Input}
                    //allows each input to work independently
                    name={`${this.props.input.name} firstName`}
                    type="text" 
                    value="dghdg"
                    onChange={() => this.onInputChange()}
                    className="employee-list_input" 
                    //{...required}
                    placeholder="First Name"/>
                <Field component={Input} 
                    name={`${this.props.input.name} lastName`}
                    type="text" 
                    onChange={this.onInputChange}
                    className="employee-list_input" 
                    //validate={nonEmpty}
                    placeholder="Last Name"/>
                <Field component={Input} 
                    name={`${this.props.input.name} phoneNumber`}
                    type="text"
                    onChange={this.onInputChange}
                    className="employee-list_input" 
                    placeholder="Phone Number"/>
                <Field component={Input} 
                    name={`${this.props.input.name} emailAddress`}
                    type="text"
                    onChange={this.onInputChange}
                    className="employee-list_input" 
                    //{...email}
                    placeholder="Email Address"/>
				<button 
                    type="button" 
                    className="employee-list_edit-btn">
                        edit
                </button>
				<button 
                    type="reset" 
                    className="employee-list_reset-btn">
                        reset
                </button>
                <button 
                    type="submit"
                    onClick={this.onSubmit}
                    className="employee-list_save-btn">
                        save
                </button>
            </div>
        )
    }
}