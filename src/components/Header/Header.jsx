import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav
                    className="mr-auto"
                    onSelect={(selectedKey) => {
                        console.log(`selected ${selectedKey}`);
                    }}
                >
                    <Nav.Link href="#one" eventKey="one">Favorite config 1</Nav.Link>
                    <Nav.Link href="#two">Favorite config 2</Nav.Link>
                    <Nav.Link href="#three">Favorite Config 3</Nav.Link>
                    <NavDropdown title="Options" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#four">Config 4</NavDropdown.Item>
                        <NavDropdown.Item href="#five">Config 5</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/share">Share data</NavDropdown.Item>
                        <NavDropdown.Item href="#action/config">Configure</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="https://github.com/joecullin/tally" target="_blank">About</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
  
export default Header;