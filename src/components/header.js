import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Card
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
              <Card.Header>
                <Link to="/nowPlaying">Now Playing</Link>
              </Card.Header>
              <Card.Header>
                <Link to="/popular">Popular</Link>
              </Card.Header>
              <Card.Header>
                <Link to="/topRated">Top Rated</Link>
              </Card.Header>
              <Card.Header>
                <Link to="/upcoming">Upcoming</Link>
              </Card.Header>
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
