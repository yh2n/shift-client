import React from 'react';
import moment from 'moment';


 const MonthRow = props => {
    return (
        <>
            <div className={props.className}>
                <div className="month-current">{moment().format("MMMM YYYY").toUpperCase()}</div>
            </div>
        </>
    )
}


export default MonthRow;