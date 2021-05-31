import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = ({brandText}) => {
    return (
        <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
            <Navbar.Brand>{brandText}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav
                    className="container-fluid"
                    onSelect={(selectedKey) => {
                        console.log(`selected ${selectedKey}`);
                    }}
                >
                    <Nav.Link href="/#/">Counter</Nav.Link>
                    <Nav.Link href="/#/view">View</Nav.Link>
                    <NavDropdown title="Options" id="basic-nav-dropdown" className="ml-auto">
                        <NavDropdown.Item href="/4">Config 4</NavDropdown.Item>
                        <NavDropdown.Item href="/5">Config 5</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/share">Share data</NavDropdown.Item>
                        <NavDropdown.Item href="/config">Configure</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="https://github.com/joecullin/tally" target="_blank">About</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
  
export default Header;