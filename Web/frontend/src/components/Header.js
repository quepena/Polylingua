import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const userLogin = useSelector(state => state.userLogin);

    const { userInfo } = userLogin;

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
                                    <LinkContainer to="/users">
                                        <Nav.Link>Friends</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/messages">
                                        <Nav.Link>Messages</Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/">
                                        <Nav.Link>Blog</Nav.Link>
                                    </LinkContainer>
                                </Nav>
                            </Navbar.Collapse>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={2}>
                            {/* <NavDropdown title="My Account" id="basic-nav-dropdown"> */}
                            {userInfo ? (
                                <NavDropdown title={userInfo.knownAs} id='name'>My profile
                                    <LinkContainer to="users/profile"></LinkContainer>
                                </NavDropdown>
                            ) : <LinkContainer to="/login">
                                <NavLink ></NavLink>
                                </LinkContainer>
                            }
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="">Edit profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="">Logout</NavDropdown.Item>
                        {/* </NavDropdown> */}
                    </Col>
                </Row>
            </Container>
        </Navbar>
        </header >
    )
}

export default Header
