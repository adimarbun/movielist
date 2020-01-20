import React, { Component } from "react";
import { Card } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <Card bg="info">
        <Card.Header as="h5">MOVIE LIST</Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Footer;
