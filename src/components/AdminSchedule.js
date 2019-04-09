import React, { Component } from 'react';
import moment from 'moment';
import AccountNav from './AccountNav';
import AdminMenuModal from './AdminMenuModal';
import MonthRow from './MonthRow';
import PositionRow from './PositionRow';
import AdminEmployeeRow from './AdminEmployeeRow';
import AdminEmployeeRowNext from './AdminEmployeeRow_next';
import CurrentWeekDayRow from './CurrentWeekDayRow';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchEmployees } from '../actions/fetch_employees';
import './AdminSchedule.css';



export class SelectedWeekDayRow extends Component {
    render() {
        return (
            <>
                <div key="day-row_position_following" className="admin_schedule_position"></div>
                <div key="day-row_Mo_following" className="admin_schedule_days_name">Mon <span className="admin_day_number">{moment().day(8).format("Do")}</span></div>	
                <div key="day-row_Tu_following" className="admin_schedule_days_name">Tue <span className="admin_day_number">{moment().day(9).format("Do")}</span></div>	
                <div key="day-row_We_following" className="admin_schedule_days_name">Wed <span className="admin_day_number">{moment().day(10).format("Do")}</span></div>	
                <div key="day-row_Th_following" className="admin_schedule_days_name">Thu <span className="admin_day_number">{moment().day(11).format("Do")}</span></div>	
                <div key="day-row_Fr_following" className="admin_schedule_days_name">Fri <span className="admin_day_number">{moment().day(12).format("Do")}</span></div>	
                <div key="day-row_Sa_following" className="admin_schedule_days_name">Sat <span className="admin_day_number">{moment().day(13).format("Do")}</span></div>	
                <div key="day-row_Su_following" className="admin_schedule_days_name">Sun <span className="admin_day_number">{moment().day(14).format("Do")}</span></div>
            </>
        )
    }
}



export class Schedule extends Component {
	constructor(props) {
		super(props);

		this.state = {
            isOpen : false,
            loading: false,
            error: null,
            toggled: false
		}
    }
    
    componentDidMount() {
        this.props.dispatch(fetchEmployees())
    }
		
	toggleModal = () => {
		this.setState({
            isOpen: !this.state.isOpen
        });
    }

    publishSchedule = () => {
    }

	render() {
        const employees = this.props.employees.employees;
        
        let barbacks = employees.filter(employee => employee.position === "Barback")
        let barbackRow = (
                barbacks.map(barback => (
                        <AdminEmployeeRow
                            key={barback.id}
                            name={
                                <Link to ={`/admin/employee/${barback.id}`} 
                                    style={{textDecoration:'none', color:' #129482'}}>
                                    {barback.firstName}
                                </Link>
                                }
                            id={barback.id}
                            schedule={barback.schedule}
                        />
                    )
                )
        ) 

        let barbackRow_next = (
                barbacks.map(barback => (
                        <AdminEmployeeRowNext
                            key={`${barback.id}_next`}
                            name={
                                <Link to ={`/admin/employee/${barback.id}`} 
                                    style={{textDecoration:'none', color:' #129482'}}>
                                    {barback.firstName}
                                </Link>
                                }
                            id={barback.id}
                            schedule={barback.next_schedule}
                        />
                    )
                )
        )
        

        let bartenders = employees.filter(employee => employee.position === "Bartender")
        let bartenderRow = (
                bartenders.map(bartender => (
                        <AdminEmployeeRow
                            key={bartender.id}
                            name={bartender.firstName}
                            id={bartender.id}
                            schedule={bartender.schedule}
                        />
                    )
                )
        )

        let bartenderRow_next = (
                bartenders.map(bartender => (
                        <AdminEmployeeRowNext
                            key={`${bartender.id}_next`}
                            name={bartender.firstName}
                            id={bartender.id}
                            schedule={bartender.next_schedule}
                        />
                    )
                )
        )


        let bussers = employees.filter(employee => employee.position === "Busser")
        let busserRow = (
                bussers.map(busser => (
                        <AdminEmployeeRow
                            key={busser.id}
                            name={busser.firstName}
                            id={busser.id}
                            schedule={busser.schedule}
                        />
                    )
                )
        )

        let busserRow_next = (
                bussers.map(busser => (
                        <AdminEmployeeRowNext
                            key={`${busser.id}_next`}
                            name={busser.firstName}
                            id={busser.id}
                            schedule={busser.next_schedule}
                        />
                    )
                )
        )


        let captains = employees.filter(employee => employee.position === "Captain")
        let captainRow = (
                captains.map(captain => (
                        <AdminEmployeeRow
                            key={captain.id}
                            name={captain.firstName}
                            id={captain.id}
                            schedule={captain.schedule}
                        />
                    )
                )
        )

        let captainRow_next = (
                captains.map(captain => (
                        <AdminEmployeeRowNext
                            key={`${captain.id}_next`}
                            name={captain.firstName}
                            id={captain.id}
                            schedule={captain.next_schedule}
                        />
                    )
                )
        )

        
        let hosts = employees.filter(employee => employee.position === "Hostess/Host")
        let hostRow = (
                hosts.map(host => (
                        <AdminEmployeeRow
                            key={host.id}
                            name={host.firstName}
                            id={host.id}
                            schedule={host.schedule}
                        />
                    )
                )
        )

        let hostRow_next = (
                hosts.map(host => (
                        <AdminEmployeeRowNext
                            key={`${host.id}_next`}
                            name={host.firstName}
                            id={host.id}
                            schedule={host.next_schedule}
                        />
                    )
                )
        )


        let maitre_ds = employees.filter(employee => employee.position === "Maitre d'")
        let maitreDRow = (
                maitre_ds.map(maitre_d => (
                        <AdminEmployeeRow
                            key={maitre_d.id}
                            name={maitre_d.firstName}
                            id={maitre_d.id}
                            schedule={maitre_d.schedule}
                        />
                    )
                )
        )

        let maitreDRow_next = (
                maitre_ds.map(maitre_d => (
                        <AdminEmployeeRowNext
                            key={`${maitre_d.id}_next`}
                            name={maitre_d.firstName}
                            id={maitre_d.id}
                            schedule={maitre_d.next_schedule}
                        />
                    )
                )
        )


        let managers = employees.filter(employee => employee.position === "Manager")
        let managerRow = (
                managers.map(manager => (
                        <AdminEmployeeRow
                            key={manager.id}
                            name={manager.firstName}
                            id={manager.id}
                            schedule={manager.schedule}
                        />
                    )
                )
        )

        let managerRow_next = (
                managers.map(manager => (
                        <AdminEmployeeRowNext
                            key={`${manager.id}_next`}
                            name={manager.firstName}
                            id={manager.id}
                            schedule={manager.next_schedule}
                        />
                    )
                )
        )

        
        let runners = employees.filter(employee => employee.position === "Runner")
        let runnerRow = (
                runners.map(runner => (
                        <AdminEmployeeRow
                            key={runner.id}
                            name={runner.firstName}
                            id={runner.id}
                            schedule={runner.schedule}
                        />
                    )
                )
        )

        let runnerRow_next = (
                runners.map(runner => (
                        <AdminEmployeeRowNext
                            key={`${runner.id}_next`}
                            name={runner.firstName}
                            id={runner.id}
                            schedule={runner.next_schedule}
                        />
                    )
                )
        )


        let servers = employees.filter(employee => employee.position === "Server")
        let serverRow = (
                servers.map(server => (
                        <AdminEmployeeRow
                            key={server.id}
                            name={server.firstName}
                            id={server.id}
                            schedule={server.schedule}
                        />
                    )
                )
        )

        let serverRow_next = (
                servers.map(server => (
                        <AdminEmployeeRowNext
                            key={`${server.id}_next`}
                            name={server.firstName}
                            id={server.id}
                            schedule={server.next_schedule}
                        />
                    )
                )
        )


        let sommeliers = employees.filter(employee => employee.position === "Sommelier")
        let sommelierRow = (
                sommeliers.map(sommelier => (
                        <AdminEmployeeRow
                            key={sommelier.id}
                            name={sommelier.firstName}
                            id={sommelier.id}
                            schedule={sommelier.schedule}
                        />
                    )
                )
        )

        let sommelierRow_next = (
                sommeliers.map(sommelier => (
                        <AdminEmployeeRowNext
                            key={`${sommelier.id}_next`}
                            name={sommelier.firstName}
                            id={sommelier.id}
                            schedule={sommelier.next_schedule}
                        />
                    )
                )
        )

		return(
			<div>
                <div>
                    <AccountNav onClick={this.toggleModal}/>
                    <AdminMenuModal
                        show={this.state.isOpen}
                        onClose={this.toggleModal}
                    />
                </div>
                <div className="current_schedule_prompt">
                </div>
                <div key="admin_schedule_container" className="admin_schedule_container">
                    <MonthRow />
                    <CurrentWeekDayRow className="day_row"/>
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
                <div key="admin_schedule_container" className="admin_schedule_container">
                    <SelectedWeekDayRow className="day_row"/>
                    <PositionRow position="Managers"/>
                    {managerRow_next}
                    <PositionRow key="schedule_captains" position="Captains"/>
                    {captainRow_next}
                    <PositionRow key="schedule_maitre-d" position="Maître d'"/>
                    {maitreDRow_next}
                    <PositionRow key="schedule_host-staff" position="Host staff"/>
                    {hostRow_next}
                    <PositionRow key="schedule_sommeliers" position="Sommeliers"/>
                    {sommelierRow_next}
                    <PositionRow key="schedule_barbacks" position="Barbacks"/>
                    {barbackRow_next}
                    <PositionRow key="schedule_bartenders" position="Bartenders"/>
                    {bartenderRow_next}
                    <PositionRow key="schedule_servers" position="Servers" />
                    {serverRow_next}
                    <PositionRow key="schedule_runners" position="Runners"/>
                    {runnerRow_next}
                    <PositionRow key="schedule_bussers" position="Bussers"/>
                    {busserRow_next}
                </div>
                <button onClick={() => this.publishSchedule()}>Publish</button>
            </div>
		)
	}
}


const mapStateToProps = state => ({
	employees: state.employees
})

export default connect(mapStateToProps)(Schedule)