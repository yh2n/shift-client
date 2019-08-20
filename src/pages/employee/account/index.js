import React, { Component } from "react";
import Pusher from "pusher-js";
import EmployeeInfoForm from "../../../components/employees/employeeInfo/index";
import AccountNav from "../../../components/AccountNav";
import Notifications from "../../../components/Notifications";
import UserMenuModal from "../../../components/UserMenuModal";
import { username } from "../../../utils/currentUser";
import "./style.css";

export default class UserAccount extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            availability_alert: false,
            schedule_alert: false,
            new_notification: false
        };
    }

    componentDidMount() {
        this.pusher = new Pusher("dd4cfaae3504bbdaa2b2", {
            cluster: "us2",
            forceTLS: true
        });

        this.channel = this.pusher.subscribe("update");
        this.channel.bind("availability_update", () => {
            this.handleAvailabilityAlert();
        });

        this.channel = this.pusher.subscribe("new_schedule");
        this.channel.bind("schedule_update", () => {
            this.handleScheduleAlert();
        });
    }
    toggleModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
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

    handleScheduleAlert = () => {
        this.setState({
            schedule_alert: true,
            new_notification: true
        });

        setTimeout(() => {
            this.setState({
                schedule_alert: false
            });
        }, 7000);
    };

    markAsRead = () => {
        this.setState({ new_notification: false });
    };

    componentWillUnmount() {
        this.pusher.disconnect();
    }

    render() {
        return (
            <div className="user_page">
                <AccountNav
                    onClick={this.toggleModal}
                    className={
                        this.state.new_notification === false
                            ? "material-icons no_notification"
                            : "material-icons new_notification"
                    }
                    markAsRead={this.markAsRead}
                    username={localStorage.getItem("username")}
                    newNotification={this.state.new_notification}
                    linkTo={`/my_account/${username}/schedule`}
                />
                <UserMenuModal
                    show={this.state.isOpen}
                    onClose={this.toggleModal}
                />
                <Notifications
                    className={
                        this.state.availability_alert
                            ? "user_account-availability_alert"
                            : "user_account-availability_alert notifications-hidden"
                    }
                    text="New schedule request!"
                />
                <Notifications
                    className={
                        this.state.schedule_alert
                            ? "user_account-schedule_alert"
                            : "user_account-schedule_alert notifications-hidden"
                    }
                    text="New schedule available!"
                />
                <EmployeeInfoForm />
            </div>
        );
    }
}
