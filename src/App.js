import React from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Intro from "./pages/Intro";
import Projects from "./pages/Projects";
import ContactMe from "./pages/ContactMe";

function App() {
  return (
      <>
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Intro}/>
                <Route path='/projects' component={Projects}/>
                <Route path='/contact-me' component={ContactMe}/>
            </Switch>
        </Router>
      </>
  );
}

export default App;
