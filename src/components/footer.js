import React, { Component } from "react";
import { Card } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <Card bg="info">
        <Card.Header as="h5">MOVIE LIST</Card.Header>
        <Card.Body>
          <Card.Title>Special Movie Detail</Card.Title>
          <Card.Text>
            See the description of the movie that you will watch in the cinema
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Footer;
