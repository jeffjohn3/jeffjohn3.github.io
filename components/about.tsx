import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Content } from "../src/content";
import Divider from "@material-ui/core/Divider";
import Experience from "./experience";
import { useMediaQuery } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ReactGA from "react-ga";

const hello = {
  fontWeight: "bold",
  fontSize: "2em",
  lineHeight: "1",
  marginTop: "25%",
  marginBottom: "10%",
} as React.CSSProperties;

export default function About() {
  const md = useMediaQuery("(min-width: 768px)");
  ReactGA.initialize("UA-167704928-1");
  ReactGA.pageview(window.location.pathname + window.location.search);

  const event = (category, action, label) => {
    ReactGA.event({
      category: category,
      action: action,
      label: label,
    });
  };

  return (
    <Container fluid="sm">
      <Row>
        <Col xs={{ span: 12 }} md={{ span: 6, order: 1, offset: 1 }}>
          <div style={hello}> Hello, nice to meet you! </div>
        </Col>
      </Row>
      <Row>
        <Col xs={{ span: 12 }} md={{ span: 6, order: 1, offset: 1 }}>
          <div> {Content.About} </div>
          <div style={{ textAlign: "center", margin: "4vh 0" }}>
            <Button
              variant="contained"
              // color="primary"
              href="https://drive.google.com/open?id=1oHJdDL7zsCLQIvnYpSurcefk98B5zk4W"
              onClick={() => {
                event("Link", "Click", "Resume");
              }}
            >
              Resume
            </Button>
          </div>
        </Col>
        <Col xs={{ span: 12 }} md={{ span: 4, order: 2 }}>
          <img
            src="/imgs/profilePicture.jpg"
            style={{
              width: "100%",
              borderRadius: "18px",
              marginTop: md ? "0" : "4vh",
            }}
          />
        </Col>
      </Row>
      <Divider style={{ margin: "6vh 8.4%" }} variant="middle" />

      {Content.Experiences.map((experience) => (
        <Experience {...experience} />
      ))}
    </Container>
  );
}
