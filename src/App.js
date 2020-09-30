import React from "react";
import "./App.css";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        <Route path="/">
          <Header />
        </Route>
        <Route exact={true} path="/">
          <Home />
        </Route>
        <Route exact={true} path="/about">
          <About />
        </Route>
        <Route exact={true} path="/exp">
          <Experience />
        </Route>
        <Route exact={true} path="/skills">
          <Skills />
        </Route>
      </div>
    </Router>
  );
}

export default App;
