import React, { useEffect, useState } from 'react'
import { Card, Container, Row, Col, Form, Button, ToggleButtonGroup, InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComment, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { LinkContainer } from 'react-router-bootstrap';

const BlogScreen = () => {
    const dispatch = useDispatch();

    const [posts, setPosts] = useState([]);

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    // useEffect(() => {
    //     const fetchLanguages = async () => {
    //         const { data } = await axios.get('/api/languages');
    //         setLanguages(data);
    //     };
    //     fetchLanguages();

    // }, [languages, sections])

    useEffect(() => {
        if (userInfo) {
            const fetchPosts = async (id) => {
                const { data } = await axios.get(`/api/blogs/${id}`);
                setPosts(data);
            }
            fetchPosts(userInfo.isLearning);
        }

    }, [userInfo, posts])

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Card className="my-5">
                            <Card.Body>
                                {
                                    posts.map((post) => (
                                        <Card key={post._id}>
                                            <Card.Body>
                                                <LinkContainer to={`/blogs/${post.sectionId}`}><Card.Header>{post.sectionId}</Card.Header></LinkContainer>
                                                <Card.Title>{post.title}</Card.Title>
                                                <Card.Text>{post.contents}</Card.Text>
                                                <Button>Comment</Button>
                                            </Card.Body>
                                        </Card>
                                    ))
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

