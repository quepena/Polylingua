import React, { useEffect, useState } from 'react'
import { Card, Container, Row, Col, Form, Button, ToggleButtonGroup, InputGroup, FormControl } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faComment, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';

const BlogScreen = () => {
    const dispatch = useDispatch();

    const [languages, setLanguages] = useState([]);

    const [sections, setSections] = useState([]);

    const [posts, setPosts] = useState([]);

    const [newPost, setNewPost] = useState('');

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
            const fetchSections = async (id) => {
                const res = await axios.get(`/api/blogs/${id}`)
                setSections(res.data)
            }
            fetchSections(userInfo.isLearning);
        }

    }, [sections])

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Form.Control as="textarea" placeholder="Write a new post" />
                        <Button className="my-4" variant="success">Publish</Button>
                        <Card className="my-5">
                            <Card.Body>
                                {/* {
                                    sections.map((section) => (
                                        <Card.title>{section.languageId}</Card.title>
                                    ))
                                } */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BlogScreen

