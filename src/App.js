import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import MovieList from "./pages/movieList";
import MovieDetail from "./pages/movieDetail";
import NowPlaying from "./pages/nowPlaying";
import Popular from "./pages/popular";
import TopRated from "./pages/topRated";
import Upcoming from "./pages/upcoming";

function App() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <Router>
        <Switch>
          <Route path="/movieList/:name">
            <MovieList />
          </Route>
          <Route path="/nowPlaying">
            <NowPlaying />
          </Route>
          <Route path="/popular">
            <Popular />
          </Route>
          <Route path="/topRated">
            <TopRated />
          </Route>
          <Route path="/upcoming">
            <Upcoming />
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
