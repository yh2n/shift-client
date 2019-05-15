import React from 'react';
import moment from 'moment';
 

const ScheduleSelect = (props) => {
    return (
        <select value={props.newValue} onChange={props.onChange}>
            <option value="16">{moment('2019').add(16, 'weeks').format(" M/D/YYYY")}</option>
            <option value="17">{moment('2019').add(17, 'weeks').format(" M/D/YYYY")}</option>
            <option value="18">{moment('2019').add(18, 'weeks').format(" M/D/YYYY")}</option>
            <option value="28">{moment('2019').add(28, 'weeks').format(" M/D/YYYY")}</option>
        </select>
    )
}

export default ScheduleSelect;