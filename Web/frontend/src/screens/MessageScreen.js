import React from 'react'
import { Row, Col, Card, Container, Form, Alert, Image } from 'react-bootstrap'

const MessageScreen = () => {
    return (
        <div>
            <Container>
                <Card>
                    <Card.Body>
                        <Row md={10}>
                            <Col md={4}>
                                <Card>
                                    <Card.Body>
                                        {/* <Image src="" rounded /> */}
                                        <Card.Title><strong>Antoine</strong></Card.Title>
                                        <Card.Text>Bonjour! Oui! Comment tu t'appeles?</Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <Card.Title><strong>Jessica</strong></Card.Title>
                                        <Card.Text>Hi. Saw you in this app today</Card.Text>
                                    </Card.Body>
                                </Card>
                                <Card>
                                    <Card.Body>
                                        <Card.Title><strong>Li Hua</strong></Card.Title>
                                        <Card.Text>Hey, wanna learn some Chinese?</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={6}>
                                <Alert variant="success"  className="mx-5">Hi! I want to start learning French, would you mind helping me?</Alert>
                                <Alert variant="primary">Bonjour! Oui! Comment tu t'appeles?</Alert>
                                <Card>
                                    <Form.Control as="textarea" placeholder="Leave a comment here" />
                                </Card>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default MessageScreen
