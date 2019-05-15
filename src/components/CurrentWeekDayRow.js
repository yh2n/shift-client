import React from 'react';
import moment from 'moment';


const CurrentWeekDayRow = () => {
let currentWeek = moment().week();
    return (
        <>
            <div key="day-row_position"className="user_schedule_position"></div>	
            <div key="day-row_Mo" className={moment().day(1).format("Do") === moment().format("Do") ? "user_schedule_days current" : "user_schedule_days"}>Mon <span className={moment().day(1).format("Do") === moment().format("Do") ? "user_day_number current" : "user_day_number"}>{moment('2019').add(`${currentWeek}`, 'weeks').add(0, 'days').format("Do")}</span></div>                
            <div key="day-row_Tu" className={moment().day(2).format("Do") === moment().format("Do") ? "user_schedule_days current" : "user_schedule_days"}>Tue <span className={moment().day(2).format("Do") === moment().format("Do") ? "user_day_number current" : "user_day_number"}>{moment('2019').add(`${currentWeek}`, 'weeks').add(1, 'days').format("Do")}</span></div>	
            <div key="day-row_We" className={moment().day(3).format("Do") === moment().format("Do") ? "user_schedule_days current" : "user_schedule_days"}>Wed <span className={moment().day(3).format("Do") === moment().format("Do") ? "user_day_number current" : "user_day_number"}>{moment('2019').add(`${currentWeek}`, 'weeks').add(2, 'days').format("Do")}</span></div>	
            <div key="day-row_Th" className={moment().day(4).format("Do") === moment().format("Do") ? "user_schedule_days current" : "user_schedule_days"}>Thu <span className={moment().day(4).format("Do") === moment().format("Do") ? "user_day_number current" : "user_day_number"}>{moment('2019').add(`${currentWeek}`, 'weeks').add(3, 'days').format("Do")}</span></div>
            <div key="day-row_Fr" className={moment().day(5).format("Do") === moment().format("Do") ? "user_schedule_days current" : "user_schedule_days"}>Fri <span className={moment().day(5).format("Do") === moment().format("Do") ? "user_day_number current" : "user_day_number"}>{moment('2019').add(`${currentWeek}`, 'weeks').add(4, 'days').format("Do")}</span></div>	
            <div key="day-row_Sa" className={moment().day(6).format("Do") === moment().format("Do") ? "user_schedule_days current" : "user_schedule_days"}>Sat <span className={moment().day(6).format("Do") === moment().format("Do") ? "user_day_number current" : "user_day_number"}>{moment('2019').add(`${currentWeek}`, 'weeks').add(5, 'days').format("Do")}</span></div>	
            <div key="day-row_Su" className={moment().day(0).format("Do") === moment().format("Do") ? "user_schedule_days current" : "user_schedule_days"}>Sun <span className={moment().day(0).format("Do") === moment().format("Do") ? "user_day_number current" : "user_day_number"}>{moment('2019').add(`${currentWeek}`, 'weeks').add(6, 'days').format("Do")}</span></div>            
        </>
    )
}

export default CurrentWeekDayRow;