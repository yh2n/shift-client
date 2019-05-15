import React, { Component } from 'react';
import { API_BASE_URL } from '../config';

export default class UserEmployeeRowSelected extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            schedule: {},
            loading: false,
            error: null,
        })
    }

    componentDidMount() {
        this.fetchSchedule();
        console.log(this.props.value)
    }

    componentDidUpdate(prevProps) {
        if(this.props.value !== prevProps.value) {
            this.fetchSchedule()
        }
        return null;
    }

    fetchSchedule = () => {
        let { id, name } = this.props;
        this.setState({
            loading: true,
    })
    console.log(this.state);
    return fetch(`${API_BASE_URL}/employee/${id}/schedule/${this.props.value}`, {
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
                // after filtering request server-side, we get array of length 1
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

    render() {
        const MondayShifts = (
                <ul key="mon_shifts_next">
                    <li key="mo_br_next">{this.state.schedule.Mo_breakfast ? "Breakfast" : ""}</li>
                    <li key="mo_lu_next">{this.state.schedule.Mo_lunch ? "Lunch" : ""}</li>
                    <li key="mo_di_next">{this.state.schedule.Mo_dinner ? "Dinner" : ""}</li>
                    <li key="mo_off_next">{!this.state.schedule.Mo_breakfast && !this.state.schedule.Mo_lunch && !this.state.schedule.Mo_dinner ? "OFF" : ""}</li>
                </ul>
            )
        const TuesdayShifts = (
                <ul key="tue_shifts_next">
                    <li key="tu_br_next">{this.state.schedule.Tu_breakfast ? "Breakfast" : ""}</li>
                    <li key="tu_lu_next">{this.state.schedule.Tu_lunch ? "Lunch" : ""}</li>
                    <li key="tu_di_next">{this.state.schedule.Tu_dinner ? "Dinner" : ""}</li>
                    <li key="tu_off_next">{!this.state.schedule.Tu_breakfast && !this.state.schedule.Tu_lunch && !this.state.schedule.Tu_dinner ? "OFF" : ""}</li>
                </ul>
            )
        const WednesdayShifts = (
                <ul key="wed_shifts_next">
                    <li key="we_br_next">{this.state.schedule.We_breakfast ? "Breakfast" : ""}</li>
                    <li key="we_lu_next">{this.state.schedule.We_lunch ? "Lunch" : ""}</li>
                    <li key="we_di_next">{this.state.schedule.We_dinner ? "Dinner" : ""}</li>
                    <li key="we_off_next">{!this.state.schedule.We_breakfast && !this.state.schedule.We_lunch && !this.state.schedule.We_dinner ? "OFF" : ""}</li>
                </ul>
            )
        const ThursdayShifts = (
                <ul key="thu_shifts_next"> 
                    <li key="th_br_next">{this.state.schedule.Th_breakfast ? "Breakfast" : ""}</li>
                    <li key="th_lu_next">{this.state.schedule.Th_lunch ? "Lunch" : ""}</li>
                    <li key="th_di_next">{this.state.schedule.Th_dinner ? "Dinner" : ""}</li>
                    <li key="th_off_next">{!this.state.schedule.Th_breakfast && !this.state.schedule.Th_lunch && !this.state.schedule.Th_dinner ? "OFF" : ""}</li>
                </ul>
            )
        const FridayShifts = (
                <ul key="fri_shifts_next">
                    <li key="fr_br_next">{this.state.schedule.Fr_breakfast ? "Breakfast" : ""}</li>
                    <li key="fr_lu_next">{this.state.schedule.Fr_lunch ? "Lunch" : ""}</li>
                    <li key="fr_di_next">{this.state.schedule.Fr_dinner ? "Dinner" : ""}</li>
                    <li key="fr_off_next">{!this.state.schedule.Fr_breakfast && !this.state.schedule.Fr_lunch && !this.state.schedule.Fr_dinner ? "OFF" : ""}</li>
                </ul>
            )
        const SaturdayShifts = (
                <ul key="sat_shifts_next">
                    <li key="sa_br_next">{this.state.schedule.Sa_breakfast ? "Breakfast" : ""}</li>
                    <li key="sa_bru_next">{this.state.schedule.Sa_brunch ? "Brunch" : ""}</li>
                    <li key="sa_di_next">{this.state.schedule.Sa_dinner ? "Dinner" : ""}</li>
                    <li key="sa_off_next">{!this.state.schedule.Sa_breakfast && !this.state.schedule.Sa_brunch && !this.state.schedule.Sa_dinner ? "OFF" : ""}</li>
                </ul>
            )
        const SundayShifts = (
                <ul key="sun_shifts_next">
                    <li key="su_br_next">{this.state.schedule.Su_breakfast ? "Breakfast" : ""}</li>
                    <li key="su_bru_next">{this.state.schedule.Su_brunch ? "Brunch" : ""}</li>
                    <li key="su_di_next">{this.state.schedule.Su_dinner ? "Dinner" : ""}</li>
                    <li key="su_off_next">{!this.state.schedule.Su_breakfast && !this.state.schedule.Su_brunch && !this.state.schedule.Su_dinner ? "OFF" : ""}</li>
                </ul>
            )
        
        return (
            <>
                <div className={this.props.className}>
                    {this.props.name}
                </div>
                <div className="user_schedule_btns" key="Monday">
                    {MondayShifts}
                </div>
                <div className="user_schedule_btns" key="Tuesday">
                    {TuesdayShifts}
                </div>
                <div className="user_schedule_btns" key="Wednesday">
                    {WednesdayShifts}
                </div>
                <div className="user_schedule_btns" key="Thursday">
                    {ThursdayShifts}
                </div>
                <div className="user_schedule_btns" key="Friday">
                    {FridayShifts}
                </div>
                <div className="user_schedule_btns" key="Saturday">
                    {SaturdayShifts}
                </div>
                <div className="user_schedule_btns" key="Sunday">
                    {SundayShifts}
                </div>
            </>
        )
    }
}
