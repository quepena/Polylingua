import React from 'react'
import { Row, Col, Card, Container, Form, Alert, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const MessageScreen = () => {
    return (
        <div>
            <Container>
                <Card>
                    <Card.Body>
                        {/* <Row md={10}>
                            <Col xs={4}>
                                <Card style={{backgroundColor: 'lightgray'}}>
                                    <Card.Body>
                                        <Card.Title><FontAwesomeIcon className="mx-2" icon={faUser}></FontAwesomeIcon><strong>Antoine</strong></Card.Title>
                                        <Card.Text>Bonjour! Oui! Comment tu t'appeles?</Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <Card.Title><FontAwesomeIcon className="mx-2" icon={faUser}></FontAwesomeIcon><strong>Jessica</strong></Card.Title>
                                        <Card.Text>Hi. Saw you in this app today</Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <Card.Title><FontAwesomeIcon className="mx-2" icon={faUser}></FontAwesomeIcon><strong>Li Hua</strong></Card.Title>
                                        <Card.Text>Hey, wanna learn some Chinese?</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6}>
                                <Alert variant="success"  className="mx-4">Hi! I want to start learning French, would you mind helping me?</Alert>
                                <Alert variant="primary" className="my-5">Bonjour! Oui! Comment tu t'appeles?</Alert>
                                <Card>
                                    <Form.Control className="mx-2" as="textarea" style={{borderLeft: 'none'}} placeholder="Write a message here" />
                                </Card>
                            </Col>
                        </Row> */}
                        <Row>
                            <Col md={3}>Friends</Col>
                            <Col md={9}>Message</Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default MessageScreen
