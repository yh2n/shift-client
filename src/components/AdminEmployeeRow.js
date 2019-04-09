import React, { Component } from 'react';
import { connect } from 'react-redux';
import { API_BASE_URL } from '../config';
import moment from 'moment';


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

    // componentDidUpdate() {
    //     console.log("updated");
    //     // schedule => this.setState({
    //     //     schedule
    //     // });
    //     console.log(this.state.schedule);
    //     this.setSchedule();
    // }

    fetchSchedule = () => {
        // console.log(`!!!!!!!!!!!!!!!!${this.state.value}`)
        let { id, name } = this.props;
        let currentWeek = JSON.stringify((moment().week() - 1))
        let employees = this.props.employees.employees;
        this.setState({
            loading: true,
    })
    console.log(this.state);
    return fetch(`${API_BASE_URL}/employee/${id}/schedule/${currentWeek}`, {
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
        let employees = this.props.employees.employees;
        console.table(employees);
        console.log(JSON.stringify(this.state.schedule));
        let id = this.props.id;
        console.log(id, this.props.name);
        console.log(typeof(this.state.schedule));
        return fetch(`${API_BASE_URL}/employee/${id}/schedule`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            
            // body: JSON.stringify(this.state.schedule),
            //credentials: 'same-origin',
            //mode: 'cors'
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const MondayShifts = (
            <ul key="monday_shifts">
                <li 
                    key="mo_br"
                    className={this.state.schedule.Mo_br_need_cover ? "red" : ""}
                >
                    {this.state.schedule.Mo_breakfast ? "Breakfast" : ""}
                </li>
                <li 
                    key="mo_lu"
                    className={this.state.schedule.Mo_lunch_need_cover ? "red" : ""}
                >
                    {this.state.schedule.Mo_lunch ? "Lunch" : ""}</li>
                <li 
                    key="mo_di"
                    className={this.state.schedule.Mo_dinner_need_cover ? "red" : ""}
                >
                    {this.state.schedule.Mo_dinner ? "Dinner" : ""}</li>
                <li 
                    key="mo_off"
                    className={this.state.schedule.Mo_can_cover ? "green" : ""}
                >
                    {!this.state.schedule.Mo_breakfast && !this.state.schedule.Mo_lunch && !this.state.schedule.Mo_dinner ? "OFF" : ""}
                </li>
            </ul>
        )
    const TuesdayShifts = (
            <ul key="tuesday_shifts">
                <li 
                    key="tu_br"
                    className={this.state.schedule.Tu_br_need_cover ? "red" : ""}
                >{this.state.schedule.Tu_breakfast ? "Breakfast" : ""}</li>
                <li 
                    key="tu_lu"
                    className={this.state.schedule.Tu_lunch_need_cover ? "red" : ""}
                >{this.state.schedule.Tu_lunch ? "Lunch" : ""}</li>
                <li 
                    key="tu_di"
                    className={this.state.schedule.Tu_dinner_need_cover ? "red" : ""}
                >{this.state.schedule.Tu_dinner ? "Dinner" : ""}</li>
                <li 
                    key="tu_off"
                    className={this.state.schedule.Tu_can_cover ? "green" : ""}
                >{!this.state.schedule.Tu_breakfast && !this.state.schedule.Tu_lunch && !this.state.schedule.Tu_dinner ? "OFF" : ""}</li>
            </ul>
        )
    const WednesdayShifts = (
            <ul key="wednesday_shifts">
                <li 
                    key="we_br"
                    className={this.state.schedule.We_br_need_cover ? "red" : ""}
                >{this.state.schedule.We_breakfast ? "Breakfast" : ""}</li>
                <li 
                    key="we_lu"
                    className={this.state.schedule.We_lunch_need_cover ? "red" : ""}
                >{this.state.schedule.We_lunch ? "Lunch" : ""}</li>
                <li 
                    key="we_di"
                    className={this.state.schedule.We_dinner_need_cover ? "red" : ""}
                >{this.state.schedule.We_dinner ? "Dinner" : ""}</li>
                <li 
                    key="we_off"
                    className={this.state.schedule.We_can_cover ? "green" : ""}
                >{!this.state.schedule.We_breakfast && !this.state.schedule.We_lunch && !this.state.schedule.We_dinner ? "OFF" : ""}</li>
            </ul>
        )
    const ThursdayShifts = (
            <ul key="thursday_shifts">
                <li 
                    key="th_br"
                    className={this.state.schedule.Th_br_need_cover ? "red" : ""}
                >{this.state.schedule.Th_breakfast ? "Breakfast" : ""}</li>
                <li 
                    key="th_lu"
                    className={this.state.schedule.Th_lunch_need_cover ? "red" : ""}
                >{this.state.schedule.Th_lunch ? "Lunch" : ""}</li>
                <li 
                    key="th_di"
                    className={this.state.schedule.Th_dinner_need_cover ? "red" : ""}
                >{this.state.schedule.Th_dinner ? "Dinner" : ""}</li>
                <li 
                    key="th_off"
                    className={this.state.schedule.Th_can_cover ? "green" : ""}
                >{!this.state.schedule.Th_breakfast && !this.state.schedule.Th_lunch && !this.state.schedule.Th_dinner ? "OFF" : ""}</li>
            </ul>
        )
    const FridayShifts = (
            <ul key="friday_shifts">
                <li 
                    key="fr_br"
                    className={this.state.schedule.Fr_br_need_cover ? "red" : ""}
                >{this.state.schedule.Fr_breakfast ? "Breakfast" : ""}</li>
                <li 
                    key="fr_lu"
                    className={this.state.schedule.Fr_lunch_need_cover ? "red" : ""}
                >{this.state.schedule.Fr_lunch ? "Lunch" : ""}</li>
                <li 
                    key="fr_di"
                    className={this.state.schedule.Fr_dinner_need_cover ? "red" : ""}
                >{this.state.schedule.Fr_dinner ? "Dinner" : ""}</li>
                <li 
                    key="fr_off"
                    className={this.state.schedule.Fr_can_cover ? "green" : ""}
                >{!this.state.schedule.Fr_breakfast && !this.state.schedule.Fr_lunch && !this.state.schedule.Fr_dinner ? "OFF" : ""}</li>
            </ul>
        )
    const SaturdayShifts = (
            <ul key="saturday_shifts">
                <li 
                    key="sa_br"
                    className={this.state.schedule.Sa_br_need_cover ? "red" : ""}
                >{this.state.schedule.Sa_breakfast ? "Breakfast" : ""}</li>
                <li 
                    key="sa_bru"
                    className={this.state.schedule.Sa_brunch_need_cover ? "red" : ""}
                >{this.state.schedule.Sa_brunch ? "Brunch" : ""}</li>
                <li 
                    key="sa_di"
                    className={this.state.schedule.Sa_dinner_need_cover ? "red" : ""}
                >{this.state.schedule.Sa_dinner ? "Dinner" : ""}</li>
                <li 
                    key="sa_off"
                    className={this.state.schedule.Sa_can_cover ? "green" : ""}
                >{!this.state.schedule.Sa_breakfast && !this.state.schedule.Sa_brunch && !this.state.schedule.Sa_dinner ? "OFF" : ""}</li>
            </ul>
        )
    const SundayShifts = (
            <ul key="sunday_shifts">
                <li 
                    key="su_br"
                    className={this.state.schedule.Su_br_need_cover ? "red" : ""}
                >{this.state.schedule.Su_breakfast ? "Breakfast" : ""}</li>
                <li 
                    key="su_bru"
                    className={this.state.schedule.Su_brunch_need_cover ? "red" : ""}
                >{this.state.schedule.Su_brunch ? "Brunch" : ""}</li>
                <li 
                    key="su_di"
                    className={this.state.schedule.Su_dinner_need_cover ? "red" : ""}
                >{this.state.schedule.Su_dinner ? "Dinner" : ""}</li>
                <li 
                    key="su_off"
                    className={this.state.schedule.Su_can_cover ? "green" : ""}
                >{!this.state.schedule.Su_breakfast && !this.state.schedule.Su_brunch && !this.state.schedule.Su_dinner ? "OFF" : ""}</li>
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

const mapStateToProps = state => ({
	employees: state.employees
})

export default connect(mapStateToProps)(AdminEmployeeRow)