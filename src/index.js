import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./services/serviceHelper";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import "sweetalert2/dist/sweetalert2.min.css";
import { ToastContainer } from "react-toastify";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.Fragment>
    <App></App>
    <ToastContainer />
  </React.Fragment>,
  document.getElementById("root")
);

serviceWorker.unregister();
