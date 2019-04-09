import React from 'react';

export default function PositionRow(props) {
    return (
        <>
            <div key="positon-row_position"className="user_schedule_position">{props.position}</div>	
            <div key="positon-row_Mo"className="user_schedule_days"></div>	
            <div key="positon-row_Tu"className="user_schedule_days"></div>	
            <div key="positon-row_We"className="user_schedule_days"></div>	
            <div key="positon-row_Th"className="user_schedule_days"></div>	
            <div key="positon-row_Fr"className="user_schedule_days"></div>	
            <div key="positon-row_Sa"className="user_schedule_days"></div>	
            <div key="positon-row_Su"className="user_schedule_days"></div>
        </>
    )
}