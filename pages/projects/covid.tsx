import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NavBar from "../../components/navBar";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Pdf from "../../components/pdf";
import { Button } from "@material-ui/core";
import { captureClick } from "../../components/utils/googleAnalytics";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <NavBar />
        <div style={{ width: "100%", maxHeight: "20vh", overflow: "hidden" }}>
          <img
            src="/imgs/projects/covid.jpg"
            style={{ width: "100%", margin: "auto" }}
          />
        </div>
        <Container fluid="sm">
          <Row>
            <Col xs={{ span: 12 }} md={{ span: 8, order: 1, offset: 2 }}>
              <h1 style={{ fontSize: "1.5em", margin: "4vh 0" }}>
                Data-driven Modeling and Prediction of COVID-19 Infection
              </h1>
              <Pdf file="/covid.pdf" />
              <div style={{ textAlign: "center", margin: "4vh 0 0 0" }}>
                <Button
                  variant="contained"
                  onClick={captureClick("Covid PDF")}
                  href="https://drive.google.com/file/d/1oSp0RIFDIMyxUZMWIJFRwM3mwztN5h8Y/view?usp=sharing"
                >
                  View PDF
                </Button>
              </div>
              <div style={{ textAlign: "center", margin: "1.5vh 0 4vh 0" }}>
                <Button
                  variant="contained"
                  onClick={captureClick("Covid iPython")}
                  href="/covidIpython.html"
                  download
                >
                  View Source
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </main>
    </React.Fragment>
  );
}
