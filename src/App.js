import React from "react";
import "./App.css";

import { Route } from "react-router-dom";
import './App.css'

import Root from "./components/Root";
import Search from "./components/Search";

class App extends React.Component {

  render() {
    return (
      <div className="app">
        <Route path="/search" component={Search} />
        <Route exact path="/" component={Root} />
      </div>
    );
  }
}

export default App;

