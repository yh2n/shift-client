import React from 'react';
import InstructionsSentence from './InstructionsSentence'


const AnimationsInstructions = props => {
    return (
        // <div className={ props.className }>
        //     <i className={ props.icon } style={props.style}></i>
        //     <div className="animations_text icon_text">Get notified</div>
        //     <div className="animations_text">Receive schedule updates and requests in real-time</div>
        //     <div className="animations_text">Pick up open shifts</div>
        //     <div className="animations_text">Keep track of last minutes changes</div>
        // </div>

        <div className="cell-phone_instructions">
            <i className="fas fa-bell landing_page_bell" style={{'fontSize': '40px', color: '#5D87BF'}}></i>
            {/* <div className="animations_text icon_text">Get notified</div> */}
            <InstructionsSentence 
                className={props.classOne}
                text={props.textOne}
            />
            <div className="animations_text">Receive schedule updates and requests in real-time</div>
            <div className="animations_text">Pick up open shifts</div>
            <div className="animations_text">Keep track of last minutes changes</div>
        </div> 
    )
}

export default AnimationsInstructions;