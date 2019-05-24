import React, { Component } from 'react';
import Options from './ScheduleSelectOptions';
import Select from '@material-ui/core/Select';

 

// const ScheduleSelect = (props) => {
//     return (
//         <Select value={props.selectedWeek} onChange={props.onChange}>
//             <Options />
//         </Select>
//     )
// }

export default class ScheduleSelect extends Component {
    render() {
        return (
            <Select value={this.props.selectedWeek} onChange={this.props.onChange}>
            <Options />
        </Select>
        );
    }
}

// export default ScheduleSelect;