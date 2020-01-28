import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Films from "./components/Films";
import DetailFilms from "./components/DetailFilms";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar/> 
          <Route exact path="/" component={Films} />
          <Route path="/:films_id" component={DetailFilms} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
