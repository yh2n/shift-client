import React, {Component} from 'react';
import './Position.css';


export default class Position extends Component {
	render() {
		return(
			<div className="schedule">
				<div className="weekdays position">{this.props.position}</div>
				<div className="weekdays monday"></div>
				<div className="weekdays tuesday"></div>
				<div className="weekdays wednesday"></div>
				<div className="weekdays thursday"></div>
				<div className="weekdays friday"></div>
				<div className="weekdays saturday"></div>
				<div className="weekdays sunday"></div>
			</div>
			)
	}
}