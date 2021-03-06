import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import LandingPageNav from "../../components/LandingPageNav"
import Laptop from "../../components/Laptop"
import InstructionsSentence from "../../components/InstructionsSentence"
import CellPhone from "../../components/CellPhone"
import AnimationsInstructions from "../../components/AnimationsInstructions"
import { fetchEmployees } from "../../actions/fetch_employees"

import "./style.css"

export class LandingPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      request_alert: false,
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchEmployees())
    this.handleRequestAlert()
  }

  handleRequestAlert = () => {
    setInterval(() => this.requestAlert(), 3000)
  }

  requestAlert = () => {
    this.setState({
      request_alert: !this.state.request_alert,
    })
  }

  componentWillUnmount() {
    const refreshIntervalId = setInterval(this.requestAlert(), 1000)
    clearInterval(refreshIntervalId)
  }
  render() {
    const cellTextArr = [
      "Receive schedule updates and requests in real time",
      "Pick up open shifts",
      "Keep track of last minutes changes",
    ]
    const cellPhoneText = cellTextArr.map((text) => {
      return (
        <InstructionsSentence
          key={text}
          className="animations_text"
          text={text}
        />
      )
    })

    const laptopTextArr = [
      "Easily recall previous templates",
      "Have access to everyone's updated availability and plan accordingly",
    ]
    const laptopText = laptopTextArr.map((text) => {
      return (
        <InstructionsSentence
          key={text}
          className="animations_text"
          text={text}
        />
      )
    })
    const date = new Date()
    const currentYear = date.getFullYear()
    return (
      <div className="landing_page">
        <div className="intro_container">
          <LandingPageNav />
          <div className="app_presentation_container">
            <div
              className="app_presentation left_icons"
              style={{ color: "purple" }}
            >
              <i className="far fa-bell" />
            </div>
            <div className="app_presentation center_text">
              <p>ADDING REAL-TIME EXPERIENCE</p>
              <p>TO STAFF MANAGEMENT</p>
              <p>AND SCHEDULING</p>
            </div>
            <div
              className="app_presentation right_icons"
              style={{ color: "purple" }}
            >
              <i className="fas fa-users" />
              <i className="far fa-calendar-check" />
            </div>
          </div>
          <div className="bottom_border" />
          <div className="landing_page_animations">
            <div className="animations_container">
              <div className="laptop_container">
                <Laptop />
                <AnimationsInstructions
                  icon="far fa-calendar-alt"
                  style={{
                    fontSize: "40px",
                    color: "#5D87BF",
                  }}
                  instructionsClass=" laptop_instructions"
                  centerTextClass="animations_text icon_text"
                  centerText="Create new schedule in minutes"
                  sentences={laptopText}
                />
              </div>
            </div>
            <div className="dotted_bottom_border" />
            <div className="animations_container cell">
              <div className="cell-phone_container">
                <CellPhone requestAlert={this.state.request_alert} />
                <AnimationsInstructions
                  style={{
                    fontSize: "40px",
                    color: "#5D87BF",
                  }}
                  icon="fas fa-bell landing_page_bell"
                  instructionsClass="cell-phone_instructions"
                  centerTextClass="animations_text icon_text"
                  centerText="Get notified"
                  sentences={cellPhoneText}
                />
              </div>
            </div>
            <div className="dotted_bottom_border" />
            <div className="animations_container">
              <div className="dialogue_container">
                <div className="dialogue_icon1">
                  <div className="dialogue_bubble_left">
                    Hey man, can you cover me tonite?
                  </div>
                  <div className="dialogue_bubble_right">
                    Sorry bro, already on the schedule :(
                  </div>
                  <div className="dialogue_bubble_left">
                    <i
                      className="far fa-sad-tear"
                      style={{ fontSize: "20px" }}
                    />
                  </div>
                  <div className="dialogue_bubble_left">Ty</div>
                </div>
                <div className="laptop_instructions">
                  <div className="last_instructions">
                    <i
                      className="fas fa-umbrella-beach"
                      style={{
                        fontSize: "40px",
                        color: "#5D87BF",
                      }}
                    />
                    <i
                      className="far fa-laugh-beam"
                      style={{
                        fontSize: "40px",
                        color: "rgba(216, 73, 73, 85)",
                      }}
                    />
                    <i
                      className="fas fa-sun landing_page_sun"
                      style={{
                        fontSize: "40px",
                        color: "#26A56A",
                      }}
                    />
                  </div>
                  <div className="animations_text icon_text">
                    Ease the process...
                  </div>
                  <div className="animations_text">
                    ...of scheduling, swapping shifts, communicating with every
                    staff member!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="intro_container_redirect-desktop">
          <div className="demo_login_redirect">
            <Link
              to="/instructions"
              style={{ textDecoration: "none", color: "#26A56A" }}
            >
              Demo |{" "}
            </Link>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "#26A56A" }}
            >
              Login
            </Link>
          </div>
          <div>
            <Link to="//github.com/" target="_blank">
              <i
                className="fab fa-github"
                style={{
                  textDecoration: "none",
                  color: "#26A56A",
                  fontSize: "18px",
                }}
              />
            </Link>
          </div>
          <div className="credits" style={{ fontSize: "14px" }}>
            © {currentYear}{" "}
            <Link
              to="//yh2n.github.io/portfolio/"
              target="_blank"
              style={{ textDecoration: "none", color: "#26A56A" }}
            >
              Yohann Potico{" "}
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  employees: state.employees,
})

export default connect(mapStateToProps)(LandingPage)
