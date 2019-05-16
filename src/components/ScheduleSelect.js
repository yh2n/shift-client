import React from 'react';
import Options from './ScheduleSelectOptions';
 

const ScheduleSelect = (props) => {
    return (
        <select value={props.newValue} onChange={props.onChange}>
            <Options />
        </select>
    )
}

export default ScheduleSelect;