import React from 'react';
import ScheduleSelectOptions from './ScheduleSelectOptions';
import Select from '@material-ui/core/Select';

import './ScheduleSelect.css';


 

const ScheduleSelect = props => {
    return (
        <Select 
            value={props.value} 
            onChange={props.onChange}
            native={true}
            className={props.className}
        >
            <ScheduleSelectOptions className={props.optionClass} />
        </Select>
        )
}


export default ScheduleSelect;