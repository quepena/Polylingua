import React, { useState, useEffect } from 'react'
import { Card, Container, Form, Button, Row } from 'react-bootstrap'
import { useSelector } from "react-redux";
import axios from 'axios'

const BlogSectionScreen = ({ match }) => {
    const [posts, setPosts] = useState([]);

    const [title, setTitle] = useState('');

    const [contents, setContents] = useState('');

    const [sectionId, setSectionId] = useState('');

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const config = {
        headers: {
            Authorization: `Bearer ${userInfo.token}`
        }
    }

    useEffect(() => {
        const fetchPosts = async () => {
            const { data } = await axios.get(`/api/blogs/${match.params.id}`);
            setPosts(data);
            setSectionId(match.params.id)
        }
        fetchPosts();

    }, [])

    const submitHandler = async (e) => {
        e.preventDefault();
        const post = {
            title: title,
            contents: contents,
            userId: userInfo._id,
            sectionId: sectionId
        }

        const res = await axios.post(`/api/blogs/${sectionId}`, post, config)
        setPosts([...posts])
        window.location.reload()
    }

    return (
        <Container style={{ dispay: "flex", justifyContent: "center", alignItems: "center", width: "150vh" }}>
            <Row>
                <h1 style={{ marginTop: "3vh", marginBottom: "3vh" }}>{userInfo.isLearning}</h1>
                <Form onSubmit={submitHandler}>
                    <Form.Control style={{ marginBottom: "2vh" }} type="" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}></Form.Control>
                    <Form.Control onChange={(e) => setContents(e.target.value)} value={contents} as="textarea" style={{ height: '100px' }} placeholder="Write a new post" />
                    <Button type="submit" className="my-4" variant="primary">Publish</Button>
                </Form>
                <Card.Body>
                    {
                        posts.map((post) => (
                            <Card key={post._id} style={{ marginTop: "3vh", width: "100%" }}>
                                <Card.Body>
                                    <Card.Header style={{marginBottom: "2vh"}}>{post.title}</Card.Header>
                                    <Card.Text>{post.contents}</Card.Text>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </Card.Body>
            </Row>
        </Container>
    )
}

export default BlogSectionScreen
