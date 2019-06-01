import React from 'react';
import { WeekShiftButton, WeekendShiftButton } from './ScheduleShiftButton';


const WeekDropDown = props => {
    return (
            <WeekShiftButton 
                breakfastSelected={props.breakfastSelected}
                toggleBreakfast={() => {return props.selectBreakfast()}}
                lunchSelected={props.lunchSelected}
                toggleLunch={() => {return (props.selectLunch())}}
                dinnerSelected={props.dinnerSelected}
                toggleDinner={()=>{return (props.selectDinner())}}
                setSchedule={() => props.setSchedule()}
            />
    )
}

const WeekendDropDown = props => {
    return (
            <WeekendShiftButton 
                breakfastSelected={props.breakfastSelected}
                toggleBreakfast={props.selectBreakfast}
                brunchSelected={props.brunchSelected}
                toggleBrunch={props.selectBrunch}
                dinnerSelected={props.dinnerSelected}
                toggleDinner={props.selectDinner}
            />
    )
}

export  { WeekDropDown, WeekendDropDown };