import React from "react";
import "./About.css";
import FuturePlan from "./FuturePlan/FuturePlan";
import LnadingPageImage from "../../images/myimg.png";
import { Col, Container, Row } from "react-bootstrap";
const About = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12}>
          <h1 className="about-heading text-center"> This is about page</h1>
     
      <div className="image-container">
      <img src={LnadingPageImage}  className="img-fluid" alt="" srcset="" />
      </div>
      <FuturePlan></FuturePlan>
          </Col>
        </Row>
      </Container>

    </div>
  );
};

export default About;
