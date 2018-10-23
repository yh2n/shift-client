import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './src/components/LandingPage';
import HomePage from './src/components/HomePage';
import AdminLogin from './src/components/AdminLogin';
import AuthenticationPage from './src/components/AuthenticationPage';
import RegistrationPage from './src/components/RegistrationPage';
import AdminRegistrationPage from './src/components/AdminRegistrationPage';
import AdminSchedule from './src/components/AdminSchedule';
import UserAccount from './src/components/UserAccount';
import AvailabilityPage from './src/components/AvailabilityPage';
import UserSchedule from './src/components/UserSchedule';
import Contacts from './src/components/Contacts';
import ContactAvailabilityPage from './src/components/ContactAvailabilityPage';
import RegisterEmployee from './src/components/RegisterEmployee';
import AdminAccount from './src/components/AdminAccount';
import AdminEmployeeDashboard from './src/components/AdminEmployeeDashboard';
import EmployeeAvailabilityPage from './src/components/EmployeeAvailabilityPage';
import NotFound from './src/components/NotFound';

import './App.css';

class App extends Component {
  render() {
    return (
          <Router>
            <div className="app">
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/login" component={HomePage} />
              <Route exact path="/admin/login" component={AdminLogin} />
              <Route exact path="/verification" component={AuthenticationPage} />
              <Route exact path="/registration" component={RegistrationPage} />
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
              <Route exact path="/admin/employee/:id" component={AdminEmployeeDashboard} />
              <Route exact path="/admin/employee-availability/:id" component={EmployeeAvailabilityPage} />
              <Route path=" * " component={NotFound} />
            </div>
          </Router>
    );
  }
}


export default App;
