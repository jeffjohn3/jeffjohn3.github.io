import React from "react";
import NavBar from "../../components/navBar";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <NavBar />
        <div style={{ width: "100%", maxHeight: "20vh", overflow: "hidden" }}>
          <img
            src="/imgs/projects/amazon.jpg"
            style={{ width: "100%", margin: "auto" }}
          />
        </div>
        <Container fluid="sm">
          <Row>
            <Col xs={{ span: 12 }} md={{ span: 8, order: 1, offset: 2 }}>
              <h1 style={{ fontSize: "1.5em", margin: "4vh 0" }}>
                Amazon Summer 2020 Internship
              </h1>
              <div>
                Due to NDA restrictions, I am unable to publicly share details
                on this project at this time. Over the course of my internship,
                I was able to:
                <ul>
                  <li>
                    Plan and develop a high impact notification system to
                    process programmatic events
                  </li>
                  <li>
                    Integrate notifications with existing issues API and ensure
                    backwards compatibility with previous projects
                  </li>
                  <li>
                    Create and design an internal React website hosted using AWS
                    ECS, CDK, Lambda, and other internal services
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </main>
    </React.Fragment>
  );
}
