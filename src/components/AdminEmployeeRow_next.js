import React, { Component } from 'react';
import { connect } from 'react-redux';
import { API_BASE_URL } from '../config';
import { WeekDropDown, WeekendDropDown } from './ScheduleDropDown';


export class AdminEmployeeRowNext extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            next_schedule: {},
            loading: false,
            error: null
        })
    }

    componentDidMount() {
        this.fetchSchedule();
    }

    componentDidUpdate() {
        console.log("updated");
        // schedule => this.setState({
        //     schedule
        // });
        console.log(this.state.next_schedule);
        this.setSchedule();
    }

    fetchSchedule = () => {
        let id = this.props.id;
        console.log(id);
        this.setState({
            loading: true,
        })
        console.log(this.state);
        return fetch(`${API_BASE_URL}/employee/${id}/next_schedule`)
            .then(res => {
                console.log(id);
                console.log(this.props.name)
                if (!res.ok) {
                    return Promise.reject(res.statusText);
                }
                return res.json();
            })
            .then(next_schedule => {
                this.setState({
                    next_schedule,
                    loading: false
                })
            })
            .catch(err => {
                this.setState({
                    error: 'Could not load next_schedule',
                    loading: false
                })
                console.log(this.state.error, err)
            })
    }

    setSchedule = () => {
        console.log("change(s) submitted");
        let employees = this.props.employees.employees;
        console.table(employees);
        console.log(JSON.stringify(this.state.next_schedule));
        let id = this.props.id;
        console.log(id, this.props.name);
        console.log(this.state.next_schedule);
        return fetch(`${API_BASE_URL}/employee/${id}/next_schedule`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            
            body: JSON.stringify(this.state.next_schedule),
            //credentials: 'same-origin',
            //mode: 'cors'
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        let employees = this.props.employees.employees;
        console.log(employees);
        console.log(this.state);
        console.log(this.state.next_schedule);

        return [
            <div className="admin_schedule_name">
            {this.props.name}
            </div>,
            <div className="admin_schedule_btns" key="Monday">
                <WeekDropDown
                    breakfastSelected={!this.state.next_schedule.Mo_breakfast}
                    selectBreakfast={() => this.setState((prevState, props) => { return {next_schedule: {...prevState.next_schedule, Mo_breakfast:!prevState.next_schedule.Mo_breakfast}}})}
                    lunchSelected={!this.state.next_schedule.Mo_lunch}
                    selectLunch={() => this.setState((prevState, props) => { return {next_schedule: {...prevState.next_schedule, Mo_lunch:!prevState.next_schedule.Mo_lunch}}})}
                    dinnerSelected={!this.state.next_schedule.Mo_dinner}
                    selectDinner={() => this.setState((prevState, props) => { return {next_schedule: {...prevState.next_schedule, Mo_dinner:!prevState.next_schedule.Mo_dinner}}})}
                    
                />
            </div>,	
            <div className="admin_schedule_btns" key="Tuesday">
                <WeekDropDown
                    breakfastSelected={!this.state.next_schedule.Tu_breakfast}
                    selectBreakfast={() => this.setState((prevState, props) => { return {next_schedule: {...prevState.next_schedule, Tu_breakfast:!prevState.next_schedule.Tu_breakfast}}})}
                    lunchSelected={!this.state.next_schedule.Tu_lunch}
                    selectLunch={() => this.setState((prevState, props) => { return {next_schedule: {...prevState.next_schedule, Tu_lunch:!prevState.next_schedule.Tu_lunch}}})}
                    dinnerSelected={!this.state.next_schedule.Tu_dinner}
                    selectDinner={() => this.setState((prevState, props) => { return {next_schedule: {...prevState.next_schedule, Tu_dinner:!prevState.next_schedule.Tu_dinner}}})}
                    
                />
            </div>,	
            <div className="admin_schedule_btns" key="Wednesday">
                <WeekDropDown
                    breakfastSelected={!this.state.next_schedule.We_breakfast}
                    selectBreakfast={() => this.setState((prevState, props) => { return {next_schedule: {...prevState.next_schedule, We_breakfast:!prevState.next_schedule.We_breakfast}}})}
                    lunchSelected={!this.state.next_schedule.We_lunch}
                    selectLunch={() => this.setState((prevState, props) => { return {next_schedule: {...prevState.next_schedule, We_lunch:!prevState.next_schedule.We_lunch}}})}
                    dinnerSelected={!this.state.next_schedule.We_dinner}
                    selectDinner={() => this.setState((prevState, props) => { return {next_schedule: {...prevState.next_schedule, We_dinner:!prevState.next_schedule.We_dinner}}})}
                />
            </div>,
            <div className="admin_schedule_btns" key="Thursday">
                <WeekDropDown
                    breakfastSelected={!this.state.next_schedule.Th_breakfast}
                    selectBreakfast={() => this.setState((prevState, props) => { return {next_schedule: {...prevState.next_schedule, Th_breakfast:!prevState.next_schedule.Th_breakfast}}})}
                    lunchSelected={!this.state.next_schedule.Th_lunch}
                    selectLunch={() => this.setState((prevState, props) => { return {next_schedule: {...prevState.next_schedule, Th_lunch:!prevState.next_schedule.Th_lunch}}})}
                    dinnerSelected={!this.state.next_schedule.Th_dinner}
                    selectDinner={() => this.setState((prevState, props) => { return {next_schedule: {...prevState.next_schedule, Th_dinner:!prevState.next_schedule.Th_dinner}}})}
                />
            </div>,
            <div className="admin_schedule_btns" key="Friday" >
                <WeekDropDown
                    breakfastSelected = {!this.state.next_schedule.Fr_breakfast}
                    selectBreakfast={() => this.setState((prevState, props) => { return {next_schedule: {...prevState.next_schedule,Fr_breakfast:!prevState.next_schedule.Fr_breakfast}}})}
                    lunchSelected = {!this.state.next_schedule.Fr_lunch}
                    selectLunch={() => this.setState((prevState, props) => { return {next_schedule: {...prevState.next_schedule,Fr_lunch:!prevState.next_schedule.Fr_lunch}}})}
                    dinnerSelected = {!this.state.next_schedule.Fr_dinner}
                    selectDinner={() => this.setState((prevState, props) => { return {next_schedule: {...prevState.next_schedule,Fr_dinner:!prevState.next_schedule.Fr_dinner}}})}
                />
            </div>,
            <div className="admin_schedule_btns" key="Saturday">
                <WeekendDropDown
                    breakfastSelected={!this.state.next_schedule.Sa_breakfast}
                    selectBreakfast={() => this.setState((prevState, props) => { return {next_schedule: {...prevState.next_schedule, Sa_breakfast:!prevState.next_schedule.Sa_breakfast}}})}
                    brunchSelected={!this.state.next_schedule.Sa_brunch}
                    selectBrunch={() => this.setState((prevState, props) => { return {next_schedule: {...prevState.next_schedule, Sa_brunch:!prevState.next_schedule.Sa_brunch}}})}
                    dinnerSelected={!this.state.next_schedule.Sa_dinner}
                    selectDinner={() => this.setState((prevState, props) => { return {next_schedule: {...prevState.next_schedule, Sa_dinner:!prevState.next_schedule.Sa_dinner}}})}
                    
                />
            </div>,
            <div className="admin_schedule_btns" key="Sunday">
                <WeekendDropDown
                    breakfastSelected={!this.state.next_schedule.Su_breakfast}
                    selectBreakfast={() => this.setState((prevState, props) => { return {next_schedule: {...prevState.next_schedule, Su_breakfast:!prevState.next_schedule.Su_breakfast}}})}
                    brunchSelected={!this.state.next_schedule.Su_brunch}
                    selectBrunch={() => this.setState((prevState, props) => { return {next_schedule: {...prevState.next_schedule, Su_brunch:!prevState.next_schedule.Su_brunch}}})}
                    dinnerSelected={!this.state.next_schedule.Su_dinner}
                    selectDinner={() => this.setState((prevState, props) => { return {next_schedule: {...prevState.next_schedule, Su_dinner:!prevState.next_schedule.Su_dinner}}})}
                
                />
            </div>
        ]
    }
}

const mapStateToProps = state => ({
	employees: state.employees
})

export default connect(mapStateToProps)(AdminEmployeeRowNext)