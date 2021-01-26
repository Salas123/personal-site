import React from "react";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Intro from "./pages/Intro";

function App() {
  return (
      <>
        <Router>
            <Navbar/>
            <Switch>
                <Route path='/' exact component={Intro}/>
            </Switch>
        </Router>
      </>
  );
}

export default App;
