import React from 'react';
import moment from 'moment';


 const SelectedMonthRow = props => {
     let year = moment().get('year')
    return (
        <>
            <div className={props.className}>
                <div className={props.selectedMonthClass}>{moment(`${year}`).add(`${props.selectedWeek}`, 'weeks').format("MMMM YYYY").toUpperCase()}</div>
            </div>
        </>
    )
}


export default SelectedMonthRow;