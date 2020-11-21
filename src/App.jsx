import React from "react";
import SiteNav from "./component/SiteNav";
import Footer from "./Footer";
import { BrowserRouter, Route } from "react-router-dom";

import VideoList from "./component/videos/VideoList";
import VideoForm from "./component/videos/VideoForm";
import Login from "./component/Login";
import Logout from "./component/Logout";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <div>
            <SiteNav />
          </div>

          <div className="container-fluid mt-5">
            <main role="main">
              <Route exact path="/videolist" component={VideoList} />
              <Route exact path="/create" component={VideoForm} />
              <Route exact path="/video/:id/edit" component={VideoForm} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/logout" component={Logout} />
            </main>
          </div>

          <Footer />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
