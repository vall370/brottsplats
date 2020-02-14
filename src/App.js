import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import Home from './Home';
import { About } from './About';
import Sidebar from './components/Sidebar';
import Footer from './Footer';

const App = () => {
  return (
    <div>
    <React.Fragment>
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  </React.Fragment>
  <Footer/>
  </div>
  );
};

export default App;