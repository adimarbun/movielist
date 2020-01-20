import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
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
    return (
      <Navbar bg="info" expand="lg">
        <Navbar.Brand href="/">Movie-List</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Movie" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="/nowPlaying">Now Playing</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/popular">Popular</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/topRated">Top Rated</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/upcoming">Upcoming</Link>
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
