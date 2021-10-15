import React from 'react'
import { Card, Container, Row, Col, Form, Button, ToggleButtonGroup, InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComment, faSearch } from '@fortawesome/free-solid-svg-icons';

const BlogScreen = () => {
    return (
        <div>
            {/* <Container>
                <Row>
                    <Col>
                        <Form.Control as="textarea" placeholder="Write a new post" />
                        <Button className="my-4" variant="success">Publish</Button>
                        <Card className="my-5">
                            <Card.Body>
                                <Card.Title><FontAwesomeIcon className="mx-2" icon={faUser}></FontAwesomeIcon><strong>Antoine</strong></Card.Title>
                                <Card.Text className="my-3">Hi! My name is Antoine and I'm French. People say that I'm kind and outgoing person!</Card.Text>
                                <Card.Text>Last summer I was in Barcelona with my parents and I fell in love with Spanish language. So I'm really looking forward to all the people speaking Spanish. </Card.Text>
                                <Card.Text>As a native French speaker I can help you with my language, and you are going to help me in my language learning path. Please text me if you are interested!!!!</Card.Text>
                                <Button variant="success"><FontAwesomeIcon className="mx-2" icon={faComment}></FontAwesomeIcon></Button>
                                <Form.Control className="my-5" style={{width: '60%', align: 'center'}} as="textarea" placeholder="Write a comment" />
                                <Button variant="success">Publish</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container> */}
            <Container>
                <Row>
                    <InputGroup className="my-5">
                        <FormControl placeholder="Find a user"/>
                        <Button variant="success"><FontAwesomeIcon className="mx-2" icon={faSearch}></FontAwesomeIcon></Button>
                    </InputGroup>
                    <Col style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', flexWrap: 'wrap' }}>
                        <Card style={{ width: '20%' }} className="p-3 m-3">
                            <Card.Body>
                                <Card.Title><FontAwesomeIcon className="mx-2" icon={faUser}></FontAwesomeIcon><strong>Antoine</strong></Card.Title>
                                <Card.Text className="my-3">Hi! My name is Antoine and I'm French. People say that I'm kind and outgoing person!</Card.Text>
                                <Card.Text className="py-2">Learning: <strong>Spanish</strong></Card.Text>
                                <Button variant="success">Account</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '20%' }} className="p-3 m-3">
                            <Card.Body>
                                <Card.Title><FontAwesomeIcon className="mx-2" icon={faUser}></FontAwesomeIcon><strong>Peter</strong></Card.Title>
                                <Card.Text className="my-3">I like Brezels and I want to try real German Brezels.... Please help me!!</Card.Text>
                                <Card.Text className="py-2">Learning: <strong>German</strong></Card.Text>
                                <Button variant="success">Account</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '20%' }} className="p-3 m-3">
                            <Card.Body>
                                <Card.Title><FontAwesomeIcon className="mx-2" icon={faUser}></FontAwesomeIcon><strong>Li Hua</strong></Card.Title>
                                <Card.Text className="my-3">I wanna be your Chinese teacher even though I'm not that good in English! Try me ;)</Card.Text>
                                <Card.Text className="py-2">Learning: <strong>English</strong></Card.Text>
                                <Button variant="success">Account</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '20%' }} className="p-3 m-3">
                            <Card.Body>
                                <Card.Title><FontAwesomeIcon className="mx-2" icon={faUser}></FontAwesomeIcon><strong>Jessica</strong></Card.Title>
                                <Card.Text className="my-3">Hey! It's Jessica! Let's just talk and be friends I'm sooooo bored rn!! I love music and art btw </Card.Text>
                                <Card.Text className="py-2">Learning: <strong>Korean</strong></Card.Text>
                                <Button variant="success">Account</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '20%' }} className="p-3 m-3">
                            <Card.Body>
                                <Card.Title><FontAwesomeIcon className="mx-2" icon={faUser}></FontAwesomeIcon><strong>Pedro</strong></Card.Title>
                                <Card.Text className="my-3">I love pineapple on pizza so here I am - learning Hawaiian! ALOHA y'all and Happy PolyLearning!!</Card.Text>
                                <Card.Text className="py-2">Learning: <strong>Hawaiian</strong></Card.Text>
                                <Button variant="success">Account</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '20%' }} className="p-3 m-3">
                            <Card.Body>
                                <Card.Title><FontAwesomeIcon className="mx-2" icon={faUser}></FontAwesomeIcon><strong>Alisa</strong></Card.Title>
                                <Card.Text className="my-3">Hello guys! My name's Alisa and I want to go to Poland this summer to visit my friends..</Card.Text>
                                <Card.Text className="py-2">Learning: <strong>Polish</strong></Card.Text>
                                <Button variant="success">Account</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BlogScreen

