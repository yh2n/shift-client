import React, { Component } from 'react';
import { connect } from 'react-redux';
import { API_BASE_URL } from '../config';

export class UserEmployeeRowNext extends Component {
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

    render() {
        const MondayShifts = (
                <ul>
                    <li key="mo_br">{this.state.next_schedule.Mo_breakfast ? "Breakfast" : ""}</li>
                    <li key="mo_lu">{this.state.next_schedule.Mo_lunch ? "Lunch" : ""}</li>
                    <li key="mo_di">{this.state.next_schedule.Mo_dinner ? "Dinner" : ""}</li>
                    <li key="mo_off">{!this.state.next_schedule.Mo_breakfast && !this.state.next_schedule.Mo_lunch && !this.state.next_schedule.Mo_dinner ? "OFF" : ""}</li>
                </ul>
            )
        const TuesdayShifts = (
                <ul>
                    <li key="tu_br">{this.state.next_schedule.Tu_breakfast ? "Breakfast" : ""}</li>
                    <li key="tu_lu">{this.state.next_schedule.Tu_lunch ? "Lunch" : ""}</li>
                    <li key="tu_di">{this.state.next_schedule.Tu_dinner ? "Dinner" : ""}</li>
                    <li key="tu_off">{!this.state.next_schedule.Tu_breakfast && !this.state.next_schedule.Tu_lunch && !this.state.next_schedule.Tu_dinner ? "OFF" : ""}</li>
                </ul>
            )
        const WednesdayShifts = (
                <ul>
                    <li key="we_br">{this.state.next_schedule.We_breakfast ? "Breakfast" : ""}</li>
                    <li key="we_lu">{this.state.next_schedule.We_lunch ? "Lunch" : ""}</li>
                    <li key="we_di">{this.state.next_schedule.We_dinner ? "Dinner" : ""}</li>
                    <li key="we_off">{!this.state.next_schedule.We_breakfast && !this.state.next_schedule.We_lunch && !this.state.next_schedule.We_dinner ? "OFF" : ""}</li>
                </ul>
            )
        const ThursdayShifts = (
                <ul>
                    <li key="th_br">{this.state.next_schedule.Th_breakfast ? "Breakfast" : ""}</li>
                    <li key="th_lu">{this.state.next_schedule.Th_lunch ? "Lunch" : ""}</li>
                    <li key="th_di">{this.state.next_schedule.Th_dinner ? "Dinner" : ""}</li>
                    <li key="th_off">{!this.state.next_schedule.Th_breakfast && !this.state.next_schedule.Th_lunch && !this.state.next_schedule.Th_dinner ? "OFF" : ""}</li>
                </ul>
            )
        const FridayShifts = (
                <ul>
                    <li key="fr_br">{this.state.next_schedule.Fr_breakfast ? "Breakfast" : ""}</li>
                    <li key="fr_lu">{this.state.next_schedule.Fr_lunch ? "Lunch" : ""}</li>
                    <li key="fr_di">{this.state.next_schedule.Fr_dinner ? "Dinner" : ""}</li>
                    <li key="fr_off">{!this.state.next_schedule.Fr_breakfast && !this.state.next_schedule.Fr_lunch && !this.state.next_schedule.Fr_dinner ? "OFF" : ""}</li>
                </ul>
            )
        const SaturdayShifts = (
                <ul>
                    <li key="sa_br">{this.state.next_schedule.Sa_breakfast ? "Breakfast" : ""}</li>
                    <li key="sa_bru">{this.state.next_schedule.Sa_brunch ? "Brunch" : ""}</li>
                    <li key="sa_di">{this.state.next_schedule.Sa_dinner ? "Dinner" : ""}</li>
                    <li key="sa_off">{!this.state.next_schedule.Sa_breakfast && !this.state.next_schedule.Sa_brunch && !this.state.next_schedule.Sa_dinner ? "OFF" : ""}</li>
                </ul>
            )
        const SundayShifts = (
                <ul>
                    <li key="su_br">{this.state.next_schedule.Su_breakfast ? "Breakfast" : ""}</li>
                    <li key="su_bru">{this.state.next_schedule.Su_brunch ? "Brunch" : ""}</li>
                    <li key="su_di">{this.state.next_schedule.Su_dinner ? "Dinner" : ""}</li>
                    <li key="su_off">{!this.state.next_schedule.Su_breakfast && !this.state.next_schedule.Su_brunch && !this.state.next_schedule.Su_dinner ? "OFF" : ""}</li>
                </ul>
            )
        
        return [
                <div className={this.props.className}>
                    {this.props.name}
                </div>,
                <div className="user_schedule_btns" key="Monday">
                    {MondayShifts}
                </div>,
                <div className="user_schedule_btns" key="Tuesday">
                    {TuesdayShifts}
                </div>,
                <div className="user_schedule_btns" key="Wednesday">
                    {WednesdayShifts}
                </div>,
                <div className="user_schedule_btns" key="Thursday">
                    {ThursdayShifts}
                </div>,
                <div className="user_schedule_btns" key="Friday">
                    {FridayShifts}
                </div>,
                <div className="user_schedule_btns" key="Saturday">
                    {SaturdayShifts}
                </div>,
                <div className="user_schedule_btns" key="Sunday">
                    {SundayShifts}
                </div>
        ]
    }
}

const mapStateToProps = state => ({
	employees: state.employees
})

export default connect(mapStateToProps)(UserEmployeeRowNext)