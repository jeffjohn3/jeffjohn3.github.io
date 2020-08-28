import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { SocialIcon } from "react-social-icons";

const socialIcon = {
  size: "50",
  margin: "-25px 2% 0 2%",
};

export default function SocialMedia() {
  return (
    <Container fluid="md">
      <Row>
        <Col style={{ textAlign: "center" }}>
          <SocialIcon
            style={socialIcon}
            url="https://www.linkedin.com/in/jeffreyki-m"
            bgColor="#365EAC"
            fgColor="white"
          />
          <SocialIcon
            style={socialIcon}
            url="https://www.instagram.com/jeffjohn3"
            bgColor="#DB534B"
            fgColor="white"
          />
          <SocialIcon
            style={socialIcon}
            url="https://github.com/jeffjohn3"
            bgColor="#3C3C3C"
            fgColor="white"
          />
          <SocialIcon
            style={socialIcon}
            url="mailto:jeffjohn3@berkeley.edu"
            label="email"
            bgColor="#DB534B"
            fgColor="white"
          />
          <SocialIcon
            style={socialIcon}
            url="https://facebook.com/jeffjohn333"
            bgColor="#365EAC"
            fgColor="white"
          />
        </Col>
      </Row>
    </Container>
  );
}
