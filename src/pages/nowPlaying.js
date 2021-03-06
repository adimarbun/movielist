import React, { Component } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { withRouter, Link } from "react-router-dom";
import Axios from "axios";
import { Card, Row } from "react-bootstrap";

class NowPlaying extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    Axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/now_playing?api_key=8f1d4611b0e6ecfdb978fc2bb38c6fc6`
    }).then(res => {
      this.setState({ data: res.data.results });
    });
  }

  render() {
    const datas = this.state.data;
    return (
      <div>
        <Header />
        <Card.Header as="h2">Now Playing</Card.Header>
        <Row style={{ width: "100%", padding: " 0 10%" }}>
          {datas.map((data, index) => {
            return (
              <Card key={index} style={{ width: "18rem", margin: "5px" }}>
                <Card.Img
                  variant="top"
                  src={
                    `https://image.tmdb.org/t/p/w500_and_h282_face` +
                    data.poster_path
                  }
                />
                <Card.Body>
                  <Card.Title> {data.title}</Card.Title>
                  <Card.Text>
                    {data.overview.substring(0, 100) + ".."}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <Link to={"/movieDetail/" + data.id}> More Info</Link>
                </Card.Footer>
              </Card>
            );
          })}
        </Row>
        <Footer />
      </div>
    );
  }
}

export default withRouter(NowPlaying);
