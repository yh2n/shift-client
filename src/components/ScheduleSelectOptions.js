import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import moment from 'moment';


const Options = () => {
    let options = [];
        for(var i = 1; i <= 52; i++) {
            options.push(
                <MenuItem 
                    value={i} 
                    key={i}
                >
                {moment('2019').add(`${i}`, 'weeks').format(" M/D/YYYY")}
                </MenuItem>)
    }
    return options;
}



export default Options;