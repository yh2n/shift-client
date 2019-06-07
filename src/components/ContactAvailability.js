import React, { Component } from 'react';
import { API_BASE_URL } from '../config';
import { Link } from 'react-router-dom';

import './ContactAvailability.css';


export class ContactWeekDay extends Component {
    render() {
        return (
            <div className="contact_availability_day-container">
                <div className="contact_availability_day">
                    {this.props.day}
                </div>
                <div className={this.props.breakfastToggled ? "contact_availability_shift breakfast-unavailable" : "contact_availability_shift breakfast"}>
                    Breakfast
                </div>
                <div className={this.props.lunchToggled ? "contact_availability_shift lunch-unavailable" : "contact_availability_shift lunch"}>
                    Lunch
                </div>
                <div className={this.props.dinnerToggled ? "contact_availability_shift dinner-unavailable" : "contact_availability_shift dinner"}>
                    Dinner
                </div>
            </div>
        )
    }
}

export class ContactWeekendDay extends Component {
    render() {
        return (
            <div className="contact_availability_day-container">
                <div className="contact_availability_day">
                    {this.props.day}
                </div>
                <div className={this.props.breakfastToggled ? "contact_availability_shift breakfast-unavailable" : "contact_availability_shift breakfast"}>
                    Breakfast
                </div>
                <div className={this.props.brunchToggled ? "contact_availability_shift brunch-unavailable" : "contact_availability_shift brunch"}>
                    Brunch
                </div>
                <div className={this.props.dinnerToggled ? "contact_availability_shift dinner-unavailable" : "contact_availability_shift dinner"}>
                    Dinner
                </div>
            </div>
        )
    }
}

export default class ContactAvailability extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            availability: {},
            error: null
        };
    }

    componentDidMount() {
        this.loadAvailability()
    }


    loadAvailability() {
        this.setState({
            loading: true
        });
        let id = this.props.match.params.id
        console.log(this.props.match);
        return fetch(`${API_BASE_URL}/employee/${id}/availability`)
            .then(res => {
                if (!res.ok) {
                    return Promise.reject(res.statusText);
                }
                return res.json();
            })
            .then(availability => {
                console.log(availability)
                this.setState({
                    availability
                })
            })
            .catch(err => {
                this.setState({
                    error: 'Could not load availability list'
                })
            })
        }
    render() {
        let username = localStorage.getItem("username");

        return (
            <div className="contact_availability_container">
                <div className="contact_availability">
                <ContactWeekDay 
                    day="Mo"
                    breakfastToggled={!this.state.availability.Mo_breakfast}
                    lunchToggled={!this.state.availability.Mo_lunch}
                    dinnerToggled={!this.state.availability.Mo_dinner}
                />
                <ContactWeekDay 
                    day="Tu"
                    breakfastToggled={!this.state.availability.Tu_breakfast}
                    lunchToggled={!this.state.availability.Tu_lunch}
                    dinnerToggled={!this.state.availability.Tu_dinner}
                />
                <ContactWeekDay 
                    day="We"
                    breakfastToggled={!this.state.availability.We_breakfast}
                    lunchToggled={!this.state.availability.We_lunch}
                    dinnerToggled={!this.state.availability.We_dinner}
                />
                <ContactWeekDay 
                    day="Th"
                    breakfastToggled={!this.state.availability.Th_breakfast}
                    lunchToggled={!this.state.availability.Th_lunch}
                    dinnerToggled={!this.state.availability.Th_dinner}
                />
                <ContactWeekDay 
                    day="Fr"
                    breakfastToggled={!this.state.availability.Fr_breakfast}
                    lunchToggled={!this.state.availability.Fr_lunch}
                    dinnerToggled={!this.state.availability.Fr_dinner}
                />
                <ContactWeekendDay 
                    day="Sa"
                    breakfastToggled={!this.state.availability.Sa_breakfast}
                    brunchToggled={!this.state.availability.Sa_brunch}
                    dinnerToggled={!this.state.availability.Sa_dinner}
                />
                <ContactWeekendDay 
                    day="Su"
                    breakfastToggled={!this.state.availability.Su_breakfast}
                    brunchToggled={!this.state.availability.Su_brunch}
                    dinnerToggled={!this.state.availability.Su_dinner}
                />
                </div>
                <Link to={this.props.linkTo} style={{ textDecoration: 'none' }}>
                    <button className="contact_redirect_btn">Back to Contacts</button>
                </Link>
            </div>
        )
    }
}