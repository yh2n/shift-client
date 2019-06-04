import React from 'react';

const PositionRow = props => {
    return (
        <>
            <div key="positon-row_position" className={props.positionClass}>{props.position}</div>	
            <div key="positon-row_Mo" className={props.positionRowClass}></div>	
            <div key="positon-row_Tu" className={props.positionRowClass}></div>	
            <div key="positon-row_We" className={props.positionRowClass}></div>	
            <div key="positon-row_Th" className={props.positionRowClass}></div>	
            <div key="positon-row_Fr" className={props.positionRowClass}></div>	
            <div key="positon-row_Sa" className={props.positionRowClass}></div>	
            <div key="positon-row_Su" className={props.positionRowClass}></div>
        </>
    )
}

export default PositionRow;