import React, { Component } from 'react';
import Footer from "./../components/Footer"
import Navbar from "./../components/Navbar"
import Home from "./Home.js"
import Contact from "./Contact.js"
import Project from "./Project.js"
import Member from "./Member.js"
import Research from "./Research.js"
import News from "./News.js"
import Advisor from "./Advisor.js"

import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/advisor" component={Advisor} />
          <Route exact path="/news" component={News} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/member" component={Member} />
          <Route exact path="/research" component={Research} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/" component={Home} />
          <Redirect from="/home" to="/" />
        </Switch>
        <Footer/>
      </div>
    );
  }
}
export default Main;