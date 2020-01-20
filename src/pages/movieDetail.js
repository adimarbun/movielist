import React, { Component } from "react";
import { Card, Col, Row, Image } from "react-bootstrap";
import Axios from "axios";
import Header from "../components/header";
import Footer from "../components/footer";
import { withRouter } from "react-router";

class MovieDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      genres: [],
      production_companies: []
    };
  }

  componentDidMount() {
    const { match } = this.props;

    Axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=8f1d4611b0e6ecfdb978fc2bb38c6fc6`
    }).then(res => {
      this.setState({ data: res.data });
      this.setState({ genres: res.data.genres });
      this.setState({ production_companies: res.data.production_companies });
    });
  }
  render() {
    const data = this.state.data;

    return (
      <div>
        <Header />
        <Card bg="dark" style={{ color: "white" }}>
          <Card.Header as="h5">{data.original_title}</Card.Header>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Card.Img
              style={{ maxWidth: "900px" }}
              src={
                `https://image.tmdb.org/t/p/w500_and_h282_face` +
                data.poster_path
              }
            />
          </div>
          <Card.Body>
            <Row>
              <Col>
                <h4>Overview</h4>
                <Card.Text>{data.overview}</Card.Text>
              </Col>
              <Col>
                <h4>Description </h4>
                <div>
                  <h6>Homepage : {data.homepage}</h6>
                  <h6>Status : {data.status}</h6>
                  <h6>Release Date : {data.release_date}</h6>
                </div>
                <div>
                  <h5>Genres:</h5>
                  {this.state.genres.map((data, index) => {
                    return <h6 key={index}>*{data.name}</h6>;
                  })}
                </div>
              </Col>
              <Col>
                <h4>Production Company</h4>
                {this.state.production_companies.map((data, index) => {
                  if (data.logo_path === null) {
                    return (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center"
                        }}
                      >
                        <Image
                          src={`https://cdn.pixabay.com/photo/2015/09/02/12/45/movie-918655__340.jpg`}
                          thumbnail
                          style={{ maxWidth: "100px", margin: "10px" }}
                        />
                        <h6>{data.name}</h6>
                      </div>
                    );
                  } else {
                    return (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center"
                        }}
                      >
                        <Image
                          src={
                            `https://image.tmdb.org/t/p/w500_and_h282_face` +
                            data.logo_path
                          }
                          thumbnail
                          style={{ maxWidth: "100px", margin: "10px" }}
                        />
                        <h6>{data.name}</h6>
                      </div>
                    );
                  }
                })}
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Footer />
      </div>
    );
  }
}

export default withRouter(MovieDetail);
