import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";

const background = {
  minHeight: "45vh",
  boxShadow: "0px 10px 32px -4px rgba(0,0,0,0.51)",
  backgroundColor: "#336ee2",
  // backgroundImage: "linear-gradient(180deg, #007bff, rgba(2,0,36,1) 100%)",
};

const container = {
  height: "45vh",
};
const helloRow = {};
const hello = {
  color: "white",
};

export default function Banner() {
  return (
    <div style={background}>
      <Container fluid="sm" style={{ height: "45vh" }}>
        <Row style={{ height: "20vh" }}> </Row>
        <Row style={helloRow}>
          <Col xs={{ span: 11, offset: 1 }} md={{ span: 6, offset: 3 }}>
            <div style={{ ...hello, fontSize: "2.5vh" }}> Hello, I'm</div>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 11, offset: 1 }} md={{ span: 6, offset: 3 }}>
            <div style={{ ...hello, fontSize: "7vh" }}> Jeffrey Kim</div>
          </Col>
        </Row>
        <Row style={{ height: "4.5vh" }}> </Row>
      </Container>
    </div>
  );
}
