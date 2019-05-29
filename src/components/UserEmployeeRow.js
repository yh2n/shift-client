import React, { Component } from 'react';
import { connect } from 'react-redux';
import { API_BASE_URL } from '../config';
import moment from 'moment';


export class UserEmployeeRow extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            schedule: {},
            loading: false,
            error: null,
            currentWeek: moment().week()
        })
    }
    
    componentDidMount() {
        this.fetchSchedule()
    }
    
    componentDidUpdate(prevProps) {
        if(this.props.submittedCount !== prevProps.submittedCount) {
            this.setAvailability();
        }
    }
        
    fetchSchedule = () => {
        let { id } = this.props;
        this.setState({
            loading: true,
    })
        console.log(this.state);
        return fetch(`${API_BASE_URL}/employee/${id}/schedule/${this.state.currentWeek}`, {
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
                    // without this promise => empty response Object
                    // https://stackoverflow.com/questions/36840396/react-fetch-gives-an-empty-response-body
                    // console.log(`++++++++++++ RES IS ${JSON.stringify(json)}`);
                    // after filtering request server-side, we get array of length 1
                    let schedule = json[0];
                    // console.table(schedule);
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

    setAvailability = () => {
        console.log("change(s) submitted!!!!!!!!!!!");
        let employees = this.props.employees.employees;
        console.table(employees);
        console.log(JSON.stringify(this.state.schedule));
        let id = this.props.id;
        console.log(id, this.props.name);
        return fetch(`${API_BASE_URL}/employee/${id}/schedule/${this.state.currentWeek}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            
            body: JSON.stringify(this.state.schedule),
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        const MondayShifts = (
                <div key="monday_shifts">
                    <div 
                        key="mo_br"
                        className={this.state.schedule.Mo_br_need_cover ? "red" : ""}
                        onClick={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Mo_br_need_cover:!prevState.schedule.Mo_br_need_cover}}})}
                    >
                        {this.state.schedule.Mo_breakfast ? "Breakfast" : ""}
                    </div>
                    <div 
                        key="mo_lu"
                        className={this.state.schedule.Mo_lunch_need_cover ? "red" : ""}
                        onClick={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Mo_lunch_need_cover:!prevState.schedule.Mo_lunch_need_cover}}})}
                    >
                        {this.state.schedule.Mo_lunch ? "Lunch" : ""}</div>
                    <div 
                        key="mo_di"
                        className={this.state.schedule.Mo_dinner_need_cover ? "red" : ""}
                        onClick={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Mo_dinner_need_cover:!prevState.schedule.Mo_dinner_need_cover}}})}
                    >
                        {this.state.schedule.Mo_dinner ? "Dinner" : ""}</div>
                    <div 
                        key="mo_off"
                        className={this.state.schedule.Mo_can_cover ? "green" : ""}
                        onClick={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Mo_can_cover:!prevState.schedule.Mo_can_cover}}})}
                    >
                        {!this.state.schedule.Mo_breakfast && !this.state.schedule.Mo_lunch && !this.state.schedule.Mo_dinner ? "OFF" : ""}
                    </div>
                </div>
            )
        const TuesdayShifts = (
                <div key="tuesday_shifts">
                    <div 
                        key="tu_br"
                        className={this.state.schedule.Tu_br_need_cover ? "red" : ""}
                        onClick={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Tu_br_need_cover:!prevState.schedule.Tu_br_need_cover}}})}
                    >{this.state.schedule.Tu_breakfast ? "Breakfast" : ""}</div>
                    <div 
                        key="tu_lu"
                        className={this.state.schedule.Tu_lunch_need_cover ? "red" : ""}
                        onClick={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Tu_lunch_need_cover:!prevState.schedule.Tu_lunch_need_cover}}})}
                    >{this.state.schedule.Tu_lunch ? "Lunch" : ""}</div>
                    <div 
                        key="tu_di"
                        className={this.state.schedule.Tu_dinner_need_cover ? "red" : ""}
                        onClick={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Tu_dinner_need_cover:!prevState.schedule.Tu_dinner_need_cover}}})}    
                    >{this.state.schedule.Tu_dinner ? "Dinner" : ""}</div>
                    <div 
                        key="tu_off"
                        className={this.state.schedule.Tu_can_cover ? "green" : ""}
                        onClick={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Tu_can_cover:!prevState.schedule.Tu_can_cover}}})}
                    >{!this.state.schedule.Tu_breakfast && !this.state.schedule.Tu_lunch && !this.state.schedule.Tu_dinner ? "OFF" : ""}</div>
                </div>
            )
        const WednesdayShifts = (
                <div key="wednesday_shifts">
                    <div 
                        key="we_br"
                        className={this.state.schedule.We_br_need_cover ? "red" : ""}
                        onClick={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, We_br_need_cover:!prevState.schedule.We_br_need_cover}}})}
                    >{this.state.schedule.We_breakfast ? "Breakfast" : ""}</div>
                    <div 
                        key="we_lu"
                        className={this.state.schedule.We_lunch_need_cover ? "red" : ""}
                        onClick={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, We_lunch_need_cover:!prevState.schedule.We_lunch_need_cover}}})}
                    >{this.state.schedule.We_lunch ? "Lunch" : ""}</div>
                    <div 
                        key="we_di"
                        className={this.state.schedule.We_dinner_need_cover ? "red" : ""}
                        onClick={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, We_dinner_need_cover:!prevState.schedule.We_dinner_need_cover}}})}
                    >{this.state.schedule.We_dinner ? "Dinner" : ""}</div>
                    <div 
                        key="we_off"
                        className={this.state.schedule.We_can_cover ? "green" : ""}
                        onClick={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, We_can_cover:!prevState.schedule.We_can_cover}}})}
                    >{!this.state.schedule.We_breakfast && !this.state.schedule.We_lunch && !this.state.schedule.We_dinner ? "OFF" : ""}</div>
                </div>
            )
        const ThursdayShifts = (
                <div key="thursday_shifts">
                    <div 
                        key="th_br"
                        className={this.state.schedule.Th_br_need_cover ? "red" : ""}
                        onClick={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Th_br_need_cover:!prevState.schedule.Th_br_need_cover}}})}    
                    >{this.state.schedule.Th_breakfast ? "Breakfast" : ""}</div>
                    <div 
                        key="th_lu"
                        className={this.state.schedule.Th_lunch_need_cover ? "red" : ""}
                        onClick={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Th_lunch_need_cover:!prevState.schedule.Th_lunch_need_cover}}})}
                    >{this.state.schedule.Th_lunch ? "Lunch" : ""}</div>
                    <div 
                        key="th_di"
                        className={this.state.schedule.Th_dinner_need_cover ? "red" : ""}
                        onClick={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Th_dinner_need_cover:!prevState.schedule.Th_dinner_need_cover}}})}
                    >{this.state.schedule.Th_dinner ? "Dinner" : ""}</div>
                    <div 
                        key="th_off"
                        className={this.state.schedule.Th_can_cover ? "green" : ""}
                        onClick={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Th_can_cover:!prevState.schedule.Th_can_cover}}})}
                    >{!this.state.schedule.Th_breakfast && !this.state.schedule.Th_lunch && !this.state.schedule.Th_dinner ? "OFF" : ""}</div>
                </div>
            )
        const FridayShifts = (
                <div key="friday_shifts">
                    <div 
                        key="fr_br"
                        className={this.state.schedule.Fr_br_need_cover ? "red" : ""}
                        onClick={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Fr_br_need_cover:!prevState.schedule.Fr_br_need_cover}}})}    
                    >{this.state.schedule.Fr_breakfast ? "Breakfast" : ""}</div>
                    <div 
                        key="fr_lu"
                        className={this.state.schedule.Fr_lunch_need_cover ? "red" : ""}
                        onClick={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Fr_lunch_need_cover:!prevState.schedule.Fr_lunch_need_cover}}})}
                    >{this.state.schedule.Fr_lunch ? "Lunch" : ""}</div>
                    <div 
                        key="fr_di"
                        className={this.state.schedule.Fr_dinner_need_cover ? "red" : ""}
                        onClick={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Fr_dinner_need_cover:!prevState.schedule.Fr_dinner_need_cover}}})}
                    >{this.state.schedule.Fr_dinner ? "Dinner" : ""}</div>
                    <div 
                        key="fr_off"
                        className={this.state.schedule.Fr_can_cover ? "green" : ""}
                        onClick={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Fr_can_cover:!prevState.schedule.Fr_can_cover}}})}
                    >{!this.state.schedule.Fr_breakfast && !this.state.schedule.Fr_lunch && !this.state.schedule.Fr_dinner ? "OFF" : ""}</div>
                </div>
            )
        const SaturdayShifts = (
                <div key="saturday_shifts">
                    <div 
                        key="sa_br"
                        className={this.state.schedule.Sa_br_need_cover ? "red" : ""}
                        onClick={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Sa_br_need_cover:!prevState.schedule.Sa_br_need_cover}}})}    
                    >{this.state.schedule.Sa_breakfast ? "Breakfast" : ""}</div>
                    <div 
                        key="sa_bru"
                        className={this.state.schedule.Sa_brunch_need_cover ? "red" : ""}
                        onClick={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Sa_brunch_need_cover:!prevState.schedule.Sa_brunch_need_cover}}})}
                    >{this.state.schedule.Sa_brunch ? "Brunch" : ""}</div>
                    <div 
                        key="sa_di"
                        className={this.state.schedule.Sa_dinner_need_cover ? "red" : ""}
                        onClick={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Sa_dinner_need_cover:!prevState.schedule.Sa_dinner_need_cover}}})}
                    >{this.state.schedule.Sa_dinner ? "Dinner" : ""}</div>
                    <div 
                        key="sa_off"
                        className={this.state.schedule.Sa_can_cover ? "green" : ""}
                        onClick={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Sa_can_cover:!prevState.schedule.Sa_can_cover}}})}
                    >{!this.state.schedule.Sa_breakfast && !this.state.schedule.Sa_brunch && !this.state.schedule.Sa_dinner ? "OFF" : ""}</div>
                </div>
            )
        const SundayShifts = (
                <div key="sunday_shifts">
                    <div 
                        key="su_br"
                        className={this.state.schedule.Su_br_need_cover ? "red" : ""}
                        onClick={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Su_br_need_cover:!prevState.schedule.Su_br_need_cover}}})}    
                    >{this.state.schedule.Su_breakfast ? "Breakfast" : ""}</div>
                    <div 
                        key="su_bru"
                        className={this.state.schedule.Su_brunch_need_cover ? "red" : ""}
                        onClick={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Su_brunch_need_cover:!prevState.schedule.Su_brunch_need_cover}}})}
                    >{this.state.schedule.Su_brunch ? "Brunch" : ""}</div>
                    <div 
                        key="su_di"
                        className={this.state.schedule.Su_dinner_need_cover ? "red" : ""}
                        onClick={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Su_dinner_need_cover:!prevState.schedule.Su_dinner_need_cover}}})}
                    >{this.state.schedule.Su_dinner ? "Dinner" : ""}</div>
                    <div 
                        key="su_off"
                        className={this.state.schedule.Su_can_cover ? "green" : ""}
                        onClick={() => this.setState((prevState, props) => { return {schedule: {...prevState.schedule, Su_can_cover:!prevState.schedule.Su_can_cover}}})}
                    >{!this.state.schedule.Su_breakfast && !this.state.schedule.Su_brunch && !this.state.schedule.Su_dinner ? "OFF" : ""}</div>
                </div>
            )
        
        return (
            <>
                <div className={this.props.className}>
                    {this.props.name}
                </div>
                <div className="user_schedule_shift" key="Monday">
                    {MondayShifts}
                </div>
                <div className="user_schedule_shift" key="Tuesday">
                    {TuesdayShifts}
                </div>
                <div className="user_schedule_shift" key="Wednesday">
                    {WednesdayShifts}
                </div>
                <div className="user_schedule_shift" key="Thursday">
                    {ThursdayShifts}
                </div>
                <div className="user_schedule_shift" key="Friday">
                    {FridayShifts}
                </div>
                <div className="user_schedule_shift" key="Saturday">
                    {SaturdayShifts}
                </div>
                <div className="user_schedule_shift" key="Sunday">
                    {SundayShifts}
                </div>
            </>
        )
    }
}

const mapStateToProps = state => ({
	employees: state.employees
})

export default connect(mapStateToProps)(UserEmployeeRow)