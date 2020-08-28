import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Divider } from "@material-ui/core";

interface Props {
  title: string;
  mdSpan: number;
  mdOffset: number;
}
export default function Section(props: Props) {
  return (
    <Container fluid="sm">
      <Col
        xs={{ span: 12 }}
        md={{ span: props.mdSpan, offset: props.mdOffset }}
      >
        <h1 style={{ fontSize: "2em", marginTop: "5vh", marginLeft: "-15px" }}>
          {props.title}
        </h1>
        <Divider
          style={{ marginBottom: "3vh", marginLeft: "-15px" }}
          variant="fullWidth"
        />
      </Col>
    </Container>
  );
}
