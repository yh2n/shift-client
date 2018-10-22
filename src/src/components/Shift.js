import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Shift extends Component {
	render() {
		return(
			<div className="weekdays">
				<select>
					<option>OFF</option>
					<option>O/C</option>
					<option>Lunch</option>
					<option>Brunch</option>
					<option>Dinner</option>
				</select>
			</div>
			)
	}
}