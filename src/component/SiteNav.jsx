import React from "react";
import { NavLink } from "react-router-dom";

class SiteNav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark sabio">
          <button className="link-button navbar-brand">
            Shells.com Videos
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <button className="nav-link link-button">
                  <NavLink to="/videolist">Video List </NavLink>
                </button>
              </li>
              <li className="nav-item active">
                <button className="nav-link link-button">
                  <NavLink to="/login">Login</NavLink>
                </button>
              </li>
              <li className="nav-item active">
                <button className="nav-link link-button">
                  <NavLink to="/logout">Logout</NavLink>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default SiteNav;
