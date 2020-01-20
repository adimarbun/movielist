import React, { Component } from "react";
import Axios from "axios";
import { Carousel, Row, Col } from "react-bootstrap";

class Crausel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      data2: [],
      data3: []
    };
  }

  componentDidMount() {
    Axios({
      method: "get",
      url:
        "https://api.themoviedb.org/3/movie/now_playing?api_key=8f1d4611b0e6ecfdb978fc2bb38c6fc6"
    }).then(res => {
      this.setState({ data: res.data.results });
    });
    Axios({
      method: "get",
      url:
        "https://api.themoviedb.org/3/trending/movie/day?api_key=8f1d4611b0e6ecfdb978fc2bb38c6fc6"
    }).then(res => {
      this.setState({ data2: res.data.results });
    });
    Axios({
      method: "get",
      url:
        "https://api.themoviedb.org/3/movie/upcoming?api_key=8f1d4611b0e6ecfdb978fc2bb38c6fc6"
    }).then(res => {
      this.setState({ data3: res.data.results });
    });
  }

  render() {
    const datas = this.state.data;

    return (
      <div style={{ margin: "5% 0" }}>
        <Row style={{ margin: 0 }}>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <h5 style={{ color: "white" }}>Trending Movie</h5>
            <Carousel
              controls={false}
              indicators={false}
              style={{ minWidth: "360px" }}
            >
              {this.state.data2.map((data, index) => {
                return (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={
                        `https://image.tmdb.org/t/p/w500_and_h282_face` +
                        data.poster_path
                      }
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>{data.title}</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
          <Col
            xs={5}
            style={{
              textAlign: "center"
            }}
          >
            <h5 style={{ color: "white" }}>Now Playing</h5>
            <Carousel
              controls={false}
              indicators={false}
              style={{ minWidth: "360px" }}
            >
              {datas.map((data, index) => {
                return (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={
                        `https://image.tmdb.org/t/p/w500_and_h282_face` +
                        data.poster_path
                      }
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>{data.title}</h3>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <h5 style={{ color: "white" }}>Upcoming</h5>
            <Carousel
              controls={false}
              indicators={false}
              style={{ minWidth: "360px" }}
            >
              {this.state.data3.map((data, index) => {
                return (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src={
                        `https://image.tmdb.org/t/p/w500_and_h282_face` +
                        data.poster_path
                      }
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>{data.name}</h3>
                      <p>{data.title}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Crausel;
