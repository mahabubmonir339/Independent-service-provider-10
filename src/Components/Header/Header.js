import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <h2>E-Educare</h2>
                <Nav className="me-auto">
                    <Link to="/home">Home</Link>
                    <Link to="/reviews">Review</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/about">About</Link>


                </Nav>
            </Container>
        </Navbar>

    );
};

export default Header;