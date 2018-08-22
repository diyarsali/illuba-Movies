import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchComponent from "../components/Search/SearchComponent";
import Home from "../components/Home";
import SingleMovie from "../components/SingleMovies/SingleMovie";
import Error from "../components/Error/Error";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/singlemovie/:id" component={SingleMovie} />
          <Route path="/SearchPage" component={SearchComponent} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
