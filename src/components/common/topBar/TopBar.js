import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../../context/Context";

const TopBar = () => {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <Navbar className="top" bg="light" sticky="top" expand="lg">
      <Container>
        <Navbar.Brand as={Link} className=" header__logo" to="/">
          News Portal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link active as={Link} to="/home">
              HOME
            </Nav.Link>
            <Nav.Link active as={Link} to="#">
              ABOUT
            </Nav.Link>
            <Nav.Link active as={Link} to="#">
              CONTACT
            </Nav.Link>
            <Nav.Link active as={Link} to="/write">
              WRITE
            </Nav.Link>
            <Nav.Link active as={Link} to="/login" onClick={handleLogout}>
              {user && "LOGOUT"}
            </Nav.Link>
            {user ? (
              <Link to="/settings">
                <img className="topImg" src={PF + user.profilePic} alt="" />
              </Link>
            ) : (
              <>
                <Nav.Link active as={Link} to="/login">
                  LOGIN
                </Nav.Link>
                <Nav.Link active as={Link} to="/register">
                  REGISTER
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
