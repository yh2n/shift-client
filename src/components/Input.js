import React, { Component } from 'react';


export default class Input extends Component {
	onInputChange(e) {
    console.log(e.target.value)
    }
	render() {
		return (
			<div>
				<input
					{...this.props.input}
                    name={this.props.name}
					type={this.props.type}
					ref={input => (this.input = input)}
					value={this.props.value}
					defaultValue={this.props.defaultValue}
					onChange={this.onInputChange}
                    className={this.props.className} 
                    placeholder={this.props.placeholder}/>
			</div>
		)
	}
}