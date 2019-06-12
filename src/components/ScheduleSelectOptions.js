import React from 'react';
import moment from 'moment';


const ScheduleSelectOptions = props => {
    let options = [];
    let year = moment().get('year');

        for(let i = 1; i <= 52; i++) {
            options.push(
                <option 
                    value={i} 
                    key={i}
                    className={props.optionClass}
                >
                { moment(`${year}`).add(`${i}`, 'weeks').format(" M/D/YYYY") }
                </option>)
    }
    return options;
}


export default ScheduleSelectOptions;