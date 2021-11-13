import React, { useEffect, useState } from 'react'
import { Card, Container, Row, Col, Form, Button, ToggleButtonGroup, InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComment, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { LinkContainer } from 'react-router-bootstrap';

const BlogScreen = ({ history }) => {
    const [posts, setPosts] = useState([]);

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            const fetchPosts = async (userId) => {
                const res = await axios.get(`/api/blogs/${userId}`)
                setPosts(res.data)
                console.log(res.data);
            }
            fetchPosts(userInfo._id);
        } else {
            history.push('/login');
        }
    }, [history, userInfo, posts])

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card className="my-5">
                            <Card.Body>
                                {
                                    posts.map((post) => {
                                        <Card key={post._id}>
                                            <Card.Body>
                                                <LinkContainer to={`/blogs/${post.sectionId}`}><Card.Header>{post.sectionId}</Card.Header></LinkContainer>
                                                <Card.Title>{post.title}</Card.Title>
                                                <Card.Text>{post.contents}</Card.Text>
                                                <Button>Comment</Button>
                                            </Card.Body>
                                        </Card>
                                        // post.map((post2) => {
                                        // })
                                    })
                            }
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BlogScreen

