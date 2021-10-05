import React from 'react'
import { Navbar, Container, Nav, NavDropdown, Row, Col} from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Row>
                        <Col sm={5}>
                            {/* <Image src="/images/polylingua.png"></Image> */}
                            <Navbar.Brand href="#home">Polylingua</Navbar.Brand>
                        </Col>
                        <Col sm={5}>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">

                                    <Nav.Link href="#home">Friends</Nav.Link>
                                    <Nav.Link href="#link">Messages</Nav.Link>
                                    <Nav.Link href="#link">Blog</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                            <NavDropdown title="My Account" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Settings</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
