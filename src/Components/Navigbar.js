import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import Container from 'react-bootstrap/Container';


export default function Navigbar() {
    return (

        <Navbar sticky="top" expand="sm" collapseOnSelect >
            <Container className="navbar-logo">
                <Navbar.Brand href="/" >
                    <img src="./logo_elena.png" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle />
            </Container>


            <Navbar.Collapse className="justify-content-center">
                <Nav className="h5 ">
                    <Nav.Item >
                        <Nav.Link href="/" className="nav-links">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/about-us" className="nav-links">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/cart" className="nav-links">Cart</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/list-apartment" className="nav-links">ListApartment</Nav.Link>
                    </Nav.Item>

                </Nav>
            </Navbar.Collapse>

            <Container className="navbar-logo">
                <Button href="/contact" variant="danger" size="lg">Contact Us</Button>
            </Container>
        </Navbar >
    );
}
