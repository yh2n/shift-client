import React from 'react';
import moment from 'moment';


 const MonthRow = props => {
    return (
        <>
            <div className={props.className}>
                <div className={props.className}>{moment().format("MMMM YYYY").toUpperCase()}</div>
            </div>
        </>
    )
}


export default MonthRow;