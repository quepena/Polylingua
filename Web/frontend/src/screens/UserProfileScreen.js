import React, { useState, useEffect } from 'react';
import { Container, Row, InputGroup, Col, FormControl, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import User from '../components/User';
import axios from 'axios';
import users from '../users';;

const UserProfileScreen = () => {
    const [user, setUser] = useState('');

    useEffect(() => {
        const fetchUser = async (id) => {
            const res = await axios.get(`/api/users/${id}`);
            setUser(res.data);
        }

        fetchUser(user._id);
    }, [])

    return (
        <Container>
            <Row>
                <InputGroup className="my-5">
                    <FormControl placeholder="Find a user" />
                    <Button variant="success"><FontAwesomeIcon className="mx-2" icon={faSearch}></FontAwesomeIcon></Button>
                </InputGroup>
            </Row>
            <Row style={{display: 'flex', juctifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                {
                    users.map((user) => (
                        <Card style={{width: '25%', margin: '2%'}} key={user._id}>
                            <Card.Body>
                                <Card.Title>{user.username}</Card.Title>
                            </Card.Body>
                        </Card>
                    ))
                }
            </Row>
        </Container>
    )
}

export default UserProfileScreen
