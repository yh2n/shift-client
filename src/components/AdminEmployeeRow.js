import React, { Component } from 'react';
import moment from 'moment';
import { API_BASE_URL } from '../config';


export default class AdminEmployeeRow extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            schedule: {},
            error: null,
            currentWeek: moment().week()
        })
    }

    componentDidMount() {
        this.fetchSchedule();
    }

    fetchSchedule = () => {
        let { id } = this.props;
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
                    let schedule = json[0];
                    this.setState({
                        schedule
                    });
                })
            })
            .catch(err => {
                this.setState({
                    error: 'Could not load schedule...'
                })
                console.log(`${this.state.error} –––––––––––– ${err}`)
            })
    }
    render() {
        const MondayShifts = (
            <div key="monday_shifts">
                <div 
                    key="mo_br"
                    className={this.state.schedule.Mo_br_need_cover ? "red" : ""}
                >
                    {this.state.schedule.Mo_breakfast ? "Breakfast" : ""}
                </div>
                <div 
                    key="mo_lu"
                    className={this.state.schedule.Mo_lunch_need_cover ? "red" : ""}
                >
                    {this.state.schedule.Mo_lunch ? "Lunch" : ""}</div>
                <div 
                    key="mo_di"
                    className={this.state.schedule.Mo_dinner_need_cover ? "red" : ""}
                >
                    {this.state.schedule.Mo_dinner ? "Dinner" : ""}</div>
                <div 
                    key="mo_off"
                    className={this.state.schedule.Mo_can_cover ? "green" : ""}
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
                    >{this.state.schedule.Tu_breakfast ? "Breakfast" : ""}</div>
                    <div 
                        key="tu_lu"
                        className={this.state.schedule.Tu_lunch_need_cover ? "red" : ""}
                    >{this.state.schedule.Tu_lunch ? "Lunch" : ""}</div>
                    <div 
                        key="tu_di"
                        className={this.state.schedule.Tu_dinner_need_cover ? "red" : ""}
                    >{this.state.schedule.Tu_dinner ? "Dinner" : ""}</div>
                    <div 
                        key="tu_off"
                        className={this.state.schedule.Tu_can_cover ? "green" : ""}
                    >{!this.state.schedule.Tu_breakfast && !this.state.schedule.Tu_lunch && !this.state.schedule.Tu_dinner ? "OFF" : ""}</div>
                </div>
            )
        const WednesdayShifts = (
                <div key="wednesday_shifts">
                    <div 
                        key="we_br"
                        className={this.state.schedule.We_br_need_cover ? "red" : ""}
                    >{this.state.schedule.We_breakfast ? "Breakfast" : ""}</div>
                    <div 
                        key="we_lu"
                        className={this.state.schedule.We_lunch_need_cover ? "red" : ""}
                    >{this.state.schedule.We_lunch ? "Lunch" : ""}</div>
                    <div 
                        key="we_di"
                        className={this.state.schedule.We_dinner_need_cover ? "red" : ""}
                    >{this.state.schedule.We_dinner ? "Dinner" : ""}</div>
                    <div 
                        key="we_off"
                        className={this.state.schedule.We_can_cover ? "green" : ""}
                    >{!this.state.schedule.We_breakfast && !this.state.schedule.We_lunch && !this.state.schedule.We_dinner ? "OFF" : ""}</div>
                </div>
            )
        const ThursdayShifts = (
                <div key="thursday_shifts">
                    <div 
                        key="th_br"
                        className={this.state.schedule.Th_br_need_cover ? "red" : ""}
                    >{this.state.schedule.Th_breakfast ? "Breakfast" : ""}</div>
                    <div 
                        key="th_lu"
                        className={this.state.schedule.Th_lunch_need_cover ? "red" : ""}
                    >{this.state.schedule.Th_lunch ? "Lunch" : ""}</div>
                    <div 
                        key="th_di"
                        className={this.state.schedule.Th_dinner_need_cover ? "red" : ""}
                    >{this.state.schedule.Th_dinner ? "Dinner" : ""}</div>
                    <div 
                        key="th_off"
                        className={this.state.schedule.Th_can_cover ? "green" : ""}
                    >{!this.state.schedule.Th_breakfast && !this.state.schedule.Th_lunch && !this.state.schedule.Th_dinner ? "OFF" : ""}</div>
                </div>
            )
        const FridayShifts = (
                <div key="friday_shifts">
                    <div 
                        key="fr_br"
                        className={this.state.schedule.Fr_br_need_cover ? "red" : ""}
                    >{this.state.schedule.Fr_breakfast ? "Breakfast" : ""}</div>
                    <div 
                        key="fr_lu"
                        className={this.state.schedule.Fr_lunch_need_cover ? "red" : ""}
                    >{this.state.schedule.Fr_lunch ? "Lunch" : ""}</div>
                    <div 
                        key="fr_di"
                        className={this.state.schedule.Fr_dinner_need_cover ? "red" : ""}
                    >{this.state.schedule.Fr_dinner ? "Dinner" : ""}</div>
                    <div 
                        key="fr_off"
                        className={this.state.schedule.Fr_can_cover ? "green" : ""}
                    >{!this.state.schedule.Fr_breakfast && !this.state.schedule.Fr_lunch && !this.state.schedule.Fr_dinner ? "OFF" : ""}</div>
                </div>
            )
        const SaturdayShifts = (
                <div key="saturday_shifts">
                    <div 
                        key="sa_br"
                        className={this.state.schedule.Sa_br_need_cover ? "red" : ""}
                    >{this.state.schedule.Sa_breakfast ? "Breakfast" : ""}</div>
                    <div 
                        key="sa_bru"
                        className={this.state.schedule.Sa_brunch_need_cover ? "red" : ""}
                    >{this.state.schedule.Sa_brunch ? "Brunch" : ""}</div>
                    <div 
                        key="sa_di"
                        className={this.state.schedule.Sa_dinner_need_cover ? "red" : ""}
                    >{this.state.schedule.Sa_dinner ? "Dinner" : ""}</div>
                    <div 
                        key="sa_off"
                        className={this.state.schedule.Sa_can_cover ? "green" : ""}
                    >{!this.state.schedule.Sa_breakfast && !this.state.schedule.Sa_brunch && !this.state.schedule.Sa_dinner ? "OFF" : ""}</div>
                </div>
            )
        const SundayShifts = (
                <div key="sunday_shifts">
                    <div 
                        key="su_br"
                        className={this.state.schedule.Su_br_need_cover ? "red" : ""}
                    >{this.state.schedule.Su_breakfast ? "Breakfast" : ""}</div>
                    <div 
                        key="su_bru"
                        className={this.state.schedule.Su_brunch_need_cover ? "red" : ""}
                    >{this.state.schedule.Su_brunch ? "Brunch" : ""}</div>
                    <div 
                        key="su_di"
                        className={this.state.schedule.Su_dinner_need_cover ? "red" : ""}
                    >{this.state.schedule.Su_dinner ? "Dinner" : ""}</div>
                    <div 
                        key="su_off"
                        className={this.state.schedule.Su_can_cover ? "green" : ""}
                    >{!this.state.schedule.Su_breakfast && !this.state.schedule.Su_brunch && !this.state.schedule.Su_dinner ? "OFF" : ""}</div>
                </div>
            )
        
        return (
            <>
                <div className={this.props.className}>
                    {this.props.name}
                </div>
                <div className="admin_schedule_shift" key="Monday">
                    {MondayShifts}
                </div>
                <div className="admin_schedule_shift" key="Tuesday">
                    {TuesdayShifts}
                </div>
                <div className="admin_schedule_shift" key="Wednesday">
                    {WednesdayShifts}
                </div>
                <div className="admin_schedule_shift" key="Thursday">
                    {ThursdayShifts}
                </div>
                <div className="admin_schedule_shift" key="Friday">
                    {FridayShifts}
                </div>
                <div className="admin_schedule_shift" key="Saturday">
                    {SaturdayShifts}
                </div>
                <div className="admin_schedule_shift" key="Sunday">
                    {SundayShifts}
                </div>
            </>
        )
    }
}
