import React, { Component } from 'react';
import { StaffData, Employees } from './StaffData';

export default class AdminPage extends Component {
    render() {
        return (
            <div>
                <Employees />
            </div>
        )
    }
}