import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const HomePractric = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="home-practric">
              <h2 className="text-center" style={{ fontSize: "4em" }}>
                Practice Area
              </h2>
              <h5 className="text-center" style={{ fontSize: "1em" }}>
                Many variations of passages of Lorem Ipsum available, but the
                majority have suffered alteration in some.
              </h5>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePractric;
