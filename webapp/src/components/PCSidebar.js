import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./PCSidebar.css";
import { Link } from "react-router-dom";

function PCSidebar() {
  return (
    <Navbar
      expand="lg"
      className="vertical-navbar"
      style={{ borderRight: "1px solid #C6C6C6" }}
    >
      <Container fluid>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="flex-column">
          <Nav.Link as={Link} to="/police">Police</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PCSidebar;
