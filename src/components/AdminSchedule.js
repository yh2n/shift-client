import React, { Component } from 'react';
import moment from 'moment';
import AccountNav from './AccountNav';
import AdminMenuModal from './AdminMenuModal';
import MonthRow from './MonthRow';
import PositionRow  from './PositionRow';
import AdminEmployeeRow from './AdminEmployeeRow';
import AdminEmployeeRowSelected from './AdminEmployeeRowSelected';
import CurrentWeekDayRow from './CurrentWeekDayRow';
import SelectedMonthRow from './SelectedMonthRow';
import ScheduleSelect from './ScheduleSelect';
import SelectedWeekDayRow from './SelectedWeekDayRow';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchEmployees } from '../actions/fetch_employees';
import './AdminSchedule.css';


const currentUser = localStorage.getItem('id');

export class Schedule extends Component {
	constructor(props) {
		super(props);

		this.state = {
            isOpen : false,
            toggled: false,
            currentWeek: moment().week(),
            selectedWeek: moment().week() + 1,
            updateButtonText: "Save",
            isUpdating: false,
            submittedCount: 0,
            shiftFormat: ""
		}
    }
    
    componentDidMount() {
        this.props.dispatch(fetchEmployees());
        window.addEventListener("resize", this.handleWindowResize);
        window.innerWidth < 568 ? this.setState({ shiftFormat: "mobile" }) : this.setState({ shiftFormat: "desktop" })
    }

	toggleModal = () => {
		this.setState({
            isOpen: !this.state.isOpen
        });
    }

    handleScheduleSelection = (e) => {
        this.setState({selectedWeek: e.target.value})
        console.log(this.state.selectedWeek)
    }

    incrementCount = () => {
        this.setState(prevState => {
            return { 
                submittedCount: prevState.submittedCount + 1,
                updateButtonText: "Saved !",
                isUpdating: true
            }
        })
        
        setTimeout(()=> {
            this.setState({
                updateButtonText: "Save",
                isUpdating: false
            })
        }, 1000)
    }

    handleWindowResize = () => {
        if (window.innerWidth < 568) {
            this.setState({shiftFormat: "mobile"})
        }
        else {
            this.setState({shiftFormat: "desktop"})
        }
        console.log(this.state.shiftFormat)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.handleWindowResize);
    }
	render() {
        const employees = this.props.employees.employees;
        console.log(window.innerWidth, this.state.shiftFormat)
        
        let barbacks = employees.filter(employee => employee.position === "Barback")
        let barbackRow = (
                barbacks.map(barback => (
                        <AdminEmployeeRow
                            key={barback.id}
                            className={barback.id === currentUser ? "admin_schedule_name logged_in" : "admin_schedule_name"}
                            name={
                                <Link to ={`/admin/employee/${barback.id}`} 
                                    style={{textDecoration:'none', color:' #E9F2ED '}}>
                                    {barback.firstName}
                                </Link>
                                }
                            id={barback.id}
                            shiftFormat={this.state.shiftFormat}
                            schedule={barback.schedule}
                        />
                    )
                )
        ) 

        let barbackRow_selected = (
                barbacks.map(barback => (
                        <AdminEmployeeRowSelected
                            key={`${barback.id}_selected`}
                            name={
                                <Link to ={`/admin/employee/${barback.id}`} 
                                    style={{textDecoration:'none', color:' #E9F2ED '}}>
                                    {barback.firstName}
                                </Link>
                                }
                            id={barback.id}
                            shiftFormat={this.state.shiftFormat}
                            selectedWeek={this.state.selectedWeek}
                            submittedCount={this.state.submittedCount}
                        />
                    )
                )
        )
        

        let bartenders = employees.filter(employee => employee.position === "Bartender")
        let bartenderRow = (
                bartenders.map(bartender => (
                        <AdminEmployeeRow
                            key={bartender.id}
                            className={bartender.id === currentUser ? "admin_schedule_name logged_in" : "admin_schedule_name"}
                            name={
                                <Link to ={`/admin/employee/${bartender.id}`} 
                                    style={{textDecoration:'none', color:' #E9F2ED '}}>
                                    {bartender.firstName}
                                </Link>
                                }
                            id={bartender.id}
                            shiftFormat={this.state.shiftFormat}
                            schedule={bartender.schedule}
                        />
                    )
                )
        )

        let bartenderRow_selected = (
                bartenders.map(bartender => (
                        <AdminEmployeeRowSelected
                            key={`${bartender.id}_selected`}
                            className={bartender.id === currentUser ? "admin_schedule_name logged_in" : "admin_schedule_name"}
                            name={
                                <Link to ={`/admin/employee/${bartender.id}`} 
                                    style={{textDecoration:'none', color:' #E9F2ED '}}>
                                    {bartender.firstName}
                                </Link>
                                }
                            id={bartender.id}
                            shiftFormat={this.state.shiftFormat}
                            selectedWeek={this.state.selectedWeek}
                            submittedCount={this.state.submittedCount}
                        />
                    )
                )
        )


        let bussers = employees.filter(employee => employee.position === "Busser")
        let busserRow = (
                bussers.map(busser => (
                        <AdminEmployeeRow
                            key={busser.id}
                            className={busser.id === currentUser ? "admin_schedule_name logged_in" : "admin_schedule_name"}
                            name={
                                <Link to ={`/admin/employee/${busser.id}`} 
                                    style={{textDecoration:'none', color:' #E9F2ED '}}>
                                    {busser.firstName}
                                </Link>
                                }
                            id={busser.id}
                            shiftFormat={this.state.shiftFormat}
                            schedule={busser.schedule}
                        />
                    )
                )
        )

        let busserRow_selected = (
                bussers.map(busser => (
                        <AdminEmployeeRowSelected
                            key={`${busser.id}_selected`}
                            className={busser.id === currentUser ? "admin_schedule_name logged_in" : "admin_schedule_name"}
                            name={
                                <Link to ={`/admin/employee/${busser.id}`} 
                                    style={{textDecoration:'none', color:' #E9F2ED '}}>
                                    {busser.firstName}
                                </Link>
                                }
                            id={busser.id}
                            shiftFormat={this.state.shiftFormat}
                            selectedWeek={this.state.selectedWeek}
                            submittedCount={this.state.submittedCount}
                        />
                    )
                )
        )


        let captains = employees.filter(employee => employee.position === "Captain")
        let captainRow = (
                captains.map(captain => (
                        <AdminEmployeeRow
                            key={captain.id}
                            className={captain.id === currentUser ? "admin_schedule_name logged_in" : "admin_schedule_name"}
                            name={
                                <Link to ={`/admin/employee/${captain.id}`} 
                                    style={{textDecoration:'none', color:' #E9F2ED '}}>
                                    {captain.firstName}
                                </Link>
                                }
                            id={captain.id}
                            shiftFormat={this.state.shiftFormat}
                            schedule={captain.schedule}
                        />
                    )
                )
        )

        let captainRow_selected = (
                captains.map(captain => (
                        <AdminEmployeeRowSelected
                            key={`${captain.id}_selected`}
                            className={captain.id === currentUser ? "admin_schedule_name logged_in" : "admin_schedule_name"}
                            name={
                                <Link to ={`/admin/employee/${captain.id}`} 
                                    style={{textDecoration:'none', color:' #E9F2ED '}}>
                                    {captain.firstName}
                                </Link>
                                }
                            id={captain.id}
                            shiftFormat={this.state.shiftFormat}
                            selectedWeek={this.state.selectedWeek}
                            submittedCount={this.state.submittedCount}
                        />
                    )
                )
        )

        
        let hosts = employees.filter(employee => employee.position === "Hostess/Host")
        let hostRow = (
                hosts.map(host => (
                        <AdminEmployeeRow
                            key={host.id}
                            className={host.id === currentUser ? "admin_schedule_name logged_in" : "admin_schedule_name"}
                            name={
                                <Link to ={`/admin/employee/${host.id}`} 
                                    style={{textDecoration:'none', color:' #E9F2ED '}}>
                                    {host.firstName}
                                </Link>
                                }
                            id={host.id}
                            shiftFormat={this.state.shiftFormat}
                            schedule={host.schedule}
                        />
                    )
                )
        )

        let hostRow_selected = (
                hosts.map(host => (
                        <AdminEmployeeRowSelected
                            key={`${host.id}_selected`}
                            className={host.id === currentUser ? "admin_schedule_name logged_in" : "admin_schedule_name"}
                            name={
                                <Link to ={`/admin/employee/${host.id}`} 
                                    style={{textDecoration:'none', color:' #E9F2ED '}}>
                                    {host.firstName}
                                </Link>
                                }
                            id={host.id}
                            selectedWeek={this.state.selectedWeek}
                            shiftFormat={this.state.shiftFormat}
                            submittedCount={this.state.submittedCount}
                        />
                    )
                )
        )


        let maitre_ds = employees.filter(employee => employee.position === "Maitre d'")
        let maitreDRow = (
                maitre_ds.map(maitre_d => (
                        <AdminEmployeeRow
                            key={maitre_d.id}
                            className={maitre_d.id === currentUser ? "admin_schedule_name logged_in" : "admin_schedule_name"}
                            name={
                                <Link to ={`/admin/employee/${maitre_d.id}`} 
                                    style={{textDecoration:'none', color:' #E9F2ED '}}>
                                    {maitre_d.firstName}
                                </Link>
                                }
                            id={maitre_d.id}
                            shiftFormat={this.state.shiftFormat}
                            schedule={maitre_d.schedule}
                        />
                    )
                )
        )

        let maitreDRow_selected = (
                maitre_ds.map(maitre_d => (
                        <AdminEmployeeRowSelected
                            key={`${maitre_d.id}_selected`}
                            className={maitre_d.id === currentUser ? "admin_schedule_name logged_in" : "admin_schedule_name"}
                            name={
                                <Link to ={`/admin/employee/${maitre_d.id}`} 
                                    style={{textDecoration:'none', color:' #E9F2ED '}}>
                                    {maitre_d.firstName}
                                </Link>
                                }
                            id={maitre_d.id}
                            shiftFormat={this.state.shiftFormat}
                            selectedWeek={this.state.selectedWeek}
                            submittedCount={this.state.submittedCount}
                        />
                    )
                )
        )


        let managers = employees.filter(employee => employee.position === "Manager")
        let managerRow = (
                managers.map(manager => (
                        <AdminEmployeeRow
                            key={manager.id}
                            className={manager.id === currentUser ? "admin_schedule_name logged_in" : "admin_schedule_name"}
                            name={
                                <Link to ={`/admin/employee/${manager.id}`} 
                                    style={{textDecoration:'none', color:' #E9F2ED '}}>
                                    {manager.firstName}
                                </Link>
                                }
                            id={manager.id}
                            shiftFormat={this.state.shiftFormat}
                            schedule={manager.schedule}
                        />
                    )
                )
        )

        let managerRow_selected = (
                managers.map(manager => (
                        <AdminEmployeeRowSelected
                            key={`${manager.id}_selected`}
                            className={manager.id === currentUser ? "admin_schedule_name logged_in" : "admin_schedule_name"}
                            name={
                                <Link to ={`/admin/employee/${manager.id}`} 
                                    style={{textDecoration:'none', color:' #E9F2ED '}}>
                                    {manager.firstName}
                                </Link>
                                }
                            id={manager.id}
                            shiftFormat={this.state.shiftFormat}
                            selectedWeek={this.state.selectedWeek}
                            submittedCount={this.state.submittedCount}
                        />
                    )
                )
        )

        
        let runners = employees.filter(employee => employee.position === "Runner")
        let runnerRow = (
                runners.map(runner => (
                        <AdminEmployeeRow
                            key={runner.id}
                            className={runner.id === currentUser ? "admin_schedule_name logged_in" : "admin_schedule_name"}
                            name={
                                <Link to ={`/admin/employee/${runner.id}`} 
                                    style={{textDecoration:'none', color:' #E9F2ED '}}>
                                    {runner.firstName}
                                </Link>
                                }
                            id={runner.id}
                            shiftFormat={this.state.shiftFormat}
                            schedule={runner.schedule}
                        />
                    )
                )
        )

        let runnerRow_selected = (
                runners.map(runner => (
                        <AdminEmployeeRowSelected
                            key={`${runner.id}_selected`}
                            className={runner.id === currentUser ? "admin_schedule_name logged_in" : "admin_schedule_name"}
                            name={
                                <Link to ={`/admin/employee/${runner.id}`} 
                                    style={{textDecoration:'none', color:' #E9F2ED '}}>
                                    {runner.firstName}
                                </Link>
                                }
                            id={runner.id}
                            shiftFormat={this.state.shiftFormat}
                            selectedWeek={this.state.selectedWeek}
                            submittedCount={this.state.submittedCount}
                        />
                    )
                )
        )


        let servers = employees.filter(employee => employee.position === "Server")
        let serverRow = (
                servers.map(server => (
                        <AdminEmployeeRow
                            key={server.id}
                            className={server.id === currentUser ? "admin_schedule_name logged_in" : "admin_schedule_name"}
                            name={
                                <Link to ={`/admin/employee/${server.id}`} 
                                    style={{textDecoration:'none', color:' #E9F2ED '}}>
                                    {server.firstName}
                                </Link>
                                }
                            id={server.id}
                            shiftFormat={this.state.shiftFormat}
                            schedule={server.schedule}
                        />
                    )
                )
        )

        let serverRow_selected = (
                servers.map(server => (
                        <AdminEmployeeRowSelected
                            key={`${server.id}_selected`}
                            className={server.id === currentUser ? "admin_schedule_name logged_in" : "admin_schedule_name"}
                            name={
                                <Link to ={`/admin/employee/${server.id}`} 
                                    style={{textDecoration:'none', color:' #E9F2ED '}}>
                                    {server.firstName}
                                </Link>
                                }
                            id={server.id}
                            shiftFormat={this.state.shiftFormat}
                            selectedWeek={this.state.selectedWeek}
                            submittedCount={this.state.submittedCount}
                        />
                    )
                )
        )


        let sommeliers = employees.filter(employee => employee.position === "Sommelier")
        let sommelierRow = (
                sommeliers.map(sommelier => (
                        <AdminEmployeeRow
                            key={sommelier.id}
                            className={sommelier.id === currentUser ? "admin_schedule_name logged_in" : "admin_schedule_name"}
                            name={
                                <Link to ={`/admin/employee/${sommelier.id}`} 
                                    style={{textDecoration:'none', color:' #E9F2ED '}}>
                                    {sommelier.firstName}
                                </Link>
                                }
                            id={sommelier.id}
                            shiftFormat={this.state.shiftFormat}
                            schedule={sommelier.schedule}
                        />
                    )
                )
        )

        let sommelierRow_selected = (
                sommeliers.map(sommelier => (
                        <AdminEmployeeRowSelected
                            key={`${sommelier.id}_selected`}
                            className={sommelier.id === currentUser ? "admin_schedule_name logged_in" : "admin_schedule_name"}
                            name={
                                <Link to ={`/admin/employee/${sommelier.id}`} 
                                    style={{textDecoration:'none', color:' #E9F2ED '}}>
                                    {sommelier.firstName}
                                </Link>
                                }
                            id={sommelier.id}
                            shiftFormat={this.state.shiftFormat}
                            selectedWeek={this.state.selectedWeek}
                            submittedCount={this.state.submittedCount}
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
                <div className="admin_schedule_page">
                    <div className="admin_current_month-container">
                        <MonthRow 
                            className="month-current"
                            monthClass="admin_current_month"
                        />
                    </div>
                    <div className="admin_schedule_container">
                        <CurrentWeekDayRow week={this.state.currentWeek}/>
                        <PositionRow 
                            positionClass="admin_schedule_position" 
                            positionRowClass="admin_schedule_days"position="Managers"/>
                        {managerRow}
                        <PositionRow 
                            positionClass="admin_schedule_position" 
                            positionRowClass="admin_schedule_days"key="schedule_captains" 
                            position="Captains"
                        />
                        {captainRow}
                        <PositionRow 
                            positionClass="admin_schedule_position" 
                            positionRowClass="admin_schedule_days"key="schedule_maitre-d" 
                            position="Maître d'"
                        />
                        {maitreDRow}
                        <PositionRow 
                            positionClass="admin_schedule_position" 
                            positionRowClass="admin_schedule_days"key="schedule_host-staff" position="Host staff"/>
                        {hostRow}
                        <PositionRow 
                            positionClass="admin_schedule_position" 
                            positionRowClass="admin_schedule_days"key="schedule_sommeliers" position="Sommeliers"/>
                        {sommelierRow}
                        <PositionRow 
                            positionClass="admin_schedule_position" 
                            positionRowClass="admin_schedule_days"key="schedule_bartenders" position="Bartenders"/>
                        {bartenderRow}
                        <PositionRow 
                            positionClass="admin_schedule_position" 
                            positionRowClass="admin_schedule_days"key="schedule_barbacks" position="Barbacks"/>
                        {barbackRow}
                        <PositionRow 
                            positionClass="admin_schedule_position" 
                            positionRowClass="admin_schedule_days"key="schedule_servers" position="Servers" />
                        {serverRow}
                        <PositionRow 
                            positionClass="admin_schedule_position" 
                            positionRowClass="admin_schedule_days"key="schedule_runners" position="Runners"/>
                        {runnerRow}
                        <PositionRow 
                            positionClass="admin_schedule_position" 
                            positionRowClass="admin_schedule_days"key="schedule_bussers" position="Bussers"/>
                        {busserRow}
                    </div>
                    <div className="selected_month">
                        <div className="admin_select_save">
                            <ScheduleSelect
                                className="admin_schedule_select" 
                                value={this.state.selectedWeek} 
                                onChange={this.handleScheduleSelection}
                                optionClass="admin_select_options"
                            />
                            <button 
                                onClick={this.incrementCount}
                                className={this.state.isUpdating ? "admin_schedule_save updating-admin" : "admin_schedule_save updated-admin"}
                                >{this.state.updateButtonText}</button>
                        </div>
                        <SelectedMonthRow 
                            className="month_row-selected"
                            selectedMonthClass="admin_selected_month"
                            selectedWeek={this.state.selectedWeek}
                        />
                    </div>
                    <div className="admin_schedule_container">
                        <SelectedWeekDayRow className="day_row" week={this.state.selectedWeek}/>
                        <PositionRow 
                            positionClass="admin_schedule_position" 
                            positionRowClass="admin_schedule_days"position="Managers"/>
                        {managerRow_selected}
                        <PositionRow 
                            positionClass="admin_schedule_position" 
                            positionRowClass="admin_schedule_days"key="schedule_captains" position="Captains"/>
                        {captainRow_selected}
                        <PositionRow 
                            positionClass="admin_schedule_position" 
                            positionRowClass="admin_schedule_days"key="schedule_maitre-d" position="Maître d'"/>
                        {maitreDRow_selected}
                        <PositionRow 
                            positionClass="admin_schedule_position" 
                            positionRowClass="admin_schedule_days"key="schedule_host-staff" position="Host staff"/>
                        {hostRow_selected}
                        <PositionRow 
                            positionClass="admin_schedule_position" 
                            positionRowClass="admin_schedule_days"key="schedule_sommeliers" position="Sommeliers"/>
                        {sommelierRow_selected}
                        <PositionRow 
                            positionClass="admin_schedule_position" 
                            positionRowClass="admin_schedule_days"key="schedule_barbacks" position="Barbacks"/>
                        {barbackRow_selected}
                        <PositionRow 
                            positionClass="admin_schedule_position" 
                            positionRowClass="admin_schedule_days"key="schedule_bartenders" position="Bartenders"/>
                        {bartenderRow_selected}
                        <PositionRow 
                            positionClass="admin_schedule_position" 
                            positionRowClass="admin_schedule_days"key="schedule_servers" position="Servers" />
                        {serverRow_selected}
                        <PositionRow 
                            positionClass="admin_schedule_position" 
                            positionRowClass="admin_schedule_days"key="schedule_runners" position="Runners"/>
                        {runnerRow_selected}
                        <PositionRow 
                            positionClass="admin_schedule_position" 
                            positionRowClass="admin_schedule_days"key="schedule_bussers" position="Bussers"/>
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