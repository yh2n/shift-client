import React, { Component } from 'react';
import moment from 'moment';
import UserEmployeeRow from './UserEmployeeRow';
import UserEmployeeRowSelected from './UserEmployeeRowSelected';
import AccounttNav from './AccountNav';
import UserMenuModal from './UserMenuModal';
import { API_BASE_URL } from '../config';


import { fetchEmployees } from '../actions/fetch_employees';
import { connect } from 'react-redux';
import './UserSchedule.css';

import { Link } from 'react-router-dom';

const currentUser = localStorage.getItem('id');

export class MonthRow extends Component {
    render() {
        return (
            <>
                <div></div>
                <div></div>
                <div></div>
                <div className="user_current_month">{moment().format("MMMM").toUpperCase()}</div>
                <div className="user_year">{moment().format("YYYY")}</div>
                <div></div>
                <div></div>
                <div></div>
            </>
        )
    }
}

export class CurrentWeekDayRow extends Component {
    render() {
        let currentWeek = (moment().week() - 1)
        return (
            <>
                <div key="day-row_position"className="user_schedule_position"></div>	
                <div key="day-row_Mo"className={moment().day(1).format("Do") === moment().format("Do") ? "user_schedule_days current" : "user_schedule_days"}>Mon <span className={moment().day(1).format("Do") === moment().format("Do") ? "user_day_number current" : "user_day_number"}>{moment('2019').add(`${currentWeek}`, 'weeks').add(0, 'days').format("Do")}</span></div>                
                <div key="day-row_Tu"className={moment().day(2).format("Do") === moment().format("Do") ? "user_schedule_days current" : "user_schedule_days"}>Tue <span className={moment().day(2).format("Do") === moment().format("Do") ? "user_day_number current" : "user_day_number"}>{moment('2019').add(`${currentWeek}`, 'weeks').add(1, 'days').format("Do")}</span></div>	
                <div key="day-row_We"className={moment().day(3).format("Do") === moment().format("Do") ? "user_schedule_days current" : "user_schedule_days"}>Wed <span className={moment().day(3).format("Do") === moment().format("Do") ? "user_day_number current" : "user_day_number"}>{moment('2019').add(`${currentWeek}`, 'weeks').add(2, 'days').format("Do")}</span></div>	
                <div key="day-row_Th"className={moment().day(4).format("Do") === moment().format("Do") ? "user_schedule_days current" : "user_schedule_days"}>Thu <span className={moment().day(4).format("Do") === moment().format("Do") ? "user_day_number current" : "user_day_number"}>{moment('2019').add(`${currentWeek}`, 'weeks').add(3, 'days').format("Do")}</span></div>
                <div key="day-row_Fr"className={moment().day(5).format("Do") === moment().format("Do") ? "user_schedule_days current" : "user_schedule_days"}>Fri <span className={moment().day(5).format("Do") === moment().format("Do") ? "user_day_number current" : "user_day_number"}>{moment('2019').add(`${currentWeek}`, 'weeks').add(4, 'days').format("Do")}</span></div>	
                <div key="day-row_Sa"className={moment().day(6).format("Do") === moment().format("Do") ? "user_schedule_days current" : "user_schedule_days"}>Sat <span className={moment().day(6).format("Do") === moment().format("Do") ? "user_day_number current" : "user_day_number"}>{moment('2019').add(`${currentWeek}`, 'weeks').add(5, 'days').format("Do")}</span></div>	
                <div key="day-row_Su"className={moment().day(7).format("Do") === moment().format("Do") ? "user_schedule_days current" : "user_schedule_days"}>Sun <span className={moment().day(7).format("Do") === moment().format("Do") ? "user_day_number current" : "user_day_number"}>{moment('2019').add(`${currentWeek}`, 'weeks').add(6, 'days').format("Do")}</span></div>            
            </>
        )
    }
}

export class SelectedWeekDayRow extends Component {
    render() {
        let selectedWeek = this.props.value
        return (
            <>
                <div key="day-row_position"className="user_schedule_position"></div>	
                <div key="day-row_Mo"className="user_schedule_days">Mon <span className="user_day_number">{moment('2019').add(`${selectedWeek}`, 'weeks').add(0, 'days').format("Do")}</span></div>	
                <div key="day-row_Tu"className="user_schedule_days">Tue <span className="user_day_number">{moment('2019').add(`${selectedWeek}`, 'weeks').add(1, 'days').format("Do")}</span></div>	
                <div key="day-row_We"className="user_schedule_days">Wed <span className="user_day_number">{moment('2019').add(`${selectedWeek}`, 'weeks').add(2, 'days').format("Do")}</span></div>	
                <div key="day-row_Th"className="user_schedule_days">Thu <span className="user_day_number">{moment('2019').add(`${selectedWeek}`, 'weeks').add(3, 'days').format("Do")}</span></div>	
                <div key="day-row_Fr"className="user_schedule_days">Fri <span className="user_day_number">{moment('2019').add(`${selectedWeek}`, 'weeks').add(4, 'days').format("Do")}</span></div>	
                <div key="day-row_Sa"className="user_schedule_days">Sat <span className="user_day_number">{moment('2019').add(`${selectedWeek}`, 'weeks').add(5, 'days').format("Do")}</span></div>	
                <div key="day-row_Su"className="user_schedule_days">Sun <span className="user_day_number">{moment('2019').add(`${selectedWeek}`, 'weeks').add(6, 'days').format("Do")}</span></div>
			</>
        )
    }
}

export class PositionRow extends Component {
    render() {
        return (
            <>
                <div key="positon-row_position"className="user_schedule_position">{this.props.position}</div>	
                <div key="positon-row_Mo"className="user_schedule_days"></div>	
                <div key="positon-row_Tu"className="user_schedule_days"></div>	
                <div key="positon-row_We"className="user_schedule_days"></div>	
                <div key="positon-row_Th"className="user_schedule_days"></div>	
                <div key="positon-row_Fr"className="user_schedule_days"></div>	
                <div key="positon-row_Sa"className="user_schedule_days"></div>	
                <div key="positon-row_Su"className="user_schedule_days"></div>
			</>
        )
    }
}

export class Schedule extends Component {
	constructor(props) {
		super(props);

		this.state = {
            isOpen : false, 
            value: 14,
            loading: false,
            error: null
		}
	}	
        
    componentDidMount() {
        this.props.dispatch(fetchEmployees())
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
        console.log(this.state.value, e.target.value)
    }
	toggleModal = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
    }
    
	render() {
        const employees = this.props.employees.employees;
        console.log(employees);


        let barbacks = employees.filter(employee => employee.position === "Barback")
        let barbackRow = (
                barbacks.map(barback => (
                        <UserEmployeeRow
                            key={barback.id}
                            name={barback.id === currentUser ? barback.firstName  : <Link className="contact_links" to={`/admin/employee/${barback.id}`}>{barback.firstName}</Link>}
                            className={barback.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                            id={barback.id}
                            schedule={barback.schedule}
                            value={this.state.value}
                        />
                    )
                )
        )

        let barbackRow_next = (
            barbacks.map(barback => (
                    <UserEmployeeRowSelected
                        key={`${barback.id}_next`}
                        name={barback.id === currentUser ? barback.firstName  : <Link className="contact_links" to={`/admin/employee/${barback.id}`}>{barback.firstName}</Link>}
                        className={barback.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                        id={barback.id}
                        schedule={barback.next_schedule}
                        value={this.state.value}
                    />
                )
            )
    )
        
        let bartenders = employees.filter(employee => employee.position === "Bartender")
        let bartenderRow = (
                bartenders.map(bartender => (
                        <UserEmployeeRow
                            key={bartender.id}
                            name={bartender.id === currentUser ? bartender.firstName  : <Link className="contact_links" to={`/admin/employee/${bartender.id}`}>{bartender.firstName}</Link>}
                            className={bartender.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                            id={bartender.id}
                            schedule={bartender.schedule}
                            value={this.state.value}
                        />
                    )
                )
        )

        let bartenderRow_next = (
            bartenders.map(bartender => (
                    <UserEmployeeRowSelected
                        key={`${bartender.id}_next`}
                        name={bartender.id === currentUser ? bartender.firstName  : <Link className="contact_links" to={`/admin/employee/${bartender.id}`}>{bartender.firstName}</Link>}
                        className={bartender.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                        id={bartender.id}
                        schedule={bartender.next_schedule}
                        value={this.state.value}
                    />
                )
            )
    )



        let bussers = employees.filter(employee => employee.position === "Busser")
        let busserRow = (
                bussers.map(busser => (
                        <UserEmployeeRow
                            key={busser.id}
                            name={busser.id === currentUser ? busser.firstName  : <Link className="contact_links" to={`/admin/employee/${busser.id}`}>{busser.firstName}</Link>}
                            className={busser.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                            id={busser.id}
                            schedule={busser.schedule}
                            value={this.state.value}
                        />
                    )
                )
        )

        let busserRow_next = (
            bussers.map(busser => (
                    <UserEmployeeRowSelected
                        key={`${busser.id}_next`}
                        name={busser.id === currentUser ? busser.firstName  : <Link className="contact_links" to={`/admin/employee/${busser.id}`}>{busser.firstName}</Link>}
                        className={busser.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                        id={busser.id}
                        schedule={busser.next_schedule}
                        value={this.state.value}
                    />
                )
            )
    )


        let captains = employees.filter(employee => employee.position === "Captain")
        let captainRow = (
                captains.map(captain => (
                        <UserEmployeeRow
                            key={captain.id}
                            name={captain.id === currentUser ? captain.firstName  : <Link className="contact_links" to={`/admin/employee/${captain.id}`}>{captain.firstName}</Link>}
                            className={captain.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                            id={captain.id}
                            schedule={captain.schedule}
                            value={this.state.value}
                        />
                    )
                )
        )

        let captainRow_next = (
            captains.map(captain => (
                    <UserEmployeeRowSelected
                        key={`${captain.id}_next`}
                        name={captain.id === currentUser ? captain.firstName  : <Link className="contact_links" to={`/admin/employee/${captain.id}`}>{captain.firstName}</Link>}
                        className={captain.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                        id={captain.id}
                        schedule={captain.next_schedule}
                        value={this.state.value}
                    />
                )
            )
    )
        
        let hosts = employees.filter(employee => employee.position === "Hostess/Host")
        let hostRow = (
                hosts.map(host => (
                        <UserEmployeeRow
                            key={host.id}
                            name={host.id === currentUser ? host.firstName  : <Link className="contact_links" to={`/admin/employee/${host.id}`}>{host.firstName}</Link>}
                            className={host.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                            id={host.id}
                            schedule={host.schedule}
                            value={this.state.value}
                        />
                    )
                )
        )

        let hostRow_next = (
            hosts.map(host => (
                    <UserEmployeeRowSelected
                        key={`${host.id}_next`}
                        name={host.id === currentUser ? host.firstName  : <Link className="contact_links" to={`/admin/employee/${host.id}`}>{host.firstName}</Link>}
                        className={host.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                        id={host.id}
                        schedule={host.next_schedule}
                        value={this.state.value}
                    />
                )
            )
        )


        let maitre_ds = employees.filter(employee => employee.position === "Maitre d'")
        let maitreDRow = (
                maitre_ds.map(maitre_d => (
                        <UserEmployeeRow
                            key={maitre_d.id}
                            name={maitre_d.id === currentUser ? maitre_d.firstName  : <Link className="contact_links" to={`/admin/employee/${maitre_d.id}`}>{maitre_d.firstName}</Link>}
                            className={maitre_d.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                            id={maitre_d.id}
                            schedule={maitre_d.schedule}
                            value={this.state.value}
                        />
                    )
                )
        )

        let maitreDRow_next = (
            maitre_ds.map(maitre_d => (
                    <UserEmployeeRowSelected
                        key={`${maitre_d.id}_next`}
                        name={maitre_d.id === currentUser ? maitre_d.firstName  : <Link className="contact_links" to={`/admin/employee/${maitre_d.id}`}>{maitre_d.firstName}</Link>}
                        className={maitre_d.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                        id={maitre_d.id}
                        schedule={maitre_d.next_schedule}
                        value={this.state.value}
                    />
                )
            )
        )


        let managers = employees.filter(employee => employee.position === "Manager");
        let managerRow = (
                managers.map(manager => (
                        <UserEmployeeRow
                            key={manager.id}
                            name={manager.id === currentUser ? manager.firstName : <Link className="contact_links" to ={`/admin/employee/${manager.id}`}>{manager.firstName}</Link>}
                            className={manager.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                            id={manager.id}
                            schedule={manager.schedule}
                            value={this.state.value}
                        />
                    )
                )
        )

        let managerRow_next = (
            managers.map(manager => (
                    <UserEmployeeRowSelected
                        key={`${manager.id}_next`}
                        name={manager.id === currentUser ? manager.firstName : <Link className="contact_links" to ={`/admin/employee/${manager.id}`}>{manager.firstName}</Link>}
                        className={manager.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                        id={manager.id}
                        schedule={manager.next_schedule}
                        value={this.state.value}
                    />
                )
            )
        )

        
        let runners = employees.filter(employee => employee.position === "Runner")
        let runnerRow = (
                runners.map(runner => (
                        <UserEmployeeRow
                            key={runner.id}
                            name={runner.id === currentUser ? runner.firstName : <Link className="contact_links" to ={`/admin/employee/${runner.id}`}>{runner.firstName}</Link>}
                            className={runner.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                            id={runner.id}
                            schedule={runner.schedule}
                            value={this.state.value}
                        />
                    )
                )
        )

        let runnerRow_next = (
            runners.map(runner => (
                    <UserEmployeeRowSelected
                        key={`${runner.id}_next`}
                        name={runner.id === currentUser ? runner.firstName : <Link className="contact_links" to ={`/admin/employee/${runner.id}`}>{runner.firstName}</Link>}
                        className={runner.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                        id={runner.id}
                        schedule={runner.next_schedule}
                        value={this.state.value}
                    />
                )
            )
        )

        let servers = employees.filter(employee => employee.position === "Server")
        let serverRow = (
                servers.map(server => (
                        <UserEmployeeRow
                            key={server.id}
                            name={server.id === currentUser ? server.firstName : <Link className="contact_links" to ={`/admin/employee/${server.id}`}>{server.firstName}</Link>}
                            className={server.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                            id={server.id}
                            schedule={server.schedule}
                            value={this.state.value}
                        />
                    )
                )
        )

        let serverRow_next = (
            servers.map(server => (
                    <UserEmployeeRowSelected
                        key={`${server.id}_next`}
                        name={server.id === currentUser ? server.firstName : <Link className="contact_links" to ={`/admin/employee/${server.id}`}>{server.firstName}</Link>}
                        className={server.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                        id={server.id}
                        schedule={server.next_schedule}
                        value={this.state.value}
                    />
                )
            )
        )


        let sommeliers = employees.filter(employee => employee.position === "Sommelier")
        let sommelierRow = (
                sommeliers.map(sommelier => (
                        <UserEmployeeRow
                            key={sommelier.id}
                            name={sommelier.id === currentUser ? sommelier.firstName : <Link className="contact_links" to ={`/admin/employee/${sommelier.id}`}>{sommelier.firstName}</Link>}
                            className={sommelier.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                            id={sommelier.id}
                            schedule={sommelier.schedule}
                            value={this.state.value}
                        />
                    )
                )
        )

        let sommelierRow_next = (
            sommeliers.map(sommelier => (
                    <UserEmployeeRowSelected
                        key={`${sommelier.id}_next`}
                        name={sommelier.id === currentUser ? sommelier.firstName : <Link className="contact_links" to ={`/admin/employee/${sommelier.id}`}>{sommelier.firstName}</Link>}
                        className={sommelier.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                        id={sommelier.id}
                        schedule={sommelier.next_schedule}
                        value={this.state.value}
                    />
                )
            )
        )

        let currentWeek = (moment().week() - 1)
		return(
			<div>
                <div>
                    <AccounttNav 
                        onClick={this.toggleModal}
                        name={currentUser}
                    />
                    <UserMenuModal
                        show={this.state.isOpen}
                        onClose={this.toggleModal}
                    />
                </div>
        	    <div className="user_schedule_container">
                    <MonthRow />
                    <CurrentWeekDayRow />
                        <PositionRow position="Managers"/>
                        {managerRow}
                        <PositionRow key="schedule_captains" position="Captains"/>
                        {captainRow}
                        <PositionRow key="schedule_maitre-d" position="Maître d'"/>
                        {maitreDRow}
                        <PositionRow key="schedule_host-staff" position="Host staff"/>
                        {hostRow}
                        <PositionRow key="schedule_sommeliers" position="Sommeliers"/>
                        {sommelierRow}
                        <PositionRow key="schedule_bartenders" position="Bartenders"/>
                        {bartenderRow}
                        <PositionRow key="schedule_barbacks" position="Barbacks"/>
                        {barbackRow}
                        <PositionRow key="schedule_servers" position="Servers" />
                        {serverRow}
                        <PositionRow key="schedule_runners" position="Runners"/>
                        {runnerRow}
                        <PositionRow key="schedule_bussers" position="Bussers"/>
                        {busserRow}
                </div>
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="14">{moment('2019').add(14, 'weeks').format(" M/D/YYYY")}</option>
                        <option value="15">{moment('2019').add(15, 'weeks').format(" M/D/YYYY")}</option>
                    </select>
                    <p>{this.state.value}</p>
                    <div>
                        <p>{currentWeek}</p>
                        <p> </p>
                        {/* <p>{JSON.stringify(moment('2019').add(`${currentWeek}`, 'weeks').add(4, 'days').format(" M/D/YYYY"))}</p> */}
                        <p>{moment('2019').add(`${currentWeek}`, 'weeks').add(4, 'days').format("D")}</p>
                    </div>
                <div className="user_schedule_container">
                    <MonthRow />
                    <SelectedWeekDayRow value={this.state.value}/>
                        <PositionRow position="Managers"/>
                        {managerRow_next}
                        <PositionRow key="schedule_captains_next" position="Captains"/>
                        {captainRow_next}
                        <PositionRow key="schedule_maitre-d_next" position="Maître d'"/>
                        {maitreDRow_next}
                        <PositionRow key="schedule_host-staff_next" position="Host staff"/>
                        {hostRow_next}
                        <PositionRow key="schedule_sommeliers_next" position="Sommeliers"/>
                        {sommelierRow_next}
                        <PositionRow key="schedule_bartenders_next" position="Bartenders"/>
                        {bartenderRow_next}
                        <PositionRow key="schedule_barbacks_next" position="Barbacks"/>
                        {barbackRow_next}
                        <PositionRow key="schedule_servers_next" position="Servers" />
                        {serverRow_next}
                        <PositionRow key="schedule_runners_next" position="Runners"/>
                        {runnerRow_next}
                        <PositionRow key="schedule_bussers_next" position="Bussers"/>
                        {busserRow_next}
                </div>
            </div>
		)
	}
}

const mapStateToProps = state => ({
	employees: state.employees
})

export default connect(mapStateToProps)(Schedule)