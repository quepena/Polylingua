import React, { useState, useEffect } from 'react';
import { Container, Row, InputGroup, Col, FormControl, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import User from '../components/User';
import axios from 'axios';
import users from '../users';

const UsersScreen = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const { data } = await axios.get('/api/users');
            setUsers(data);
        }

        fetchUsers();
    }, [])

    return (
        <Container>
            <Row>
                <InputGroup className="my-5">
                    <FormControl placeholder="Find a user" />
                    <Button variant="success"><FontAwesomeIcon className="mx-2" icon={faSearch}></FontAwesomeIcon></Button>
                </InputGroup>
                <Col style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', flexWrap: 'wrap' }}>
                    {
                        users.map((user) => (
                            <Col key={user.id}>
                                <User user={user} />
                            </Col>
                        ))
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default UsersScreen
