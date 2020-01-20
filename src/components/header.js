import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

class Header extends Component {
  render() {
    const NowPlaying = "now_playing";
    const Popular = "popular";
    const TopRated = "top_rated";
    const Upcoming = "upcoming";

    return (
      <Navbar bg="info" expand="lg">
        <Navbar.Brand href="/">Movie-List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Movie" id="basic-nav-dropdown">
              <NavDropdown.Item href={"/movieList/" + NowPlaying}>
                Now Playing
              </NavDropdown.Item>
              <NavDropdown.Item href={"/movieList/" + Popular}>
                Popular
              </NavDropdown.Item>
              <NavDropdown.Item href={"/movieList/" + TopRated}>
                Top Rated
              </NavDropdown.Item>
              <NavDropdown.Item href={"/movieList/" + Upcoming}>
                Upcoming
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(Header);
