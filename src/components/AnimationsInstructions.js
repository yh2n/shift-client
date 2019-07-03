import React from 'react';
import InstructionsSentence from './InstructionsSentence'


const AnimationsInstructions = props => {
    return (
        <div className={props.instructionsClass}>
            <i className={props.icon} style={props.style}></i>
            <InstructionsSentence 
                className="animations_text icon_text"
                text={props.centerText}
            />
            { props.sentences }
        </div> 
    )
}

export default AnimationsInstructions;