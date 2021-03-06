import React from 'react';
// import Home from './pages/Home';
import Landing from "./pages/Landing";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
//react router used to create routes between pages
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container mb-5">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch> 
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
