import React from 'react';
import Home from './pages/Home';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//change font for entire page, to use serif -- use global `*` in css for app
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch> 
        <Footer />
      </div>
    </Router>
  )
}

export default App;
