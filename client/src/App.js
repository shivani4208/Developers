import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from './components/navbar/Navbar';
// import Dashboard from './components/Dashboard/Dashboard';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart/Cart';
import Details from './components/Details/Details';
import Auth from './components/Auth/Auth';
import Footer from './components/footer/Footer';
import Sidebar from './components/sidebar/Sidebar';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Sidebar />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/auth" exact component={Auth} />
            <Route path="/cart" component={Cart} />
            <Route path="/details" component={Details} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;