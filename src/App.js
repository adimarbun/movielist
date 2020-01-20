import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";

import MovieList from "./pages/movieList";

import MovieDetail from "./pages/movieDetail";

function App() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Router>
        <Switch>
          <Route path="/movieList">
            <MovieList />
          </Route>
          <Route path="/movieDetail/:id">
            <MovieDetail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
