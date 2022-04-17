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
            <div>
              <img className="mx-auto d-block" src={HomeImg} alt="" srcset="" />
              <h2 className="text-center" style={{ fontSize: "1.5em" }}>
                Finest And Strongest Law Firm Win The World
              </h2>
              <h5 className="text-center" style={{ fontSize: "1em"}}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
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
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </h5>
            </div></Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
