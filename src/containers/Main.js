import React, { Component } from 'react';
import Footer from "./../components/Footer"
import Navbar from "./../components/Navbar"
import Home from "./Home.js"
import Edge from './Edgecomputing.js'
import VRAR from './VRAR.js'
import BlockChain from './BlockChain.js'
import Contact from "./Contact.js"
import Project from "./Project.js"
import Research from "./Research.js"
import About from "./About.js"
import News from "./News.js"
import Advisor from "./Advisor.js"
import Page from "./Page.js"

import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/news" component={News} />
          <Route exact path="/research" component={Research} />
          <Route path="/research/ec" component={Edge} />
          <Route path="/research/vr" component={VRAR} />
          <Route path="/research/bc" component={BlockChain} />
          <Route path="/news/:id?" component={Page} />
          <Route path="/advisor" component={Advisor} />
          <Route path="/project" component={Project} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
          <Redirect from="/home" to="/" />
        </Switch>
        <Footer/>
      </div>
    );
  }
}
export default Main;