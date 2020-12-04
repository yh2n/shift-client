import React, { Component } from "react"
import { Link } from "react-router-dom"
import "./style.css"

export default class NotFound extends Component {
  componentDidMount() {
    document.body.classList.add("not_found_background_color")
  }

  componentWillUnmount() {
    document.body.classList.remove("not_found_background_color")
  }
  render() {
    return (
      <div className="not_found_page">
        <h2 className="not_found_emoji">
          <span role="img" aria-label="weary-face">
            😩
          </span>
        </h2>
        <h2 className="not_found_text">
          Sorry the page you requested can not be found
        </h2>
        <h2>Please check your url and try again</h2>
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            color: "rgba(242, 201, 79, 0.9)",
          }}
        >
          Back
        </Link>
      </div>
    )
  }
}
