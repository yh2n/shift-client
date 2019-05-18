import React, { Component } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import UserEmployeeRow from './UserEmployeeRow';
import UserEmployeeRowSelected from './UserEmployeeRowSelected';
import AccounttNav from './AccountNav';
import UserMenuModal from './UserMenuModal';
import CurrentWeekDayRow from './CurrentWeekDayRow';
import SelectedWeekDayRow from './SelectedWeekDayRow';
import PositionRow from './PositionRow';
import MonthRow from './MonthRow';


import { fetchEmployees } from '../actions/fetch_employees';
import { connect } from 'react-redux';
import './UserSchedule.css';


const currentUser = localStorage.getItem('id');
let currentWeek = (moment().week())


export class Schedule extends Component {
	constructor(props) {
		super(props);

		this.state = {
            isOpen : false, 
            value: currentWeek,
            loading: false,
            error: null
		}
	}	
        
    componentDidMount() {
        this.props.dispatch(fetchEmployees())
    }

    handleChange = (e) => {
        this.setState({value: e.target.value})
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
                            value={currentWeek}
                        />
                    )
                )
        )

        let barbackRow_selected = (
            barbacks.map(barback => (
                    <UserEmployeeRowSelected
                        key={`${barback.id}_selected`}
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
                            value={currentWeek}
                        />
                    )
                )
        )

        let bartenderRow_selected = (
            bartenders.map(bartender => (
                    <UserEmployeeRowSelected
                        key={`${bartender.id}_selected`}
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
                            value={currentWeek}
                        />
                    )
                )
        )

        let busserRow_selected = (
            bussers.map(busser => (
                    <UserEmployeeRowSelected
                        key={`${busser.id}_selected`}
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
                            value={currentWeek}
                        />
                    )
                )
        )

        let captainRow_selected = (
            captains.map(captain => (
                    <UserEmployeeRowSelected
                        key={`${captain.id}_selected`}
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
                            value={currentWeek}
                        />
                    )
                )
        )

        let hostRow_selected = (
            hosts.map(host => (
                    <UserEmployeeRowSelected
                        key={`${host.id}_selected`}
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
                            value={currentWeek}
                        />
                    )
                )
        )

        let maitreDRow_selected = (
            maitre_ds.map(maitre_d => (
                    <UserEmployeeRowSelected
                        key={`${maitre_d.id}_selected`}
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
                            value={currentWeek}
                        />
                    )
                )
        )

        let managerRow_selected = (
            managers.map(manager => (
                    <UserEmployeeRowSelected
                        key={`${manager.id}_selected`}
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
                            value={currentWeek}
                        />
                    )
                )
        )

        let runnerRow_selected = (
            runners.map(runner => (
                    <UserEmployeeRowSelected
                        key={`${runner.id}_selected`}
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
                            value={currentWeek}
                        />
                    )
                )
        )

        let serverRow_selected = (
            servers.map(server => (
                    <UserEmployeeRowSelected
                        key={`${server.id}_selected`}
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
                            value={currentWeek}
                        />
                    )
                )
        )

        let sommelierRow_selected = (
            sommeliers.map(sommelier => (
                    <UserEmployeeRowSelected
                        key={`${sommelier.id}_selected`}
                        name={sommelier.id === currentUser ? sommelier.firstName : <Link className="contact_links" to ={`/admin/employee/${sommelier.id}`}>{sommelier.firstName}</Link>}
                        className={sommelier.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                        id={sommelier.id}
                        schedule={sommelier.next_schedule}
                        value={this.state.value}
                    />
                )
            )
        )

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
                        <option value="16">{moment('2019').add(16, 'weeks').format(" M/D/YYYY")}</option>
                        <option value="17">{moment('2019').add(17, 'weeks').format(" M/D/YYYY")}</option>
                        <option value="18">{moment('2019').add(18, 'weeks').format(" M/D/YYYY")}</option>
                    </select>
                    <p>{this.state.value}</p>
                <div className="user_schedule_container">
                    <MonthRow />
                    <SelectedWeekDayRow value={this.state.value}/>
                        <PositionRow position="Managers"/>
                        {managerRow_selected}
                        <PositionRow key="schedule_captains_selected" position="Captains"/>
                        {captainRow_selected}
                        <PositionRow key="schedule_maitre-d_selected" position="Maître d'"/>
                        {maitreDRow_selected}
                        <PositionRow key="schedule_host-staff_selected" position="Host staff"/>
                        {hostRow_selected}
                        <PositionRow key="schedule_sommeliers_selected" position="Sommeliers"/>
                        {sommelierRow_selected}
                        <PositionRow key="schedule_bartenders_selected" position="Bartenders"/>
                        {bartenderRow_selected}
                        <PositionRow key="schedule_barbacks_selected" position="Barbacks"/>
                        {barbackRow_selected}
                        <PositionRow key="schedule_servers_selected" position="Servers" />
                        {serverRow_selected}
                        <PositionRow key="schedule_runners_selected" position="Runners"/>
                        {runnerRow_selected}
                        <PositionRow key="schedule_bussers_selected" position="Bussers"/>
                        {busserRow_selected}
                </div>
            </div>
		)
	}
}

const mapStateToProps = state => ({
	employees: state.employees
})

export default connect(mapStateToProps)(Schedule)