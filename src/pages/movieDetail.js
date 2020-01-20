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
      production_companies: [],
      reviews: []
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
    Axios({
      method: "get",
      url: `https://api.themoviedb.org/3/movie/${match.params.id}/reviews?api_key=8f1d4611b0e6ecfdb978fc2bb38c6fc6`
    }).then(res => {
      this.setState({ reviews: res.data.results });
    });
  }
  render() {
    const data = this.state.data;

    return (
      <div>
        <Header />
        <Card style={{ color: "white", backgroundColor: "black" }}>
          <Card.Header as="h3" style={{ textAlign: "center" }}>
            {data.original_title}
          </Card.Header>

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
                <Card bg="dark" style={{ color: "white" }}>
                  <Card.Header>OVERVIEW</Card.Header>
                  <Card.Body>
                    <Card.Text>{data.overview}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card bg="dark">
                  <Card.Header>DESCRIPTION </Card.Header>
                  <Card.Body>
                    <h6>Homepage : {data.homepage}</h6>
                    <h6>Status : {data.status}</h6>
                    <h6>Release Date : {data.release_date}</h6>

                    <h5>Genres:</h5>
                    {this.state.genres.map((data, index) => {
                      return <h6 key={index}>*{data.name}</h6>;
                    })}
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card bg="dark">
                  <Card.Header>PRODUCTION COMPANY</Card.Header>
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
                            style={{ maxWidth: "70px", margin: "10px" }}
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
                            style={{ maxWidth: "70px", margin: "10px" }}
                          />
                          <h6>{data.name}</h6>
                        </div>
                      );
                    }
                  })}
                </Card>
              </Col>
            </Row>
            <Card
              bg="info"
              style={{
                color: "black",
                textAlign: "justify",
                margin: "10px 0"
              }}
            >
              <Card.Header as="h2">Reviews</Card.Header>
              {this.state.reviews.map((data, index) => {
                return (
                  <Card
                    bg="dark"
                    key={index}
                    style={{ margin: "10px", color: "white" }}
                  >
                    <Card.Header>Author : {data.author}</Card.Header>
                    <Card.Body>
                      <Card.Text>{data.content}</Card.Text>
                    </Card.Body>
                  </Card>
                );
              })}
            </Card>
          </Card.Body>
        </Card>
        <Footer />
      </div>
    );
  }
}

export default withRouter(MovieDetail);
