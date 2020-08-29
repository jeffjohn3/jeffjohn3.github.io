import { Content } from "../src/content";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useMediaQuery } from "@material-ui/core";
import Section from "../components/section";

export default function FunFacts() {
  const md = useMediaQuery("(min-width: 768px)");

  const books = [...Content.Books];
  const books2d = [];
  while (books.length) books2d.push(books.splice(0, 3));

  return (
    <div>
      <Section title="Fun Facts" mdSpan={12} mdOffset={0} />

      <Container fluid="sm">
        <Row>
          <Col xs={{ span: 12, order: 1 }} md={{ span: 4, order: 1 }}>
            <ul>
              <li> I can wiggle my ears. </li>
              <li> This is a work in progress... </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
