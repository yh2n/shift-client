import React, { Component } from 'react';
import MenuIcon from './MenuIcon';
import UserMenuModal from './UserMenuModal';
import './test1.css';

export class ScheduleRow extends Component {
    render() {
        return (
            [
                <div className="user_schedule_position-test">{this.props.position}</div>,	
                <div className="user_schedule_days">{this.props.day1}</div>,	
                <div className="user_schedule_days">{this.props.day2}</div>,	
                <div className="user_schedule_days">{this.props.day3}</div>,	
                <div className="user_schedule_days">{this.props.day4}</div>,	
                <div className="user_schedule_days">{this.props.day5}</div>,	
                <div className="user_schedule_days">{this.props.day6}</div>,	
                <div className="user_schedule_days">{this.props.day7}</div>
			]
        )
    }
}
export class EmployeeRow extends Component {
    render() {
        return (
			[
                <div className="user_schedule_name-test">{this.props.name}</div>,	
                <div className="user_schedule_days">{this.props.Mo_shift}</div>,	
                <div className="user_schedule_days">{this.props.Tu_shift}</div>,	
                <div className="user_schedule_days">{this.props.We_shift}</div>,	
                <div className="user_schedule_days">{this.props.Th_shift}</div>,	
                <div className="user_schedule_days">{this.props.Fr_shift}</div>,	
                <div className="user_schedule_days">{this.props.Sa_shift}</div>,	
                <div className="user_schedule_days">{this.props.Su_shift}</div>
			]
        )
    }
}

export default class Schedule extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen : false
		}
	}	
		
	toggleModal = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return(
			<div>
			<div>
				<MenuIcon onClick={this.toggleModal}/>
				<UserMenuModal
					show={this.state.isOpen}
					onClose={this.toggleModal}
				/>
			</div>
				<div className="current_schedule_prompt-test">
					<p>This week:</p>
				</div>
        	<div className="user_schedule_container-test">
                <ScheduleRow 
                    position="Servers"
                    day1="Mo"
                    day2="Tu"
                    day3="We"
                    day4="Th"
                    day5="Fr"
                    day6="Sa"
                    day7="Su"
                    />
				<EmployeeRow 
					className="user_schedule_row-test"
                    name="Damian"
                    Mo_shift=""
                    Tu_shift="Dinner"
                    We_shift="Lunch"
                    Th_shift="Dinner"
                    Fr_shift="Dinner"
                    Sa_shift=""
                    Su_shift=""
                />
                <ScheduleRow 
                    position="Bussers"/>
                <EmployeeRow 
                    name="Mary-Ann"
                    Mo_shift="Dinner"
                    Tu_shift="Dinner"
                    We_shift=""
                    Th_shift="Dinner"
                    Fr_shift=""
                    Sa_shift="Brunch"
                    Su_shift="Dinner"
                />
                <ScheduleRow 
                    position="Runners"/>
				<EmployeeRow 
                    name="Mary-Ann"
                    Mo_shift="Dinner"
                    Tu_shift="Dinner"
                    We_shift=""
                    Th_shift="Dinner"
                    Fr_shift=""
                    Sa_shift="Brunch"
                    Su_shift="Dinner"
                />

            </div>
            </div>
		)
	}
}