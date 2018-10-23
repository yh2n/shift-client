import React, { Component } from 'react';

export class Weekday extends Component {
    render() {
        return(
            <div className="day_container">
                <button className="availability_btn day" 
                    disabled={true}
                >
                    {this.props.day}
                </button>
                <button
                    type="edit" 
                    className={this.props.breakfastToggled ? "availability_btn breakfast unavailable" : "availability_btn breakfast available"}
                    onClick={this.props.selectBreakfast}
                >
                    Breakfast
                </button>
                <button 
                    type="edit"
                    className={this.props.lunchToggled ? "availability_btn lunch unavailable" : "availability_btn lunch available"}
                    onClick={this.props.selectLunch}
                >
                    Lunch
                </button>
                <button 
                    type="edit"
                    className={this.props.dinnerToggled ? "availability_btn dinner unavailable" : "availability_btn dinner available"}
                    onClick={this.props.selectDinner}
                >
                    Dinner
                </button>
            </div>
        )
    }
}

export class Weekendday extends Component {
    render() {
        return(
                <div className="day_container">
                    <button className="availability_btn day" 
                        disabled={true}
                    >{this.props.day}</button>
                    <button 
                        type="edit"
                        className={this.props.breakfastToggled ? "availability_btn breakfast unavailable" : "availability_btn breakfast available"}
                        onClick={this.props.selectBreakfast}
                    >
                        Breakfast
                    </button>
                    <button
                        type="edit" 
                        className={this.props.brunchToggled ? "availability_btn brunch unavailable" : "availability_btn brunch available"}
                        onClick={this.props.selectBrunch}
                    >
                        Brunch
                    </button>
                    <button 
                        type="edit"
                        className={this.props.dinnerToggled ? "availability_btn dinner unavailable" : "availability_btn dinner available"}
                        onClick={this.props.selectDinner}
                    >
                        Dinner
                    </button>
                </div>
            )
        }
    }

    export default Weekday;