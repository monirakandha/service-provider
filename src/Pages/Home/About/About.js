import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./About.css";
import HomeImg from "../../../images/1.png";
import SuccesImg from "../../../images/success.png"
import Signature from '../../../images/signature.png'
const About = () => {
  return (
    <div className="about-area">
      <Container>
        <Row>
          <Col>
            <div className="name-me">
              <img className="mx-auto d-block" src={HomeImg} alt="" srcset="" />
              <h2 className="text-center" style={{ fontSize: "1.5em" }}>
                Finest And Strongest Law Firm Win The World
              </h2>
              <h5 className="text-center" style={{ fontSize: "1em"}}>
              We offer 5 star service to our clients, which is why we have been so successful in what we do. We are driven to get the best results and have won thousands of cases for our clients.
              </h5>
              <img className="mx-auto d-block" src={Signature } alt="" srcset="" />
            </div>
          </Col>
          <Col>            
          <div>
              <img className="mx-auto d-block" src={SuccesImg} alt="" srcset="" />
              <h2 className="text-center" style={{ fontSize: "1.5em" }}>
                Finest And Strongest Law Firm Win The World
              </h2>
              <h5 className="text-center" style={{ fontSize: "1em"}}>
              Our firm never charges any upfront fees. We handle personal injury cases on a contingency fee basis, which means, you don’t pay a thing unless we win or settle your case.
              </h5>
            </div></Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
