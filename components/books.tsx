import { Content } from "../src/content";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Book from "../components/book";
import { useMediaQuery } from "@material-ui/core";
import Section from "../components/section";

export default function Books() {
  const md = useMediaQuery("(min-width: 768px)");

  const books = [...Content.Books];
  const books2d = [];
  while (books.length) books2d.push(books.splice(0, 3));

  return (
    <div>
      <Section title="Books I've Read" mdSpan={12} mdOffset={0} />

      <Container fluid="sm">
        {books2d.map(([book1, book2, book3]) => (
          <Row>
            <Col xs={{ span: 12, order: 1 }} md={{ span: 4, order: 1 }}>
              <Book {...book1} />
            </Col>
            <Col xs={{ span: 12, order: 2 }} md={{ span: 4, order: 2 }}>
              <Book {...book2} />
            </Col>
            <Col xs={{ span: 12, order: 2 }} md={{ span: 4, order: 2 }}>
              <Book {...book3} />
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
}
