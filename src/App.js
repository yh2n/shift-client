import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import moment from 'moment';

import AdminAccount from './components/AdminAccount';
import AdminEmployeeDashboard from './components/AdminEmployeeDashboard';
import AdminLogin from './components/AdminLogin';
import AdminRegistrationPage from './components/AdminRegistrationPage';
import AdminSchedule from './components/AdminSchedule';
import AuthenticationPage from './components/AuthenticationPage';
import AvailabilityPage from './components/AvailabilityPage';
import Contacts from './components/Contacts';
import ContactAvailabilityPage from './components/ContactAvailabilityPage';
import EmployeeAvailabilityPage from './components/EmployeeAvailabilityPage';
import InstructionPage from './components/InstructionPage';
import NotFound from './components/NotFound';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import RegisterEmployee from './components/RegisterEmployee';
import UserAccount from './components/UserAccount';
import UserSchedule from './components/UserSchedule';

import './App.css';

// First day of week is Monday: 1 //
// doy is calculated as 7 + dow - janX, where janX is the first day of January 
// that must belong to the first week of the year. //
// First week of year must start with January 7th: 7 + 1 - 7 = 1
moment.updateLocale('en', {
  week: {
    dow: 1,
    doy: 1
  },
})


class App extends Component {
  render() {
    return (
        <Router>
            <div className="app">
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/instructions" component={InstructionPage} />
                <Route exact path="/admin/login" component={AdminLogin} />
                <Route exact path="/verification" component={AuthenticationPage} />
                <Route exact path="/registration" component={RegistrationPage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/admin/registration" component={AdminRegistrationPage} />
                <Route exact path="/my_account/:username" component={UserAccount} />
                <Route exact path="/my_account/:username/profile" component={UserAccount} />
                <Route exact path="/my_account/:username/availability" component={AvailabilityPage} />
                <Route exact path="/my_account/:username/schedule" component={UserSchedule} />
                <Route exact path="/my_account/:username/contacts" component={Contacts} />
                <Route exact path="/my_account/:username/contact-availability/:id" component={ContactAvailabilityPage} />
                <Route exact path="/admin" component={AdminSchedule} />
                <Route exact path="/admin/register_employee" component={RegisterEmployee} />
                <Route exact path="/admin/employee_database" component={AdminAccount} />
                <Route exact path="/admin/employee/:id" render={props => <AdminEmployeeDashboard {...props}/>} />
                <Route exact path="/admin/employee-availability/:id" component={EmployeeAvailabilityPage} />
                <Route component={NotFound} />
              </Switch>
            </div>
        </Router>
    );
  }
}


export default App;
