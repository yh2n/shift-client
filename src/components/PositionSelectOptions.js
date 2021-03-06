import React from 'react';

const PositionSelectOptions = () => {
    const positions = [
        "Bartender", 
        "Barback", 
        "Barista",
        "Busser", 
        "Hostess/Host", 
        "Maitre d'" , 
        "Manager", 
        "Runner", 
        "Server", 
        "Sommelier" 
    ]
    const options = positions.map(position => {
        return <option 
            key={position} 
            value={position}
            >
                {position}
            </option>
    })
    return options
}

export default PositionSelectOptions;