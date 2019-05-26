import React from 'react';
import Select from '@material-ui/core/Select';
import PositionSelectOptions from './PositionSelectOptions';


const PositionSelect = (props) => {
    return (
        <Select 
            value={props.value} 
            onChange={props.onChange}
            native={true}
            className={props.className}
        >
            <PositionSelectOptions />
        </Select>
        )
}


export default PositionSelect;