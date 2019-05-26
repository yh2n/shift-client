import React from 'react';
import moment from 'moment';


const ScheduleSelectOptions = () => {
    let options = [];
        for(var i = 1; i <= 52; i++) {
            options.push(
                <option 
                    value={i} 
                    key={i}
                >
                {moment('2019').add(`${i}`, 'weeks').format(" M/D/YYYY")}
                </option>)
    }
    return options;
}


export default ScheduleSelectOptions;