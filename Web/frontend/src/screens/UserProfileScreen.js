import React, { useState, useEffect } from 'react';
import { Container, Row, InputGroup, Col, FormControl, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import User from '../components/User';
import axios from 'axios';
import users from '../users';;

const UserProfileScreen = ({ match }) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/api/users/users/${match.params.id}`);
            setUser(res.data);
        }
        fetchUser();
    }, [])

    return (
        <Container>
            {/* <Row>
                <InputGroup className="my-5">
                    <FormControl placeholder="Find a user" />
                    <Button variant="success"><FontAwesomeIcon className="mx-2" icon={faSearch}></FontAwesomeIcon></Button>
                </InputGroup>
            </Row> */}
            <Row style={{display: 'flex', juctifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                {
                    <Card>
                        <Card.Title>{user.username}</Card.Title>
                    </Card>
                }
            </Row>
        </Container>
    )
}

export default UserProfileScreen
