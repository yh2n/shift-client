import React, { Component } from "react";
import { connect } from "react-redux";
import Pusher from "pusher-js";

import AccountNav from "../../../components/AccountNav";
import AdminMenuModal from "../../../components/AdminMenuModal";
import Notifications from "../../../components/Notifications";
import ContactRow from "../../../components/ContactRow";
import ContactLabels from "../../../components/ContactLabels";
import ContactRowMobile from "../../../components/ContactRowMobile";
import { fetchEmployees } from "../../../actions/fetch_employees";
import "./style.css";

export class Staff extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            isDisplayed: false,
            availability_alert: false,
            new_notification: false
        };
    }

    componentDidMount() {
        document.body.classList.add("admin_background");
        this.props.dispatch(fetchEmployees());
        this.pusher = new Pusher("dd4cfaae3504bbdaa2b2", {
            cluster: "us2",
            forceTLS: true
        });

        this.channel = this.pusher.subscribe("update");
        this.channel.bind("availability_update", () => {
            this.handleAvailabilityAlert();
        });
    }

    toggleMenuModal = () => {
        this.setState({
            isDisplayed: !this.state.isDisplayed
        });
    };

    handleAvailabilityAlert = () => {
        this.setState({
            availability_alert: true,
            new_notification: true
        });
        setTimeout(() => {
            this.setState({
                availability_alert: false
            });
        }, 7000);
    };

    componentWillUnmount() {
        document.body.classList.remove("admin_background");
        this.pusher.disconnect();
    }
    render() {
        return (
            <div className="admin_contacts">
                <div>
                    <AccountNav
                        onClick={this.toggleMenuModal}
                        className={
                            this.state.new_notification === false
                                ? "material-icons no_notification"
                                : "material-icons new_notification"
                        }
                        username={localStorage.getItem("username")}
                        linkTo="/admin"
                    />
                    <AdminMenuModal
                        show={this.state.isDisplayed}
                        onClose={this.toggleMenuModal}
                    />
                    <Notifications
                        className={
                            this.state.availability_alert
                                ? "employee_dashboard_notifications"
                                : "employee_dashboard_notifications notifications-hidden"
                        }
                        text="New schedule request!"
                    />
                </div>
                <div className="contact_page">
                    <div className="contact_list_container">
                        <ContactLabels />
                        <ContactRow
                            className="admin_contact"
                            linkTo={"employee-availability"}
                        />
                    </div>
                    <div className="contact_list_container-mobile">
                        <ContactRowMobile
                            className="admin_contact"
                            linkTo={"employee-availability"}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    employees: state.employees
});

export default connect(mapStateToProps)(Staff);
