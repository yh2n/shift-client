import React, { Component } from 'react';
import moment from 'moment';
import Pusher from 'pusher-js';

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
                    key="Mo_br_mob"
                    className={this.state.schedule.Mo_br_need_cover ? "red" : ""}
                >
                    {this.state.schedule.Mo_breakfast && this.props.shiftFormat === "mobile" ? "Brkfst" : ""}
                </div>
                <div 
                    key="Mo_br"
                    className={this.state.schedule.Mo_br_need_cover ? "red" : ""}
                >
                    {this.state.schedule.Mo_breakfast && this.props.shiftFormat === "desktop" ? "Breakfast" : ""}
                </div>
                <div 
                    key="Mo_lu_mob"
                    className={this.state.schedule.Mo_lunch_need_cover ? "red" : ""}
                >
                    {this.state.schedule.Mo_lunch && this.props.shiftFormat === "mobile" ? "Lun" : ""}
                </div>
                <div 
                    key="Mo_lu"
                    className={this.state.schedule.Mo_lunch_need_cover ? "red" : ""}
                >
                    {this.state.schedule.Mo_lunch && this.props.shiftFormat === "desktop" ? "Lunch" : ""}
                </div>
                <div 
                    key="Mo_di_mob"
                    className={this.state.schedule.Mo_dinner_need_cover ? "red" : ""}
                >
                    {this.state.schedule.Mo_dinner && this.props.shiftFormat === "mobile" ? "Din" : ""}
                </div>
                <div 
                    key="Mo_di"
                    className={this.state.schedule.Mo_dinner_need_cover ? "red" : ""}
                >
                    {this.state.schedule.Mo_dinner && this.props.shiftFormat === "desktop" ? "Dinner" : ""}
                </div>
                <div 
                    key="Mo_off"
                    className={this.state.schedule.Mo_can_cover ? "green" : ""}
                >
                    {!this.state.schedule.Mo_breakfast && !this.state.schedule.Mo_lunch && !this.state.schedule.Mo_dinner ? "OFF" : ""}
                </div>
            </div>
        )
        const TuesdayShifts = (
                <div key="tuesday_shifts">
                    <div 
                        key="Tu_br_mob"
                        className={this.state.schedule.Tu_br_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.Tu_breakfast && this.props.shiftFormat === "mobile" ? "Brkfst" : ""}
                    </div>
                    <div 
                        key="Tu_br"
                        className={this.state.schedule.Tu_br_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.Tu_breakfast && this.props.shiftFormat === "desktop" ? "Breakfast" : ""}
                    </div>
                    <div 
                        key="Tu_lu_mob"
                        className={this.state.schedule.Tu_lunch_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.Tu_lunch && this.props.shiftFormat === "mobile" ? "Lun" : ""}
                    </div>
                    <div 
                        key="Tu_lu"
                        className={this.state.schedule.Tu_lunch_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.Tu_lunch && this.props.shiftFormat === "desktop" ? "Lunch" : ""}
                    </div>
                    <div 
                        key="Tu_di_mob"
                        className={this.state.schedule.Tu_dinner_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.Tu_dinner && this.props.shiftFormat === "mobile" ? "Din" : ""}
                    </div>
                    <div 
                        key="Tu_di"
                        className={this.state.schedule.Tu_dinner_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.Tu_dinner && this.props.shiftFormat === "desktop" ? "Dinner" : ""}
                    </div>
                    <div 
                        key="Tu_off"
                        className={this.state.schedule.Tu_can_cover ? "green" : ""}
                    >
                        {!this.state.schedule.Tu_breakfast && !this.state.schedule.Tu_lunch && !this.state.schedule.Tu_dinner ? "OFF" : ""}
                    </div>
                </div>
            )
        const WednesdayShifts = (
                <div key="wednesday_shifts">
                    <div 
                        key="We_br_mob"
                        className={this.state.schedule.We_br_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.We_breakfast && this.props.shiftFormat === "mobile" ? "Brkfst" : ""}
                    </div>
                    <div 
                        key="We_br"
                        className={this.state.schedule.We_br_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.We_breakfast && this.props.shiftFormat === "desktop" ? "Breakfast" : ""}
                    </div>
                    <div 
                        key="We_lu_mob"
                        className={this.state.schedule.We_lunch_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.We_lunch && this.props.shiftFormat === "mobile" ? "Lun" : ""}
                    </div>
                    <div 
                        key="We_lu"
                        className={this.state.schedule.We_lunch_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.We_lunch && this.props.shiftFormat === "desktop" ? "Lunch" : ""}
                    </div>
                    <div 
                        key="We_di_mob"
                        className={this.state.schedule.We_dinner_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.We_dinner && this.props.shiftFormat === "mobile" ? "Din" : ""}
                    </div>
                    <div 
                        key="We_di"
                        className={this.state.schedule.We_dinner_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.We_dinner && this.props.shiftFormat === "desktop" ? "Dinner" : ""}
                    </div>
                    <div 
                        key="We_off"
                        className={this.state.schedule.We_can_cover ? "green" : ""}
                    >
                        {!this.state.schedule.We_breakfast && !this.state.schedule.We_lunch && !this.state.schedule.We_dinner ? "OFF" : ""}
                    </div>
                </div>
            )
        const ThursdayShifts = (
                <div key="thursday_shifts">
                    <div 
                        key="Th_br_mob"
                        className={this.state.schedule.Th_br_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.Th_breakfast && this.props.shiftFormat === "mobile" ? "Brkfst" : ""}
                    </div>
                    <div 
                        key="Th_br"
                        className={this.state.schedule.Th_br_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.Th_breakfast && this.props.shiftFormat === "desktop" ? "Breakfast" : ""}
                    </div>
                    <div 
                        key="Th_lu_mob"
                        className={this.state.schedule.Th_lunch_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.Th_lunch && this.props.shiftFormat === "mobile" ? "Lun" : ""}
                    </div>
                    <div 
                        key="Th_lu"
                        className={this.state.schedule.Th_lunch_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.Th_lunch && this.props.shiftFormat === "desktop" ? "Lunch" : ""}
                    </div>
                    <div 
                        key="Th_di_mob"
                        className={this.state.schedule.Th_dinner_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.Th_dinner && this.props.shiftFormat === "mobile" ? "Din" : ""}
                    </div>
                    <div 
                        key="Th_di"
                        className={this.state.schedule.Th_dinner_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.Th_dinner && this.props.shiftFormat === "desktop" ? "Dinner" : ""}
                    </div>
                    <div 
                        key="Th_off"
                        className={this.state.schedule.Th_can_cover ? "green" : ""}
                    >
                        {!this.state.schedule.Th_breakfast && !this.state.schedule.Th_lunch && !this.state.schedule.Th_dinner ? "OFF" : ""}
                    </div>
                </div>
            )
        const FridayShifts = (
                <div key="friday_shifts">
                    <div 
                        key="Fr_br_mob"
                        className={this.state.schedule.Fr_br_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.Fr_breakfast && this.props.shiftFormat === "mobile" ? "Brkfst" : ""}
                    </div>
                    <div 
                        key="Fr_br"
                        className={this.state.schedule.Fr_br_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.Fr_breakfast && this.props.shiftFormat === "desktop" ? "Breakfast" : ""}
                    </div>
                    <div 
                        key="Fr_lu_mob"
                        className={this.state.schedule.Fr_lunch_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.Fr_lunch && this.props.shiftFormat === "mobile" ? "Lun" : ""}
                    </div>
                    <div 
                        key="Fr_lu"
                        className={this.state.schedule.Fr_lunch_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.Fr_lunch && this.props.shiftFormat === "desktop" ? "Lunch" : ""}
                    </div>
                    <div 
                        key="Fr_di_mob"
                        className={this.state.schedule.Fr_dinner_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.Fr_dinner && this.props.shiftFormat === "mobile" ? "Din" : ""}
                    </div>
                    <div 
                        key="Fr_di"
                        className={this.state.schedule.Fr_dinner_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.Fr_dinner && this.props.shiftFormat === "desktop" ? "Dinner" : ""}
                    </div>
                    <div 
                        key="Fr_off"
                        className={this.state.schedule.Fr_can_cover ? "green" : ""}
                    >
                        {!this.state.schedule.Fr_breakfast && !this.state.schedule.Fr_lunch && !this.state.schedule.Fr_dinner ? "OFF" : ""}
                    </div>
                </div>
            )
        const SaturdayShifts = (
                <div key="saturday_shifts">
                    <div 
                        key="Sa_br_mob"
                        className={this.state.schedule.Sa_br_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.Sa_breakfast && this.props.shiftFormat === "mobile" ? "Brkfst" : ""}
                    </div>
                    <div 
                        key="Sa_br"
                        className={this.state.schedule.Sa_br_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.Sa_breakfast && this.props.shiftFormat === "desktop" ? "Breakfast" : ""}
                    </div>
                    <div 
                        key="Sa_bru_mob"
                        className={this.state.schedule.Sa_brunch_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.Sa_brunch && this.props.shiftFormat === "mobile" ? "Brun" : ""}
                    </div>
                    <div 
                        key="Sa_bru"
                        className={this.state.schedule.Sa_brunch_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.Sa_brunch && this.props.shiftFormat === "desktop" ? "Brunch" : ""}
                    </div>
                    <div 
                        key="Sa_di_mob"
                        className={this.state.schedule.Sa_dinner_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.Sa_dinner && this.props.shiftFormat === "mobile" ? "Din" : ""}
                    </div>
                    <div 
                        key="Sa_di"
                        className={this.state.schedule.Sa_dinner_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.Sa_dinner && this.props.shiftFormat === "desktop" ? "Dinner" : ""}
                    </div>
                    <div 
                        key="Sa_off"
                        className={this.state.schedule.Sa_can_cover ? "green" : ""}
                    >
                        {!this.state.schedule.Sa_breakfast && !this.state.schedule.Sa_brunch && !this.state.schedule.Sa_dinner ? "OFF" : ""}
                    </div>
                </div>
            )
        const SundayShifts = (
                <div key="sunday_shifts">
                    <div 
                        key="Su_br_mob"
                        className={this.state.schedule.Su_br_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.Su_breakfast && this.props.shiftFormat === "mobile" ? "Brkfst" : ""}
                    </div>
                    <div 
                        key="Su_br"
                        className={this.state.schedule.Su_br_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.Su_breakfast && this.props.shiftFormat === "desktop" ? "Breakfast" : ""}
                    </div>
                    <div 
                        key="Su_bru_mob"
                        className={this.state.schedule.Su_brunch_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.Su_brunch && this.props.shiftFormat === "mobile" ? "Brun" : ""}
                    </div>
                    <div 
                        key="Su_bru"
                        className={this.state.schedule.Su_brunch_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.Su_brunch && this.props.shiftFormat === "desktop" ? "Brunch" : ""}
                    </div>
                    <div 
                        key="Su_di_mob"
                        className={this.state.schedule.Su_dinner_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.Su_dinner && this.props.shiftFormat === "mobile" ? "Din" : ""}
                    </div>
                    <div 
                        key="Su_di"
                        className={this.state.schedule.Su_dinner_need_cover ? "red" : ""}
                    >
                        {this.state.schedule.Su_dinner && this.props.shiftFormat === "desktop" ? "Dinner" : ""}
                    </div>
                    <div 
                        key="Su_off"
                        className={this.state.schedule.Su_can_cover ? "green" : ""}
                    >
                        {!this.state.schedule.Su_breakfast && !this.state.schedule.Su_brunch && !this.state.schedule.Su_dinner ? "OFF" : ""}
                    </div>
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
