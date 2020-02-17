import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import Home from './Home';
import { About } from './About';
import { Karta } from './Karta';

import Footer from './Footer';
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div>
  <Sidebar/>

    <React.Fragment>
    <Router>
      
      <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/map" component={Karta} />

      </Switch>
    </Router>
  </React.Fragment>
  <Footer/>

  </div>
  );
};

export default App;