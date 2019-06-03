import React from 'react';
import moment from 'moment';


const CurrentWeekDayRow = props => {
    let week = props.week;
    let year = moment().get('year')

    return (
        <>
            <div className="user_schedule_position"></div>	
            <div className={moment().day(1).format("Do") === moment().format("Do") ? "user_schedule_days current" : "user_schedule_days"}>
                Mon <span className={moment().day(1).format("Do") === moment().format("Do") ? "user_day_number current" : "user_day_number"}>
                        {moment(`${year}`).add(`${week}`, 'weeks').add(0, 'days').format("D")}
                    </span>
            </div>                
            <div className={moment().day(2).format("Do") === moment().format("Do") ? "user_schedule_days current" : "user_schedule_days"}>
                Tue <span className={moment().day(2).format("Do") === moment().format("Do") ? "user_day_number current" : "user_day_number"}>
                        {moment(`${year}`).add(`${week}`, 'weeks').add(1, 'days').format("D")}
                    </span>
            </div>	
            <div className={moment().day(3).format("Do") === moment().format("Do") ? "user_schedule_days current" : "user_schedule_days"}>
                Wed <span className={moment().day(3).format("Do") === moment().format("Do") ? "user_day_number current" : "user_day_number"}>
                        {moment(`${year}`).add(`${week}`, 'weeks').add(2, 'days').format("D")}
                    </span>
            </div>	
            <div className={moment().day(4).format("Do") === moment().format("Do") ? "user_schedule_days current" : "user_schedule_days"}>
                Thu <span className={moment().day(4).format("Do") === moment().format("Do") ? "user_day_number current" : "user_day_number"}>
                        {moment(`${year}`).add(`${week}`, 'weeks').add(3, 'days').format("D")}
                    </span>
            </div>
            <div className={moment().day(5).format("Do") === moment().format("Do") ? "user_schedule_days current" : "user_schedule_days"}>
                Fri <span className={moment().day(5).format("Do") === moment().format("Do") ? "user_day_number current" : "user_day_number"}>
                        {moment(`${year}`).add(`${week}`, 'weeks').add(4, 'days').format("D")}
                    </span>
            </div>	
            <div className={moment().day(6).format("Do") === moment().format("Do") ? "user_schedule_days current" : "user_schedule_days"}>
                Sat <span className={moment().day(6).format("Do") === moment().format("Do") ? "user_day_number current" : "user_day_number"}>
                        {moment(`${year}`).add(`${week}`, 'weeks').add(5, 'days').format("D")}
                    </span>
            </div>	
            <div className={moment().day(0).format("Do") === moment().format("Do") ? "user_schedule_days current" : "user_schedule_days"}>
                Sun <span className={moment().day(0).format("Do") === moment().format("Do") ? "user_day_number current" : "user_day_number"}>
                        {moment(`${year}`).add(`${week}`, 'weeks').add(6, 'days').format("D")}
                    </span>
            </div>            
        </>
    )
}

export default CurrentWeekDayRow;