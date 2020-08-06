import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import { useAuth } from "util/auth.js";
import { useRouter } from "next/router";

function NavbarCustom(props) {
  const auth = useAuth();

  const router = useRouter();

  return (
    <Navbar bg={props.bg} variant={props.variant} expand={props.expand}>
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>
            <img
              className="d-inline-block align-top"
              src={props.logo}
              alt="Logo"
              height="30"
            ></img>
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle
          aria-controls="navbar-nav"
          className="border-0"
        ></Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="mr-auto">
            <Link href="/about" passHref>
              <Nav.Link active={false}>About</Nav.Link>
            </Link>

            <Link href="/contact" passHref>
              <Nav.Link active={false}>Contact</Nav.Link>
            </Link>

            <NavDropdown id="dropdown" title="More">
              <Link href="/faq" passHref>
                <NavDropdown.Item active={false}>FAQ</NavDropdown.Item>
              </Link>

              <Link href="/contact" passHref>
                <NavDropdown.Item active={false}>Contact</NavDropdown.Item>
              </Link>

              <NavDropdown.Item
                href="https://medium.com"
                target="_blank"
                active={false}
              >
                Blog
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="mr-1">
            {auth.user && (
              <NavDropdown id="dropdown" title="Account" alignRight={true}>
                <Link href="/dashboard" passHref>
                  <NavDropdown.Item active={false}>Dashboard</NavDropdown.Item>
                </Link>

                <Link href="/settings/general" passHref>
                  <NavDropdown.Item active={false}>Settings</NavDropdown.Item>
                </Link>

                <Dropdown.Divider></Dropdown.Divider>

                <Link href="/auth/signout" passHref>
                  <NavDropdown.Item
                    active={false}
                    onClick={(e) => {
                      e.preventDefault();
                      auth.signout();
                    }}
                  >
                    Sign out
                  </NavDropdown.Item>
                </Link>
              </NavDropdown>
            )}

            {!auth.user && (
              <Link href="/auth/signin" passHref>
                <Nav.Link active={false}>Sign in</Nav.Link>
              </Link>
            )}
          </Nav>

          {!auth.user && (
            <Button
              variant="primary"
              onClick={() => {
                router.push("/auth/signup");
              }}
            >
              Sign Up
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
