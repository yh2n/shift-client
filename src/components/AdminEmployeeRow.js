import React, { Component } from 'react';
import { connect } from 'react-redux';
import { API_BASE_URL } from '../config';
import { WeekDropDown, WeekendDropDown } from './ScheduleDropDown';


export class AdminEmployeeRow extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            schedule: {},
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
        console.log(this.state.schedule);
        this.setSchedule();
    }

    fetchSchedule = () => {
        let id = this.props.id;
        console.log(id);
        this.setState({
            loading: true,
        })
        console.log(this.state);
        return fetch(`${API_BASE_URL}/employee/${id}/schedule`)
            .then(res => {
                console.log(id);
                console.log(this.props.name)
                if (!res.ok) {
                    return Promise.reject(res.statusText);
                }
                return res.json();
            })
            .then(schedule => {
                this.setState({
                    schedule,
                    loading: false
                })
            })
            .catch(err => {
                this.setState({
                    error: 'Could not load schedule',
                    loading: false
                })
                console.log(this.state.error, err)
            })
    }

    setSchedule = () => {
        console.log("change(s) submitted");
        let employees = this.props.employees.employees;
        console.table(employees);
        console.log(JSON.stringify(this.state.schedule));
        let id = this.props.id;
        console.log(id, this.props.name);
        console.log(this.state.schedule);
        return fetch(`${API_BASE_URL}/employee/${id}/schedule`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            
            body: JSON.stringify(this.state.schedule),
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
        console.log(this.state.schedule);

        return [
            <div className="admin_schedule_name">
            {this.props.name}
            </div>,
            <div className="admin_schedule_btns" key="Monday">
                <WeekDropDown
                    breakfastSelected={!this.state.schedule.Mo_breakfast}
                    selectBreakfast={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Mo_breakfast:!prevState.schedule.Mo_breakfast}}})}
                    lunchSelected={!this.state.schedule.Mo_lunch}
                    selectLunch={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Mo_lunch:!prevState.schedule.Mo_lunch}}})}
                    dinnerSelected={!this.state.schedule.Mo_dinner}
                    selectDinner={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Mo_dinner:!prevState.schedule.Mo_dinner}}})}
                    
                />
            </div>,	
            <div className="admin_schedule_btns" key="Tuesday">
                <WeekDropDown
                    breakfastSelected={!this.state.schedule.Tu_breakfast}
                    selectBreakfast={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Tu_breakfast:!prevState.schedule.Tu_breakfast}}})}
                    lunchSelected={!this.state.schedule.Tu_lunch}
                    selectLunch={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Tu_lunch:!prevState.schedule.Tu_lunch}}})}
                    dinnerSelected={!this.state.schedule.Tu_dinner}
                    selectDinner={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Tu_dinner:!prevState.schedule.Tu_dinner}}})}
                    
                />
            </div>,	
            <div className="admin_schedule_btns" key="Wednesday">
                <WeekDropDown
                    breakfastSelected={!this.state.schedule.We_breakfast}
                    selectBreakfast={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, We_breakfast:!prevState.schedule.We_breakfast}}})}
                    lunchSelected={!this.state.schedule.We_lunch}
                    selectLunch={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, We_lunch:!prevState.schedule.We_lunch}}})}
                    dinnerSelected={!this.state.schedule.We_dinner}
                    selectDinner={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, We_dinner:!prevState.schedule.We_dinner}}})}
                />
            </div>,
            <div className="admin_schedule_btns" key="Thursday">
                <WeekDropDown
                    breakfastSelected={!this.state.schedule.Th_breakfast}
                    selectBreakfast={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Th_breakfast:!prevState.schedule.Th_breakfast}}})}
                    lunchSelected={!this.state.schedule.Th_lunch}
                    selectLunch={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Th_lunch:!prevState.schedule.Th_lunch}}})}
                    dinnerSelected={!this.state.schedule.Th_dinner}
                    selectDinner={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Th_dinner:!prevState.schedule.Th_dinner}}})}
                />
            </div>,
            <div className="admin_schedule_btns" key="Friday" >
                <WeekDropDown
                    breakfastSelected = {!this.state.schedule.Fr_breakfast}
                    selectBreakfast={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule,Fr_breakfast:!prevState.schedule.Fr_breakfast}}})}
                    lunchSelected = {!this.state.schedule.Fr_lunch}
                    selectLunch={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule,Fr_lunch:!prevState.schedule.Fr_lunch}}})}
                    dinnerSelected = {!this.state.schedule.Fr_dinner}
                    selectDinner={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule,Fr_dinner:!prevState.schedule.Fr_dinner}}})}
                />
            </div>,
            <div className="admin_schedule_btns" key="Saturday">
                <WeekendDropDown
                    breakfastSelected={!this.state.schedule.Sa_breakfast}
                    selectBreakfast={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Sa_breakfast:!prevState.schedule.Sa_breakfast}}})}
                    brunchSelected={!this.state.schedule.Sa_brunch}
                    selectBrunch={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Sa_brunch:!prevState.schedule.Sa_brunch}}})}
                    dinnerSelected={!this.state.schedule.Sa_dinner}
                    selectDinner={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Sa_dinner:!prevState.schedule.Sa_dinner}}})}
                    
                />
            </div>,
            <div className="admin_schedule_btns" key="Sunday">
                <WeekendDropDown
                    breakfastSelected={!this.state.schedule.Su_breakfast}
                    selectBreakfast={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Su_breakfast:!prevState.schedule.Su_breakfast}}})}
                    brunchSelected={!this.state.schedule.Su_brunch}
                    selectBrunch={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Su_brunch:!prevState.schedule.Su_brunch}}})}
                    dinnerSelected={!this.state.schedule.Su_dinner}
                    selectDinner={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Su_dinner:!prevState.schedule.Su_dinner}}})}
                
                />
            </div>
        ]
    }
}

const mapStateToProps = state => ({
	employees: state.employees
})

export default connect(mapStateToProps)(AdminEmployeeRow)