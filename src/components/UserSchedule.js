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
import SelectedMonthRow from './SelectedMonthRow';
import ScheduleSelect from './ScheduleSelect';

import { fetchEmployees } from '../actions/fetch_employees';
import { connect } from 'react-redux';
import './UserSchedule.css';


const currentUser = localStorage.getItem('id');


export class Schedule extends Component {
	constructor(props) {
		super(props);

		this.state = {
            isOpen : false, 
            currentWeek:  moment().week(),
            selectedWeek: moment().week() + 1,
            updateButtonText: "Update",
            submittedCount: 0,
            shiftFormat: "",
            error: null
		}
	}	
        
    componentDidMount() {
        this.props.dispatch(fetchEmployees());
        window.addEventListener("resize", this.handleWindowResize);
        window.innerWidth < 570 ? this.setState({shiftFormat: "mobile"}) : this.setState({shiftFormat: "desktop"});
    }

    handleScheduleSelection = (e) => {
        this.setState({selectedWeek: e.target.value})
    }

	toggleModal = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
    }

    incrementCount = e => {
        e.preventDefault();
		
        this.setState(prevState => {
            return { 
                submittedCount: prevState.submittedCount + 1,
                updateButtonText: "Updated !"
            }
        })
        
        setTimeout(()=> {
            this.setState({updateButtonText: "Update"})
        }, 1500)
    }
    
    handleWindowResize = () => {
        if (window.innerWidth < 570) {
            this.setState({shiftFormat: "mobile"})
        }
        else {
            this.setState({shiftFormat: "desktop"})
        }
    }
	render() {
        const employees = this.props.employees.employees;

        let barbacks = employees.filter(employee => employee.position === "Barback")
        let barbackRow = (
                barbacks.map(barback => (
                        <UserEmployeeRow
                            key={barback.id}
                            name={barback.id === currentUser ? barback.firstName  : <Link className="contact_links" to={`./contact-availability/${barback.id}`}>{barback.firstName}</Link>}
                            className={barback.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                            id={barback.id}
                            schedule={barback.schedule}
                            shiftFormat={this.state.shiftFormat}
                            submittedCount={this.state.submittedCount}
                        />
                    )
                )
        )

        let barbackRow_selected = (
            barbacks.map(barback => (
                    <UserEmployeeRowSelected
                        key={`${barback.id}_selected`}
                        name={barback.id === currentUser ? barback.firstName  : <Link className="contact_links" to={`./contact-availability/${barback.id}`}>{barback.firstName}</Link>}
                        className={barback.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                        id={barback.id}
                        shiftFormat={this.state.shiftFormat}
                        selectedWeek={this.state.selectedWeek}
                    />
                )
            )
    )
        
        let bartenders = employees.filter(employee => employee.position === "Bartender")
        let bartenderRow = (
                bartenders.map(bartender => (
                        <UserEmployeeRow
                            key={bartender.id}
                            name={bartender.id === currentUser ? bartender.firstName  : <Link className="contact_links" to={`./contact-availability/${bartender.id}`}>{bartender.firstName}</Link>}
                            className={bartender.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                            id={bartender.id}
                            schedule={bartender.schedule}
                            shiftFormat={this.state.shiftFormat}
                            submittedCount={this.state.submittedCount}
                        />
                    )
                )
        )

        let bartenderRow_selected = (
            bartenders.map(bartender => (
                    <UserEmployeeRowSelected
                        key={`${bartender.id}_selected`}
                        name={bartender.id === currentUser ? bartender.firstName  : <Link className="contact_links" to={`./contact-availability/${bartender.id}`}>{bartender.firstName}</Link>}
                        className={bartender.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                        id={bartender.id}
                        shiftFormat={this.state.shiftFormat}
                        selectedWeek={this.state.selectedWeek}
                    />
                )
            )
    )



        let bussers = employees.filter(employee => employee.position === "Busser")
        let busserRow = (
                bussers.map(busser => (
                        <UserEmployeeRow
                            key={busser.id}
                            name={busser.id === currentUser ? busser.firstName  : <Link className="contact_links" to={`./contact-availability/${busser.id}`}>{busser.firstName}</Link>}
                            className={busser.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                            id={busser.id}
                            schedule={busser.schedule}
                            shiftFormat={this.state.shiftFormat}
                            submittedCount={this.state.submittedCount}
                        />
                    )
                )
        )

        let busserRow_selected = (
            bussers.map(busser => (
                    <UserEmployeeRowSelected
                        key={`${busser.id}_selected`}
                        name={busser.id === currentUser ? busser.firstName  : <Link className="contact_links" to={`./contact-availability/${busser.id}`}>{busser.firstName}</Link>}
                        className={busser.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                        id={busser.id}
                        shiftFormat={this.state.shiftFormat}
                        selectedWeek={this.state.selectedWeek}
                    />
                )
            )
    )


        let captains = employees.filter(employee => employee.position === "Captain")
        let captainRow = (
                captains.map(captain => (
                        <UserEmployeeRow
                            key={captain.id}
                            name={captain.id === currentUser ? captain.firstName  : <Link className="contact_links" to={`./contact-availability/${captain.id}`}>{captain.firstName}</Link>}
                            className={captain.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                            id={captain.id}
                            schedule={captain.schedule}
                            shiftFormat={this.state.shiftFormat}
                            submittedCount={this.state.submittedCount}
                        />
                    )
                )
        )

        let captainRow_selected = (
            captains.map(captain => (
                    <UserEmployeeRowSelected
                        key={`${captain.id}_selected`}
                        name={captain.id === currentUser ? captain.firstName  : <Link className="contact_links" to={`./contact-availability/${captain.id}`}>{captain.firstName}</Link>}
                        className={captain.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                        id={captain.id}
                        shiftFormat={this.state.shiftFormat}
                        selectedWeek={this.state.selectedWeek}
                    />
                )
            )
    )
        
        let hosts = employees.filter(employee => employee.position === "Hostess/Host")
        let hostRow = (
                hosts.map(host => (
                        <UserEmployeeRow
                            key={host.id}
                            name={host.id === currentUser ? host.firstName  : <Link className="contact_links" to={`./contact-availability/${host.id}`}>{host.firstName}</Link>}
                            className={host.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                            id={host.id}
                            schedule={host.schedule}
                            shiftFormat={this.state.shiftFormat}
                            submittedCount={this.state.submittedCount}
                        />
                    )
                )
        )

        let hostRow_selected = (
            hosts.map(host => (
                    <UserEmployeeRowSelected
                        key={`${host.id}_selected`}
                        name={host.id === currentUser ? host.firstName  : <Link className="contact_links" to={`./contact-availability/${host.id}`}>{host.firstName}</Link>}
                        className={host.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                        id={host.id}
                        shiftFormat={this.state.shiftFormat}
                        selectedWeek={this.state.selectedWeek}
                    />
                )
            )
        )


        let maitre_ds = employees.filter(employee => employee.position === "Maitre d'")
        let maitreDRow = (
                maitre_ds.map(maitre_d => (
                        <UserEmployeeRow
                            key={maitre_d.id}
                            name={maitre_d.id === currentUser ? maitre_d.firstName  : <Link className="contact_links" to={`./contact-availability/${maitre_d.id}`}>{maitre_d.firstName}</Link>}
                            className={maitre_d.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                            id={maitre_d.id}
                            schedule={maitre_d.schedule}
                            shiftFormat={this.state.shiftFormat}
                            submittedCount={this.state.submittedCount}
                        />
                    )
                )
        )

        let maitreDRow_selected = (
            maitre_ds.map(maitre_d => (
                    <UserEmployeeRowSelected
                        key={`${maitre_d.id}_selected`}
                        name={maitre_d.id === currentUser ? maitre_d.firstName  : <Link className="contact_links" to={`./contact-availability/${maitre_d.id}`}>{maitre_d.firstName}</Link>}
                        className={maitre_d.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                        id={maitre_d.id}
                        shiftFormat={this.state.shiftFormat}
                        selectedWeek={this.state.selectedWeek}
                    />
                )
            )
        )


        let managers = employees.filter(employee => employee.position === "Manager");
        let managerRow = (
                managers.map(manager => (
                        <UserEmployeeRow
                            key={manager.id}
                            name={manager.id === currentUser ? manager.firstName : <Link className="contact_links" to ={`./contact-availability/${manager.id}`}>{manager.firstName}</Link>}
                            className={manager.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                            id={manager.id}
                            schedule={manager.schedule}
                            shiftFormat={this.state.shiftFormat}
                            submittedCount={this.state.submittedCount}
                        />
                    )
                )
        )

        let managerRow_selected = (
            managers.map(manager => (
                    <UserEmployeeRowSelected
                        key={`${manager.id}_selected`}
                        name={manager.id === currentUser ? manager.firstName : <Link className="contact_links" to ={`./contact-availability/${manager.id}`}>{manager.firstName}</Link>}
                        className={manager.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                        id={manager.id}
                        shiftFormat={this.state.shiftFormat}
                        selectedWeek={this.state.selectedWeek}
                    />
                )
            )
        )

        
        let runners = employees.filter(employee => employee.position === "Runner")
        let runnerRow = (
                runners.map(runner => (
                        <UserEmployeeRow
                            key={runner.id}
                            name={runner.id === currentUser ? runner.firstName : <Link className="contact_links" to ={`./contact-availability/${runner.id}`}>{runner.firstName}</Link>}
                            className={runner.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                            id={runner.id}
                            schedule={runner.schedule}
                            shiftFormat={this.state.shiftFormat}
                            submittedCount={this.state.submittedCount}
                        />
                    )
                )
        )

        let runnerRow_selected = (
            runners.map(runner => (
                    <UserEmployeeRowSelected
                        key={`${runner.id}_selected`}
                        name={runner.id === currentUser ? runner.firstName : <Link className="contact_links" to ={`./contact-availability/${runner.id}`}>{runner.firstName}</Link>}
                        className={runner.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                        id={runner.id}
                        shiftFormat={this.state.shiftFormat}
                        selectedWeek={this.state.selectedWeek}
                    />
                )
            )
        )

        let servers = employees.filter(employee => employee.position === "Server")
        let serverRow = (
                servers.map(server => (
                        <UserEmployeeRow
                            key={server.id}
                            name={server.id === currentUser ? server.firstName : <Link className="contact_links" to ={`./contact-availability/${server.id}`}>{server.firstName}</Link>}
                            className={server.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                            id={server.id}
                            schedule={server.schedule}
                            shiftFormat={this.state.shiftFormat}
                            submittedCount={this.state.submittedCount}
                        />
                    )
                )
        )

        let serverRow_selected = (
            servers.map(server => (
                    <UserEmployeeRowSelected
                        key={`${server.id}_selected`}
                        name={server.id === currentUser ? server.firstName : <Link className="contact_links" to ={`./contact-availability/${server.id}`}>{server.firstName}</Link>}
                        className={server.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                        id={server.id}
                        shiftFormat={this.state.shiftFormat}
                        selectedWeek={this.state.selectedWeek}
                    />
                )
            )
        )


        let sommeliers = employees.filter(employee => employee.position === "Sommelier")
        let sommelierRow = (
                sommeliers.map(sommelier => (
                        <UserEmployeeRow
                            key={sommelier.id}
                            name={sommelier.id === currentUser ? sommelier.firstName : <Link className="contact_links" to ={`./contact-availability/${sommelier.id}`}>{sommelier.firstName}</Link>}
                            className={sommelier.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                            id={sommelier.id}
                            schedule={sommelier.schedule}
                            shiftFormat={this.state.shiftFormat}
                            submittedCount={this.state.submittedCount}
                        />
                    )
                )
        )

        let sommelierRow_selected = (
            sommeliers.map(sommelier => (
                    <UserEmployeeRowSelected
                        key={`${sommelier.id}_selected`}
                        name={sommelier.id === currentUser ? sommelier.firstName : <Link className="contact_links" to ={`./contact-availability/${sommelier.id}`}>{sommelier.firstName}</Link>}
                        className={sommelier.id === currentUser ? "user_schedule_name logged_in" : "user_schedule_name"}
                        id={sommelier.id}
                        shiftFormat={this.state.shiftFormat}
                        selectedWeek={this.state.selectedWeek}
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
                <div className="schedule_page">
                    <div className="user_current_month">
                        <button 
                            className="user_current_schedule_update_button" 
                            onClick={this.incrementCount}
                        >
                            {this.state.updateButtonText}
                        </button>
                        <MonthRow className="month-current"/>
                    </div>
                    <div className="user_schedule_container">
                        <CurrentWeekDayRow week={this.state.currentWeek}/>
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
                    <div className="user_selected_month">
                        <div className="select_save">
                            <ScheduleSelect
                                className="schedule-select" 
                                value={this.state.selectedWeek} 
                                onChange={this.handleScheduleSelection}
                            />
                        </div>
                        <SelectedMonthRow 
                            className="month_row-selected"
                            selectedWeek={this.state.selectedWeek}
                        />
                    </div>
                    <div className="user_schedule_container">
                        <SelectedWeekDayRow week={this.state.selectedWeek}/>
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
            </div>
		)
	}
}

const mapStateToProps = state => ({
	employees: state.employees
})

export default connect(mapStateToProps)(Schedule)