import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import Subnav from './components/navbar/Subnav';
import Dashboard from './components/Dashboard/Dashboard';
import Auth from './components/Auth/Auth';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Subnav />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/auth" exact component={Auth} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;