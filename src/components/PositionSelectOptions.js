import React from 'react';

const PositionSelectOptions = props => {
    const positions = [
        props.name === "position" ? "Select your position..." : props.name,
        "Bartender", 
        "Barback", 
        "Busser", 
        "Captain", 
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