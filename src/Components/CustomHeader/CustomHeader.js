import React from 'react';
import styles from "./CustomHeader.module.css";
import logo from "../../images/logo.png";
import {
    Navbar, Container, Image, Offcanvas, Nav, Button, Form
    , NavDropdown
} from 'react-bootstrap';

function CustomHeader() {
    return (
        <div className=''
            style={{
                background: "#EBF7F2",
            }}>
            <Navbar expand="lg" >
                <Container d-flex algin-item-center
                    style={{
                        background: "#EBF7F2",
                    }}
                    fluid
                >
                    <Navbar.Brand href="#home">
                        <Image src={logo} className="img-fluid">
                        </Image>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar`}
                        aria-labelledby={`offcanvasNavbarLabel`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel`}>
                                <Image src={logo} className="img-fluid" style={{ border: "10px" }}>
                                </Image>
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body style={{ fontWeight: "600", color: "#183B56 !important" }}
                            className={styles.body}>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#home" className='me-4'>Home</Nav.Link>
                                <NavDropdown
                                    title="Landings"
                                    id={`offcanvasNavbarDropdown`}
                                    className='me-4'
                                >
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown
                                    title="Pages"
                                    id={`offcanvasNavbarDropdown`}
                                    className='me-4'
                                >
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#docs" className='me-4'>Docs</Nav.Link>
                                <Nav.Link href="#help" className='me-4'>Help</Nav.Link>
                            </Nav>
                            <Button
                                className={styles.customButton}>
                                Get it now
                            </Button>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}

export default CustomHeader