import React, { Component } from 'react';


export default class Input extends Component {
	render() {
		return (
			<div>
				<input
					{...this.props.input}
                    name={this.props.name}
					type={this.props.type}
					value={this.props.value}
					onChange={this.props.onChange}
                    className={this.props.className} 
                    placeholder={this.props.placeholder}/>
			</div>
		)
	}
}