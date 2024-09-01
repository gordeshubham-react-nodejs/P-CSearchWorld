import "./PCNavbar.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import PCSidebar from "./PCSidebar";

function PCNavbar() {
  return (
    <>
      <Navbar
        expand="lg"
        className=""
        style={{ borderBottom: "1px solid #C6C6C6" }}
      >
        <Container className="d-flex justify-content-center">
          <Navbar.Brand
            href="#"
            className="text-center"
            style={{ fontFamily: "Inria Sans", fontWeight: "bold" }}
          >
            PC-SearchWorld
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default PCNavbar;
