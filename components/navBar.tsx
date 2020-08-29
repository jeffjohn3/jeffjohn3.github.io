import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function NavBar() {
  const navBar = {
    width: "100%",
    // backgroundColor: "rgba(2,0,36,1)",
    backgroundColor: "#336ee2",
  };
  return (
    <Navbar style={navBar} collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="/">jeffrey.me</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link href="/">About</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/funFacts">Fun Facts</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
