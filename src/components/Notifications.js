import React, { Component } from 'react';
import './Notifications.css';


export default class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <div className={this.props.className}>New schedule available!</div>
        );
    }
}