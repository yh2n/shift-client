import React, { Component } from "react";
import Pusher from "pusher-js";
import AccountNav from "../../../components/AccountNav";
import AdminMenuModal from "../../../components/AdminMenuModal";
import ContactAvailability from "../../../components/ContactAvailability";

export default class EmployeeAvailabilityPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      availability_alert: false,
      schedule_alert: false,
      new_notification: false,
      device: ""
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleWindowResize);
    window.innerWidth < 570
      ? this.setState({ device: "mobile" })
      : this.setState({ device: "desktop" });

    this.pusher = new Pusher("dd4cfaae3504bbdaa2b2", {
      cluster: "us2",
      forceTLS: true
    });

    this.channel = this.pusher.subscribe("new_schedule");
    this.channel.bind("schedule_update", () => {
      this.handleScheduleAlert();
    });
  }
  toggleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  handleWindowResize = () => {
    window.innerWidth < 570
      ? this.setState({ device: "mobile" })
      : this.setState({ device: "desktop" });
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
    this.pusher.disconnect();
  }

  render() {
    return (
      <div className="contact_availability_page">
        <AccountNav
          onClick={() => this.toggleModal()}
          className={
            this.state.new_notification === false
              ? "material-icons no_notification"
              : "material-icons new_notification"
          }
          markAsRead={this.markAsRead}
          device={this.state.device}
          username={localStorage.getItem("username")}
        />
        <AdminMenuModal show={this.state.isOpen} onClose={this.toggleModal} />
        <ContactAvailability
          {...this.props}
          linkTo={`/admin/employee_database`}
        />
      </div>
    );
  }
}
