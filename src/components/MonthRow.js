import React from 'react';
import moment from 'moment';


export default function MonthRow() {
    return (
        <>
            <div></div>
            <div></div>
            <div></div>
            <div className="user_current_month">{moment().format("MMMM").toUpperCase()}</div>
            <div className="user_year">{moment().format("YYYY")}</div>
            <div></div>
            <div></div>
            <div></div>
        </>
    )
}