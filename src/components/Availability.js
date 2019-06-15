import React, { Component } from 'react';
import { connect} from 'react-redux';
import { API_BASE_URL } from '../config';
import { Weekday, Weekendday } from './Day';
import './AvailabilityPage.css';


export class Availability extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            availability: {},
            error: null,
            updateButtonText: "Update",
            currentUserId: localStorage.getItem("id")
        };
    }

    componentDidMount() {
        this.loadAvailability()
    }

    loadAvailability() {
        this.setState({
            loading: true
        });
        return fetch(`${API_BASE_URL}/employee/${this.state.currentUserId}/availability`)
            .then(res => {
                if (!res.ok) {
                    return Promise.reject(res.statusText);
                }
                return res.json();
            })
            .then(availability => {
                console.log(availability)
                this.setState({availability})
            })
            .catch(err => {
                this.setState({
                    error: 'Could not load availability list',
                    load: false
                })
            })
        }

    submitChanges = e => {
        e.preventDefault();
		
		this.setState({updateButtonText: "Changes submitted!"})
		setTimeout(()=> {
			this.setState({updateButtonText: "Update"})
        },1500)
        
        return fetch(`${API_BASE_URL}/employee/${this.state.currentUserId}/availability`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(this.state.availability),
        })
        .then(res => res.json())
        .then(availability => {
            this.setState({availability})
        })
        .catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <div className="availability_container">
                <div className="availability">
                    <Weekday 
                        day="Mo"
                        breakfastToggled={!this.state.availability.Mo_breakfast}
                        selectBreakfast={() => this.setState((prevState, props) => { return {availability: {...prevState.availability, Mo_breakfast:!prevState.availability.Mo_breakfast}}})}
                        lunchToggled={!this.state.availability.Mo_lunch}
                        selectLunch={() => this.setState((prevState, props) => { return {availability: {...prevState.availability, Mo_lunch:!prevState.availability.Mo_lunch}}})}
                        dinnerToggled={!this.state.availability.Mo_dinner}
                        selectDinner={() => this.setState((prevState, props) => { return {availability: {...prevState.availability, Mo_dinner:!prevState.availability.Mo_dinner}}})}
                        />
                    <Weekday 
                        day="Tu"
                        breakfastToggled={!this.state.availability.Tu_breakfast}
                        selectBreakfast={() => this.setState((prevState, props) => { return {availability: {...prevState.availability, Tu_breakfast:!prevState.availability.Tu_breakfast}}})}
                        lunchToggled={!this.state.availability.Tu_lunch}
                        selectLunch={() => this.setState((prevState, props) => { return {availability: {...prevState.availability, Tu_lunch:!prevState.availability.Tu_lunch}}})}
                        dinnerToggled={!this.state.availability.Tu_dinner}
                        selectDinner={() => this.setState((prevState, props) => { return {availability: {...prevState.availability, Tu_dinner:!prevState.availability.Tu_dinner}}})}
                        />
                    <Weekday 
                        day="We"
                        breakfastToggled={!this.state.availability.We_breakfast}
                        selectBreakfast={() => this.setState((prevState, props) => { return {availability: {...prevState.availability, We_breakfast:!prevState.availability.We_breakfast}}})}
                        lunchToggled={!this.state.availability.We_lunch}
                        selectLunch={() => this.setState((prevState, props) => { return {availability: {...prevState.availability, We_lunch:!prevState.availability.We_lunch}}})}
                        dinnerToggled={!this.state.availability.We_dinner}
                        selectDinner={() => this.setState((prevState, props) => { return {availability: {...prevState.availability, We_dinner:!prevState.availability.We_dinner}}})}
                        />
                    <Weekday 
                        day="Th"
                        breakfastToggled={!this.state.availability.Th_breakfast}
                        selectBreakfast={() => this.setState((prevState, props) => { return {availability: {...prevState.availability, Th_breakfast:!prevState.availability.Th_breakfast}}})}
                        lunchToggled={!this.state.availability.Th_lunch}
                        selectLunch={() => this.setState((prevState, props) => { return {availability: {...prevState.availability, Th_lunch:!prevState.availability.Th_lunch}}})}
                        dinnerToggled={!this.state.availability.Th_dinner}
                        selectDinner={() => this.setState((prevState, props) => { return {availability: {...prevState.availability, Th_dinner:!prevState.availability.Th_dinner}}})}
                        />
                    <Weekday 
                        day="Fr"
                        breakfastToggled={!this.state.availability.Fr_breakfast}
                        selectBreakfast={() => this.setState((prevState, props) => { return {availability: {...prevState.availability, Fr_breakfast:!prevState.availability.Fr_breakfast}}})}
                        lunchToggled={!this.state.availability.Fr_lunch}
                        selectLunch={() => this.setState((prevState, props) => { return {availability: {...prevState.availability, Fr_lunch:!prevState.availability.Fr_lunch}}})}
                        dinnerToggled={!this.state.availability.Fr_dinner}
                        selectDinner={() => this.setState((prevState, props) => { return {availability: {...prevState.availability, Fr_dinner:!prevState.availability.Fr_dinner}}})}
                        />
                    <Weekendday 
                        day="Sa"
                        breakfastToggled={!this.state.availability.Sa_breakfast}
                        selectBreakfast={() => this.setState((prevState, props) => { return {availability: {...prevState.availability, Sa_breakfast:!prevState.availability.Sa_breakfast}}})}
                        brunchToggled={!this.state.availability.Sa_brunch}
                        selectBrunch={() => this.setState((prevState, props) => { return {availability: {...prevState.availability, Sa_brunch:!prevState.availability.Sa_brunch}}})}
                        dinnerToggled={!this.state.availability.Sa_dinner}
                        selectDinner={() => this.setState((prevState, props) => { return {availability: {...prevState.availability, Sa_dinner:!prevState.availability.Sa_dinner}}})}
                        
                        />
                    <Weekendday 
                        day="Su"
                        breakfastToggled={!this.state.availability.Su_breakfast}
                        selectBreakfast={() => this.setState((prevState, props) => { return {availability: {...prevState.availability, Su_breakfast:!prevState.availability.Su_breakfast}}})}
                        brunchToggled={!this.state.availability.Su_brunch}
                        selectBrunch={() => this.setState((prevState, props) => { return {availability: {...prevState.availability, Su_brunch:!prevState.availability.Su_brunch}}})}
                        dinnerToggled={!this.state.availability.Su_dinner}
                        selectDinner={() => this.setState((prevState, props) => { return {availability: {...prevState.availability, Su_dinner:!prevState.availability.Su_dinner}}})}
                        
                    />
                </div>
                <button
					type="submit"
					className="submit_availability"
					onClick={this.submitChanges}
				>
					{this.state.updateButtonText}
				</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.auth.currentUser
})

export default connect(mapStateToProps)(Availability)