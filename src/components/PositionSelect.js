import React from 'react';
import Select from '@material-ui/core/Select';
import PositionSelectOptions from './PositionSelectOptions';


const PositionSelect = (props) => {
    return (
        <Select 
            name={props.name}
            value={props.value} 
            onChange={props.onChange}
            native={true}
            className={props.className}
        >
            <PositionSelectOptions name={props.name} />
        </Select>
        )
}


export default PositionSelect;