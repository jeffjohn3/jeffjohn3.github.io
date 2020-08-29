import React from "react";
import { Content } from "../src/content";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Project from "../components/project";
import Section from "../components/section";
import { useMediaQuery } from "@material-ui/core";

export default function Projects() {
  const md = useMediaQuery("(min-width: 768px)");

  const projects = [...Content.Projects];
  const projects2d = [];
  while (projects.length) projects2d.push(projects.splice(0, 2));

  return (
    <div>
      <Section title="Projects" mdSpan={10} mdOffset={1} />
      <Container fluid="sm">
        {projects2d.map(([project1, project2]) => (
          <Row>
            <Col
              xs={{ span: 12, order: 1 }}
              md={{ span: 5, order: 1, offset: 1 }}
            >
              <Project {...project1} />
            </Col>
            <Col xs={{ span: 12, order: 2 }} md={{ span: 5, order: 2 }}>
              <Project {...project2} />
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
}
