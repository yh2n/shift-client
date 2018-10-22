import React, { Component } from 'react';

export class WeekShiftButton extends Component {
    render() {
        return [
            <button 
                key={"breakfast"}
                type="edit"
                className={this.props.breakfastSelected ? "schedule_btn off" : "schedule_btn selected" }
                onClick={() => {
                    console.log(this.props);
                        this.props.toggleBreakfast();
                    }}
            >
                Breakfast
            </button>,
            <button 
                key={"lunch"}
                type="edit" 
                className={this.props.lunchSelected ? "schedule_btn off" : "schedule_btn selected" }
                onClick={() => {
                    console.log(this.props);
                        this.props.toggleLunch()
                    }}
                    >
                Lunch
            </button>,
            <button
                key={"dinner"}
                type="edit"
                className={this.props.dinnerSelected ? "schedule_btn off" : "schedule_btn selected" }
                    onClick={() => {
                        console.log(this.props);
                        return (
                                    this.props.toggleDinner())
                                }}
                >
                Dinner
            </button>
        ]
      }
    }
export class WeekendShiftButton extends Component {
    render() {
        return [
                <button
                    key={"breakfast"} 
                    className={this.props.breakfastSelected? "schedule_btn off" : "schedule_btn selected" }
                    onClick={() => {
                        console.log(this.props);
                        return (
                            this.props.toggleBreakfast())
                        }}
                >
                    Breakfast
                </button>,
                <button 
                        key={"brunch"}
                        className={this.props.brunchSelected? "schedule_btn off" : "schedule_btn selected" }
                        onClick={() => {
                            console.log("clicked")
                            return (
                                this.props.toggleBrunch())
                            }}
                >
                    Brunch
                </button>,
                <button 
                        key={"dinner"}
                        className={this.props.dinnerSelected? "schedule_btn off" : "schedule_btn selected" }
                        onClick={() => {
                            console.log("clicked")
                            return (
                                this.props.toggleDinner())
                            }}
                >
                    Dinner
                </button>
        ]
      }
    }

export default WeekShiftButton;