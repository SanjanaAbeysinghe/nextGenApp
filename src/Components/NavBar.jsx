import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand
            href="/Home"
            style={{
              fontFamily: "Gabriola",
              fontSize: "20px",
              color: "#0a996eff",
              fontWeight: "bold",
            }}
          >
            NxtGn
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Faculty">Faculty</Nav.Link>
              <Nav.Link href="/AboutUs">About Us</Nav.Link>
              <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
              <Nav.Link href="/Payment">PaymentIntergrations</Nav.Link>
              <NavDropdown title="Courses" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="/course/webdev">
                  Web Development
                </NavDropdown.Item>
                <NavDropdown.Item href="/course/datascience">
                  Data Science
                </NavDropdown.Item>
                <NavDropdown.Item href="/course/cybers">
                  Cyber Security
                </NavDropdown.Item>
                <NavDropdown.Item href="/courser/graphicd">
                  Graphic Design
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Register</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/Register">Register </Nav.Link>
              <Nav.Link eventKey={2} href="/SignIn">
                Sign in
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
