import React, { Component } from 'react';
import { API_BASE_URL } from '../config';

export default class UserEmployeeRowSelected extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            schedule: {},
            error: null,
        })
    }

    componentDidMount() {
        this.fetchSchedule();
    }

    componentDidUpdate(prevProps) {
        if(this.props.selectedWeek !== prevProps.selectedWeek) {
            this.fetchSchedule()
        }
        return null;
    }

    fetchSchedule = () => {
        let { id } = this.props;
    return fetch(`${API_BASE_URL}/employee/${id}/schedule/${this.props.selectedWeek}`, {
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
                <div key="mon_shifts_next">
                    <div key="mo_br_next">
                        {this.state.schedule.Mo_breakfast && this.props.shiftFormat === "mobile" ? "Brkfst" : ""}
                        {this.state.schedule.Mo_breakfast && this.props.shiftFormat === "desktop" ? "Breakfast" : ""}
                    </div>
                    <div key="mo_lu_next">
                        {this.state.schedule.Mo_lunch && this.props.shiftFormat === "mobile" ? "Lun" : ""}
                        {this.state.schedule.Mo_lunch && this.props.shiftFormat === "desktop" ? "Lunch" : ""}
                    </div>
                    <div key="mo_di_next">
                        {this.state.schedule.Mo_dinner && this.props.shiftFormat === "mobile" ? "Din" : ""}
                        {this.state.schedule.Mo_dinner && this.props.shiftFormat === "desktop" ? "Dinner" : ""}
                    </div>
                    <div key="mo_off_next">
                        {!this.state.schedule.Mo_breakfast && !this.state.schedule.Mo_lunch && !this.state.schedule.Mo_dinner ? "OFF" : ""}
                    </div>
                </div>
            )
        const TuesdayShifts = (
                <div key="tue_shifts_next">
                    <div key="tu_br_next">
                        {this.state.schedule.Tu_breakfast && this.props.shiftFormat === "mobile" ? "Brkfst" : ""}
                        {this.state.schedule.Tu_breakfast && this.props.shiftFormat === "desktop" ? "Breakfast" : ""}
                    </div>
                    <div key="tu_lu_next">
                        {this.state.schedule.Tu_lunch && this.props.shiftFormat === "mobile" ? "Lun" : ""}
                        {this.state.schedule.Tu_lunch && this.props.shiftFormat === "desktop" ? "Lunch" : ""}
                    </div>
                    <div key="tu_di_next">
                        {this.state.schedule.Tu_dinner && this.props.shiftFormat === "mobile" ? "Din" : ""}
                        {this.state.schedule.Tu_dinner && this.props.shiftFormat === "desktop" ? "Dinner" : ""}
                    </div>
                    <div key="tu_off_next">
                        {!this.state.schedule.Tu_breakfast && !this.state.schedule.Tu_lunch && !this.state.schedule.Tu_dinner ? "OFF" : ""}
                    </div>
                </div>
            )
        const WednesdayShifts = (
                <div key="wed_shifts_next">
                    <div key="we_br_next">
                        {this.state.schedule.We_breakfast && this.props.shiftFormat === "mobile" ? "Brkfst" : ""}
                        {this.state.schedule.We_breakfast && this.props.shiftFormat === "desktop" ? "Breakfast" : ""}
                    </div>
                    <div key="we_lu_next">
                        {this.state.schedule.We_lunch && this.props.shiftFormat === "mobile" ? "Lun" : ""}
                        {this.state.schedule.We_lunch && this.props.shiftFormat === "desktop" ? "Lunch" : ""}
                    </div>
                    <div key="we_di_next">
                        {this.state.schedule.We_dinner && this.props.shiftFormat === "mobile" ? "Din" : ""}
                        {this.state.schedule.We_dinner && this.props.shiftFormat === "desktop" ? "Dinner" : ""}
                    </div>
                    <div key="we_off_next">
                        {!this.state.schedule.We_breakfast && !this.state.schedule.We_lunch && !this.state.schedule.We_dinner ? "OFF" : ""}
                    </div>
                </div>
            )
        const ThursdayShifts = (
                <div key="thu_shifts_next"> 
                    <div key="th_br_next">
                        {this.state.schedule.Th_breakfast && this.props.shiftFormat === "mobile" ? "Brkfst" : ""}
                        {this.state.schedule.Th_breakfast && this.props.shiftFormat === "desktop" ? "Breakfast" : ""}
                    </div>
                    <div key="th_lu_next">
                        {this.state.schedule.Th_lunch && this.props.shiftFormat === "mobile" ? "Lun" : ""}
                        {this.state.schedule.Th_lunch && this.props.shiftFormat === "desktop" ? "Lunch" : ""}
                    </div>
                    <div key="th_di_next">
                        {this.state.schedule.Th_dinner && this.props.shiftFormat === "mobile" ? "Din" : ""}
                        {this.state.schedule.Th_dinner && this.props.shiftFormat === "desktop" ? "Dinner" : ""}
                    </div>
                    <div key="th_off_next">{!this.state.schedule.Th_breakfast && !this.state.schedule.Th_lunch && !this.state.schedule.Th_dinner ? "OFF" : ""}</div>
                </div>
            )
        const FridayShifts = (
                <div key="fri_shifts_next">
                    <div key="fr_br_next">
                        {this.state.schedule.Fr_breakfast && this.props.shiftFormat === "mobile" ? "Brkfst" : ""}
                        {this.state.schedule.Fr_breakfast && this.props.shiftFormat === "desktop" ? "Breakfast" : ""}
                    </div>
                    <div key="fr_lu_next">
                        {this.state.schedule.Fr_lunch && this.props.shiftFormat === "mobile" ? "Lun" : ""}
                        {this.state.schedule.Fr_lunch && this.props.shiftFormat === "desktop" ? "Lunch" : ""}
                    </div>
                    <div key="fr_di_next">
                        {this.state.schedule.Fr_dinner && this.props.shiftFormat === "mobile" ? "Din" : ""}
                        {this.state.schedule.Fr_dinner && this.props.shiftFormat === "desktop" ? "Dinner" : ""}
                    </div>
                    <div key="fr_off_next">{!this.state.schedule.Fr_breakfast && !this.state.schedule.Fr_lunch && !this.state.schedule.Fr_dinner ? "OFF" : ""}
                </div>
                </div>
            )
        const SaturdayShifts = (
                <div key="sat_shifts_next">
                    <div key="sa_br_next">
                        {this.state.schedule.Sa_breakfast && this.props.shiftFormat === "mobile" ? "Brkfst" : ""}
                        {this.state.schedule.Sa_breakfast && this.props.shiftFormat === "desktop" ? "Breakfast" : ""}
                    </div>
                    <div key="sa_bru_next">
                        {this.state.schedule.Sa_brunch && this.props.shiftFormat === "mobile" ? "Brun" : ""}
                        {this.state.schedule.Sa_brunch && this.props.shiftFormat === "desktop" ? "Brunch" : ""}
                    </div>
                    <div key="sa_di_next">
                        {this.state.schedule.Sa_dinner && this.props.shiftFormat === "mobile" ? "Din" : ""}
                        {this.state.schedule.Sa_dinner && this.props.shiftFormat === "desktop" ? "Dinner" : ""}
                    </div>
                    <div key="sa_off_next">
                        {!this.state.schedule.Sa_breakfast && !this.state.schedule.Sa_brunch && !this.state.schedule.Sa_dinner ? "OFF" : ""}
                    </div>
                </div>
            )
        const SundayShifts = (
                <div key="sun_shifts_next">
                    <div key="su_br_next">
                        {this.state.schedule.Su_breakfast && this.props.shiftFormat === "mobile" ? "Brkfst" : ""}
                        {this.state.schedule.Su_breakfast && this.props.shiftFormat === "desktop" ? "Breakfast" : ""}
                    </div>
                    <div key="su_bru_next">
                        {this.state.schedule.Su_brunch && this.props.shiftFormat === "mobile" ? "Brun" : ""}
                        {this.state.schedule.Su_brunch && this.props.shiftFormat === "desktop" ? "Brunch" : ""}
                    </div>
                    <div key="su_di_next">
                        {this.state.schedule.Su_dinner && this.props.shiftFormat === "mobile" ? "Din" : ""}
                        {this.state.schedule.Su_dinner && this.props.shiftFormat === "desktop" ? "Dinner" : ""}
                    </div>
                    <div key="su_off_next">
                        {!this.state.schedule.Su_breakfast && !this.state.schedule.Su_brunch && !this.state.schedule.Su_dinner ? "OFF" : ""}
                    </div>
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
