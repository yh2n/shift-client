import React from 'react';
import moment from 'moment';

const SelectedWeekDayRow = (props) => {
    let selectedWeek = props.newValue
    return(
        <>
            <div key="day-row_position"className="user_schedule_position"></div>	
            <div key="day-row_Mo"className="user_schedule_days">Mon <span className="user_day_number">{moment('2019').add(`${selectedWeek}`, 'weeks').add(0, 'days').format("Do")}</span></div>	
            <div key="day-row_Tu"className="user_schedule_days">Tue <span className="user_day_number">{moment('2019').add(`${selectedWeek}`, 'weeks').add(1, 'days').format("Do")}</span></div>	
            <div key="day-row_We"className="user_schedule_days">Wed <span className="user_day_number">{moment('2019').add(`${selectedWeek}`, 'weeks').add(2, 'days').format("Do")}</span></div>	
            <div key="day-row_Th"className="user_schedule_days">Thu <span className="user_day_number">{moment('2019').add(`${selectedWeek}`, 'weeks').add(3, 'days').format("Do")}</span></div>	
            <div key="day-row_Fr"className="user_schedule_days">Fri <span className="user_day_number">{moment('2019').add(`${selectedWeek}`, 'weeks').add(4, 'days').format("Do")}</span></div>	
            <div key="day-row_Sa"className="user_schedule_days">Sat <span className="user_day_number">{moment('2019').add(`${selectedWeek}`, 'weeks').add(5, 'days').format("Do")}</span></div>	
            <div key="day-row_Su"className="user_schedule_days">Sun <span className="user_day_number">{moment('2019').add(`${selectedWeek}`, 'weeks').add(6, 'days').format("Do")}</span></div>
        </>
    )
}

export default SelectedWeekDayRow;