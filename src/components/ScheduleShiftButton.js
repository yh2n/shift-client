import React, { Component } from 'react';

export class WeekShiftButton extends Component {
    render() {
        return (
            <>
                <button 
                    key="breakfast"
                    type="edit"
                    className={this.props.breakfastSelected ? "breakfast_btn off" : "breakfast_btn selected" }
                    onClick={this.props.toggleBreakfast}
                >
                    {this.props.device === "mobile" ? "Bkfst" : "Breakfast"}
                </button>
                <button 
                    key="lunch"
                    type="edit" 
                    className={this.props.lunchSelected ? "lunch_btn off" : "lunch_btn selected" }
                    onClick={this.props.toggleLunch}
                >
                    {this.props.device === "mobile" ? "Lun" : "Lunch"}
                </button>
                <button
                    key="dinner"
                    type="edit"
                    className={this.props.dinnerSelected ? "dinner_btn off" : "dinner_btn selected" }
                    onClick={this.props.toggleDinner}
                >
                    {this.props.device === "mobile" ? "Din" : "Dinner"}
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
                    className={this.props.breakfastSelected ? "breakfast_btn off" : "breakfast_btn selected"}
                    onClick={this.props.toggleBreakfast}
                >
                    {this.props.device === "mobile" ? "Bkfst" : "Breakfast"}
                </button>
                <button 
                        key={"brunch"}
                        className={this.props.brunchSelected ? "brunch_btn off" : "brunch_btn selected" }
                        onClick={this.props.toggleBrunch}
                >
                    {this.props.device === "mobile" ? "Brun" : "Brunch"}
                </button>
                <button 
                        key={"dinner"}
                        className={this.props.dinnerSelected ? "dinner_btn off" : "dinner_btn selected" }
                        onClick={this.props.toggleDinner}
                >
                    {this.props.device === "mobile" ? "Din" : "Dinner"}
                </button>
            </>
        )
      }
    }

export default WeekShiftButton;