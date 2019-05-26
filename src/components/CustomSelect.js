import React from 'react';
import Options from './ScheduleSelectOptions';
import Select from '@material-ui/core/Select';

import './ScheduleSelect.css';


 

const CustomSelect = props => {
    return (
        <Select 
            value={props.value} 
            onChange={props.onChange}
            native={true}
            className={props.className}
        >
            <Options />
        </Select>
        )
}


export default CustomSelect;