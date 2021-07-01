import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Divider from "@material-ui/core/Divider";
import { useMediaQuery } from "@material-ui/core";

interface Props {
  Title: string;
  Role: string;
  Location: string;
  Image: string;
  Description: string;
}

export default function Experience(props: Props) {
  const md = useMediaQuery("(min-width: 768px)");

  return (
    <Container fluid="sm">
      <Row>
        <Col xs={{ span: 12, order: 2 }} md={{ span: 6, offset: 1, order: 1 }}>
          <img
            src={props.Image}
            style={{
              width: "100%",
              marginTop: md ? "0" : "4vh",
              borderRadius: "18px",
              height: "auto",
              aspectRatio: "1:1",
            }}
          />
        </Col>
        <Col xs={{ span: 12, order: 1 }} md={{ span: 4, order: 2 }}>
          <h1 style={{ fontSize: "1.5em" }}> {props.Title} </h1>
          <h2 style={{ fontSize: "1em" }}> {props.Role} </h2>
          <h2 style={{ fontSize: "1em" }}> {props.Location} </h2>
          <div> {props.Description} </div>
        </Col>
      </Row>
    </Container>
  );
}
