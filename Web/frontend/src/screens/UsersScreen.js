import React, { useState, useEffect } from 'react';
import { Container, Row, InputGroup, Col, FormControl, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import User from '../components/User';
import axios from 'axios';
import users from '../users';
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from 'react-router-bootstrap'
import UserProfileScreen from './UserProfileScreen';
import SearchBox from '../components/SearchBox';
import { Route } from 'react-router-dom';

const UsersScreen = ({ match }) => {
    const [users, setUsers] = useState([]);

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const config = {
        headers: {
            Authorization: `Bearer ${userInfo.token}`
        }
    }

    const keyword = match.params.keyword

    useEffect(() => {
        if (userInfo) {
            const fetchUsers = async (keyword = '') => {
                const { data } = await axios.get(`/api/users/users?keyword=${keyword}`, config);
                setUsers(data);
            }

            fetchUsers(keyword);
        }
    }, [keyword])

    return (
        <Container>
            <Row>
                <Route render={({ history }) => <SearchBox history={history} />} />
            </Row>
            <Row style={{ display: 'flex', juctifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                {
                    users.map((user) => (
                        <LinkContainer to={`/users/${user._id}`}>
                            <Card style={{ width: '25%', margin: '2%' }} key={user._id}>
                                <Card.Body>
                                    <Card.Title>{user.username}</Card.Title>
                                    <Button>Go to profile</Button>
                                </Card.Body>
                            </Card>
                        </LinkContainer>
                    ))
                }
            </Row>
        </Container>
    )
}

export default UsersScreen
