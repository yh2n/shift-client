import React, { Component } from 'react';
import { WeekShiftButton, WeekendShiftButton } from './ScheduleShiftButton';


export class WeekDropDown extends Component {
    render() {
        // renders nothing if the "show" prop is false
    //     if(!this.props.show) {
    //     return null;
    // }
    
    return (
            <WeekShiftButton 
                breakfastSelected={this.props.breakfastSelected}
                toggleBreakfast={() => {return this.props.selectBreakfast()}}
                lunchSelected={this.props.lunchSelected}
                toggleLunch={() => {return (this.props.selectLunch())}}
                dinnerSelected={this.props.dinnerSelected}
                toggleDinner={()=>{return (this.props.selectDinner())}}
                setSchedule={() => this.props.setSchedule()}
            />
    )
  }
}

export class WeekendDropDown extends Component {
    render() {
        // renders nothing if the "show" prop is false
    //     if(!this.props.show) {
    //     return null;
    // }
    
    return (
            <WeekendShiftButton 
                breakfastSelected={this.props.breakfastSelected}
                toggleBreakfast={this.props.selectBreakfast}
                brunchSelected={this.props.brunchSelected}
                toggleBrunch={this.props.selectBrunch}
                dinnerSelected={this.props.dinnerSelected}
                toggleDinner={this.props.selectDinner}
            />
    )
  }
}

export default WeekDropDown;