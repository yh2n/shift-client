import React, { Component } from 'react';
import { API_BASE_URL } from '../../../config.js';

import { WeekDropDown, WeekendDropDown } from '../../ScheduleButtons';


export default class AdminEmployeeRowSelected extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            schedule: {},
            error: null
        })
    }

    componentDidMount() {
        this.fetchSchedule();
    }

    componentDidUpdate(prevProps) {
        if(this.props.selectedWeek !== prevProps.selectedWeek) {
            this.fetchSchedule()
        }
        else if(this.props.submittedCount !== prevProps.submittedCount) {
            this.submitSchedule()
        }
        return;
    }

    fetchSchedule = () => {
        let { id, selectedWeek } = this.props;
        return fetch(`${API_BASE_URL}/employee/${id}/schedule/${selectedWeek}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                }
            })
            .then(res => {
                if (!res.ok) {
                    return Promise.reject(res.statusText);
                }
                return res.json()
                .then(json => {
                    let schedule = json[0];
                    this.setState({
                        schedule
                    });
                })
            })
            .catch(err => {
                this.setState({
                    error: 'Could not load schedule'
                })
                console.log(`${this.state.error} –––––––––––– ${err}`)
            })
    }

    submitSchedule = () => {
        console.log("change(s) submitted");
        console.log(JSON.stringify(this.state.schedule));
        let id = this.props.id;
        console.log(id, this.props.name);
        console.log(this.state.schedule);
        return fetch(`${API_BASE_URL}/admin/${id}/schedule/${this.props.selectedWeek}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(this.state.schedule)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <>
                <div className="admin_schedule_name">
                {this.props.name}
                </div>
                <div className="admin_schedule_btns" key="Monday">
                    <WeekDropDown
                        breakfastSelected={!this.state.schedule.Mo_breakfast}
                        selectBreakfast={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Mo_breakfast:!prevState.schedule.Mo_breakfast}}})}
                        lunchSelected={!this.state.schedule.Mo_lunch}
                        selectLunch={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Mo_lunch:!prevState.schedule.Mo_lunch}}})}
                        dinnerSelected={!this.state.schedule.Mo_dinner}
                        selectDinner={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Mo_dinner:!prevState.schedule.Mo_dinner}}})}
                        device={this.props.device}
                    />
                </div>
                <div className="admin_schedule_btns" key="Tuesday">
                    <WeekDropDown
                        breakfastSelected={!this.state.schedule.Tu_breakfast}
                        selectBreakfast={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Tu_breakfast:!prevState.schedule.Tu_breakfast}}})}
                        lunchSelected={!this.state.schedule.Tu_lunch}
                        selectLunch={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Tu_lunch:!prevState.schedule.Tu_lunch}}})}
                        dinnerSelected={!this.state.schedule.Tu_dinner}
                        selectDinner={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Tu_dinner:!prevState.schedule.Tu_dinner}}})}
                        device={this.props.device}
                    />
                </div>
                <div className="admin_schedule_btns" key="Wednesday">
                    <WeekDropDown
                        breakfastSelected={!this.state.schedule.We_breakfast}
                        selectBreakfast={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, We_breakfast:!prevState.schedule.We_breakfast}}})}
                        lunchSelected={!this.state.schedule.We_lunch}
                        selectLunch={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, We_lunch:!prevState.schedule.We_lunch}}})}
                        dinnerSelected={!this.state.schedule.We_dinner}
                        selectDinner={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, We_dinner:!prevState.schedule.We_dinner}}})}
                        device={this.props.device}
                    />
                </div>
                <div className="admin_schedule_btns" key="Thursday">
                    <WeekDropDown
                        breakfastSelected={!this.state.schedule.Th_breakfast}
                        selectBreakfast={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Th_breakfast:!prevState.schedule.Th_breakfast}}})}
                        lunchSelected={!this.state.schedule.Th_lunch}
                        selectLunch={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Th_lunch:!prevState.schedule.Th_lunch}}})}
                        dinnerSelected={!this.state.schedule.Th_dinner}
                        selectDinner={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Th_dinner:!prevState.schedule.Th_dinner}}})}
                        device={this.props.device}
                    />
                </div>
                <div className="admin_schedule_btns" key="Friday" >
                    <WeekDropDown
                        breakfastSelected = {!this.state.schedule.Fr_breakfast}
                        selectBreakfast={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule,Fr_breakfast:!prevState.schedule.Fr_breakfast}}})}
                        lunchSelected = {!this.state.schedule.Fr_lunch}
                        selectLunch={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule,Fr_lunch:!prevState.schedule.Fr_lunch}}})}
                        dinnerSelected = {!this.state.schedule.Fr_dinner}
                        selectDinner={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule,Fr_dinner:!prevState.schedule.Fr_dinner}}})}
                        device={this.props.device}
                    />
                </div>
                <div className="admin_schedule_btns" key="Saturday">
                    <WeekendDropDown
                        breakfastSelected={!this.state.schedule.Sa_breakfast}
                        selectBreakfast={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Sa_breakfast:!prevState.schedule.Sa_breakfast}}})}
                        brunchSelected={!this.state.schedule.Sa_brunch}
                        selectBrunch={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Sa_brunch:!prevState.schedule.Sa_brunch}}})}
                        dinnerSelected={!this.state.schedule.Sa_dinner}
                        selectDinner={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Sa_dinner:!prevState.schedule.Sa_dinner}}})}
                        device={this.props.device}
                        
                    />
                </div>
                <div className="admin_schedule_btns" key="Sunday">
                    <WeekendDropDown
                        breakfastSelected={!this.state.schedule.Su_breakfast}
                        selectBreakfast={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Su_breakfast:!prevState.schedule.Su_breakfast}}})}
                        brunchSelected={!this.state.schedule.Su_brunch}
                        selectBrunch={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Su_brunch:!prevState.schedule.Su_brunch}}})}
                        dinnerSelected={!this.state.schedule.Su_dinner}
                        selectDinner={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Su_dinner:!prevState.schedule.Su_dinner}}})}
                        device={this.props.device}
                    />
                </div>
            </>
        )
    }
}
