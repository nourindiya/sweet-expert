import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <Navbar className="nav" expand="lg">
            <Container>
                <Navbar.Brand className="text-white" href=""><i class="fas fa-birthday-cake"></i> Sweet Expert</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="links">
                        <Link to="/home" className="link text-light" href="#home">Home</Link>
                        <Link to="/about" className="link text-light" href="#home">About Us</Link>
                        <Link to="/classes" className="link text-light" href="#link">Classes</Link>
                        <Link to="/contact" className="link text-light" href="#link">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;