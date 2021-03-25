import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Home from "./components/Home";

import Contact from "./components/Contact";
import About from "./components/About";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/service">
        <Service />
      </Route>
      <Route exact path="/contact">
        <Contact />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Footer />
    </Router>
  );
};

export default App;
