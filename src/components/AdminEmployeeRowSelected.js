import React, { Component } from 'react';
import { API_BASE_URL } from '../config';
import { WeekDropDown, WeekendDropDown } from './ScheduleDropDown';


export default class AdminEmployeeRowSelected extends Component {
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
        console.log(this.state)
    }

    componentDidUpdate(prevProps) {
        if(this.props.newValue !== prevProps.newValue) {
            this.fetchSchedule()

        }
        // else if(this.props.newValue !== prevProps.newValue) {
        //     this.resetSchedule()
        // }
        else if(this.props.submittedCount !== prevProps.submittedCount) {
            // this.setSchedule()
            console.log("submitted")
        }
        return;
    }

    fetchSchedule = () => {
        let { id, newValue } = this.props;
        this.setState({
            loading: true,
    })
    console.log(this.state);
    return fetch(`${API_BASE_URL}/employee/${id}/selected-schedule/${newValue}`, {
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
                error: 'Could not load schedule',
                loading: false
            })
            console.log(`${this.state.error} –––––––––––– ${err}`)
        })
}

    setSchedule = () => {
        console.log("change(s) submitted");
        // let employees = this.props.employees.employees;
        // console.table(employees);
        console.log(JSON.stringify(this.state.schedule));
        let id = this.props.id;
        console.log(id, this.props.name);
        console.log(this.state.schedule);
        //      !!!!!!!!!     this.setState({[schedule[week]]: value})
        return fetch(`${API_BASE_URL}/employee/${id}/schedule/${this.props.newValue}`, {
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

    resetSchedule = () => {
        console.log(`---------------NEW SCHEDULE CREATED ${(this.props.newValue)}`)
        this.setState({
            schedule: {
            week: this.props.newValue,
            Mo_breakfast: false,
            Mo_br_need_cover: false,
            Mo_lunch: false,
            Mo_lunch_need_cover: false,
            Mo_dinner: false,
            Mo_dinner_need_cover: false,
            Mo_can_cover: false,
            Tu_breakfas: false,
            Tu_br_need_cover: false,
            Tu_lunch: false,
            Tu_lunch_need_cover: false,
            Tu_dinner: false,
            Tu_dinner_need_cover: false,
            Tu_can_cover: false,
            We_breakfast: false,
            We_br_need_cover: false,
            We_lunch: false,
            We_lunch_need_cover: false,
            We_dinner: false,
            We_dinner_need_cover: false,
            We_can_cover: false,
            Th_breakfast: false,
            Th_br_need_cover: false,
            Th_lunch: false,
            Th_lunch_need_cover: false,
            Th_dinner: false,
            Th_dinner_need_cover: false,
            Th_can_cover: false,
            Fr_breakfast: false,
            Fr_br_need_cover: false,
            Fr_lunch: false,
            Fr_lunch_need_cover: false,
            Fr_dinner: false,
            Fr_dinner_need_cover: false,
            Fr_can_cover: false,
            Sa_breakfast: false,
            Sa_br_need_cover: false,
            Sa_brunch: false,
            Sa_brunch_need_cover: false,
            Sa_dinner: false,
            Sa_dinner_need_cover: false,
            Sa_can_cover: false,
            Su_breakfast: false,
            Su_br_need_cover: false,
            Su_brunch: false,
            Su_brunch_need_cover: false,
            Su_dinner: false,
            Su_dinner_need_cover: false,
            Su_can_cover: false
            }
        })
    }

    render() {
        // console.log(this.state);
        console.log(`***********************${JSON.stringify(this.state.schedule)}`);

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
                    
                    />
                </div>
            </>
        )
    }
}
