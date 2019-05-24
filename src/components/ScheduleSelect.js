import React, { Component } from 'react';
import Options from './ScheduleSelectOptions';
import Select from '@material-ui/core/Select';

import './ScheduleSelect.css';


 

const ScheduleSelect = (props) => {
    return (
        <Select 
            value={props.selectedWeek} 
            onChange={props.onChange}
            native={true}
            className="schedule-select"
        >
            <Options />
        </Select>
        )
}


export default ScheduleSelect;