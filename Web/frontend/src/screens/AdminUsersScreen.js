import React, { useEffect } from 'react';
import { Container, Row, Card, Button, Col } from 'react-bootstrap';
import { adminUsersList, adminUsersDelete } from '../actions/adminActions';
import Loader from "../components/Loader";
import Message from "../components/Message";
import { useDispatch, useSelector } from "react-redux";
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const AdminUsersScreen = ({ history }) => {
    const dispatch = useDispatch();

    const adminUserList = useSelector(state => state.adminUserList);
    const { loading, error, users } = adminUserList;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const adminUserDelete = useSelector(state => state.adminUserDelete);
    const { success: successDelete } = adminUserDelete;

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(adminUsersList());
        } else {
            history.push('/login');
        }
    }, [dispatch, history, successDelete, userInfo])

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure you want to delete this account?')) {
            dispatch(adminUsersDelete(id));
        }
    }

    return (
        <>
            {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (
                <Container>
                    <Row style={{ display: 'flex', juctifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginTop: "5vh" }}>
                        {
                            users.map((user) => (
                                userInfo && user._id === userInfo._id ? ((<>
                                </>)) :
                                    (
                                        <Col>
                                            <LinkContainer to={`users/${user._id}`} key={user._id} style={{ width: '30vh', margin: '2vh' }}>
                                                <Card>
                                                    <Card.Body>
                                                        <Card.Title style={{ marginBottom: "3vh" }}><FontAwesomeIcon className="mx-2" icon={faUser}></FontAwesomeIcon><strong>{user.username}</strong></Card.Title>
                                                        <Card.Text>{user.knownAs.charAt(0).toUpperCase() + user.knownAs.slice(1) + ", " + user.gender}</Card.Text>
                                                        <Card.Text>{user.city + ", " + user.country}</Card.Text>
                                                        <Card.Text style={{ marginTop: "3vh" }}>Native Language: <strong>{user.nativeLanguage}</strong></Card.Text>
                                                        <Card.Text>Learning: <strong>{user.isLearning}</strong></Card.Text>
                                                        <Card.Text>{user.introduction}</Card.Text>
                                                        <Button variant="danger" style={{ marginTop: "2vh" }} onClick={() => deleteHandler(user._id)}>Delete account</Button>
                                                    </Card.Body>
                                                </Card>
                                            </LinkContainer>
                                        </Col>
                                    )
                            ))
                        }
                    </Row>
                </Container>
            )}
        </>
    )
}

export default AdminUsersScreen