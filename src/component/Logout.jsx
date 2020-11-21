import React, { Component } from "react";
import * as userService from "./../services/userService";
import "./../logout.css";

import { toast } from "react-toastify";

class Logout extends Component {
  handleLogOut = () => {
    userService
      .logOutUser()
      .then(this.onLogOutSuccess)
      .catch(this.onLogOutError);
  };

  onLogOutSuccess = () => {
    toast.info(" YOU ARE LOGGED OUT NOW. ", {
      closeOnClick: true,
      position: "top-center",
    });
    this.props.history.push("/login}");
  };

  onLogOutError = (error) => {
    console.log(error);
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="center">
            <button
              className="btn social-btn btn-danger mr-2"
              onClick={this.handleLogOut}
            >
              LOG OUT
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Logout;
