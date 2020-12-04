import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import moment from "moment";

import Staff from "./pages/admin/staff/index";
import AdminEmployeeInfo from "./pages/admin/employeeInfo/index.js";
import AdminRegistrationPage from "./components/AdminRegistrationPage";
import AdminSchedule from "./pages/admin/schedule/index.js";
import AuthenticationPage from "./components/AuthenticationPage";
import AvailabilityPage from "./pages/employee/availability";
import Contacts from "./pages/employee/contacts/index";
import ContactAvailabilityPage from "./pages/employee/contact_availability/index";
import EmployeeAvailabilityPage from "./pages/admin/availability/index.js";
import InstructionPage from "./pages/instructions/index";
import NotFound from "./pages/notFound/index";
import LandingPage from "./pages/home/index";
import LoginPage from "./pages/login/index";
import RegistrationPage from "./pages/registration/index";
import RegisterEmployee from "./components/RegisterEmployee";
import UserAccount from "./pages/employee/account";
import Schedule from "./pages/employee/schedule/index";

import "./App.css";

// First day of week is Monday: 1 //
// doy is calculated as 7 + dow - janX, where janX is the first day of January
// that must belong to the first week of the year. //
// First week of year must start with January 6th: 7 + 1 - 6 = 2
moment.updateLocale("en", {
  week: {
    dow: 1,
    doy: 1
  }
});

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/instructions" component={InstructionPage} />
            <Route exact path="/verification" component={AuthenticationPage} />
            <Route exact path="/registration" component={RegistrationPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route
              exact
              path="/admin/registration"
              component={AdminRegistrationPage}
            />
            <Route exact path="/my_account/:username" component={UserAccount} />
            <Route
              exact
              path="/my_account/:username/profile"
              component={UserAccount}
            />
            <Route
              exact
              path="/my_account/:username/availability"
              component={AvailabilityPage}
            />
            <Route
              exact
              path="/my_account/:username/schedule"
              component={Schedule}
            />
            <Route
              exact
              path="/my_account/:username/contacts"
              component={Contacts}
            />
            <Route
              exact
              path="/my_account/:username/contact-availability/:id"
              component={ContactAvailabilityPage}
            />
            <Route exact path="/admin" component={AdminSchedule} />
            <Route
              exact
              path="/admin/register_employee"
              component={RegisterEmployee}
            />
            <Route exact path="/admin/employee_database" component={Staff} />
            <Route
              exact
              path="/admin/employee/:id"
              render={props => <AdminEmployeeInfo {...props} />}
            />
            <Route
              exact
              path="/admin/employee-availability/:id"
              component={EmployeeAvailabilityPage}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
