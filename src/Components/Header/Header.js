import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container className="d-flex">
                <Link to="/"><h1>Tutor-Educare</h1></Link>
                <div><Nav className="me-auto">
                    <Link to="/home">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/about">About</Link>
                    <Link to="/login"><b>LogIn</b></Link>
                    <Link to="/register"><b>SignUp</b></Link>


                </Nav></div>
            </Container>
        </Navbar>

    );
};

export default Header;