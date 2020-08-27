import React from 'react';
// import Home from './pages/Home';
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import Project from "./pages/Project";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

//change font for entire page, to use serif -- use global `*` in css for app
function App() {
  return (
    <div className="App">
    <Project />
    </div>
  )
}

export default App;
