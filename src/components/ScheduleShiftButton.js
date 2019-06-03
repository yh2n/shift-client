import React, { Component } from 'react';

export class WeekShiftButton extends Component {
    render() {
        return (
            <>
                <button 
                    key="breakfast"
                    type="edit"
                    className={this.props.breakfastSelected ? "schedule_btn off" : "schedule_btn selected" }
                    onClick={this.props.toggleBreakfast}
                >
                    {this.props.shiftFormat === "mobile" ? "Bkfst" : "Breakfast"}
                </button>
                <button 
                    key="lunch"
                    type="edit" 
                    className={this.props.lunchSelected ? "schedule_btn off" : "schedule_btn selected" }
                    onClick={this.props.toggleLunch}
                >
                    {this.props.shiftFormat === "mobile" ? "Lun" : "Lunch"}
                </button>
                <button
                    key="dinner"
                    type="edit"
                    className={this.props.dinnerSelected ? "schedule_btn off" : "schedule_btn selected" }
                    onClick={this.props.toggleDinner}
                >
                    {this.props.shiftFormat === "mobile" ? "Din" : "Dinner"}
                </button>
            </>
        )
      }
    }
export class WeekendShiftButton extends Component {
    render() {
        return (
            <>
                <button
                    key={"breakfast"} 
                    className={this.props.breakfastSelected? "schedule_btn off" : "schedule_btn selected" }
                    onClick={this.props.toggleBreakfast}
                >
                    {this.props.shiftFormat === "mobile" ? "Bkfst" : "Breakfast"}
                </button>
                <button 
                        key={"brunch"}
                        className={this.props.brunchSelected? "schedule_btn off" : "schedule_btn selected" }
                        onClick={this.props.toggleBrunch}
                >
                    {this.props.shiftFormat === "mobile" ? "Brun" : "Brunch"}
                </button>
                <button 
                        key={"dinner"}
                        className={this.props.dinnerSelected? "schedule_btn off" : "schedule_btn selected" }
                        onClick={this.props.toggleDinner}
                >
                    {this.props.shiftFormat === "mobile" ? "Din" : "Dinner"}
                </button>
            </>
        )
      }
    }

export default WeekShiftButton;