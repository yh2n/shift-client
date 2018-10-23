import React, { Component } from 'react';
import { API_BASE_URL } from '../config';

import './ContactAvailability.css';

export class ContactWeekDay extends Component {
    render() {
        return (
            <div>
                <div className="contact_availability_day">
                    {this.props.day}
                </div>
                <div className={this.props.breakfastToggled ? "availability_btn breakfast unavailable" : "availability_btn breakfast available"}>
                    Breakfast
                </div>
                <div className={this.props.lunchToggled ? "availability_btn lunch unavailable" : "availability_btn lunch available"}>
                    Lunch
                </div>
                <div className={this.props.dinnerToggled ? "availability_btn dinner unavailable" : "availability_btn dinner available"}>
                    Dinner
                </div>
            </div>
        )
    }
}

export class ContactWeekendDay extends Component {
    render() {
        return (
            <div>
                <div className="contact_availability_day">
                    {this.props.day}
                </div>
                <div className={this.props.breakfastToggled ? "availability_btn breakfast unavailable" : "availability_btn breakfast available"}>
                    Breakfast
                </div>
                <div className={this.props.brunchToggled ? "availability_btn brunch unavailable" : "availability_btn brunch available"}>
                    Brunch
                </div>
                <div className={this.props.dinnerToggled ? "availability_btn dinner unavailable" : "availability_btn dinner available"}>
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
            loading: false,
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
                    availability,
                    loading: false
                })
            })
            .catch(err => {
                this.setState({
                    error: 'Could not load availability list',
                    loading: false
                })
                console.log(this.state.error, err)
            })
        }
    render() {
        return (
            <div className="contact_availability_container">
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
        )
    }
}