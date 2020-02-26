import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home';
import { About } from './About';
import { Karta } from './Karta';

import Footer from './Footer';
import Sidebar from "./components/Sidebar";
import Post from './Post';
import EventDate from './EventDate';

const App = () => {
  return (
    <div>
{/*   <Sidebar/>
 */}
    <React.Fragment>
    <Router>
      
      <Switch>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/map" component={Karta} />
        <Route path="/posts/:id" component={Post} />
        <Route path="/date/:date" component={EventDate} />

      </Switch>
    </Router>
  </React.Fragment>
  <Footer/>

  </div>
  );
};

export default App;