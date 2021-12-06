import React, { useState, useEffect } from 'react';
import { Container, Row, Card, Col, Button } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
// import User from '../components/User';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const UserProfileScreen = ({ match, history }) => {
    const [user, setUser] = useState({});

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const dispatch = useDispatch();

    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        if (userInfo) {
            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`
                }
            }

            const fetchConversations = async (id) => {
                const { data } = await axios.get(`/api/conversations/${id}`, config)
                setConversations(data)
            }
            fetchConversations(userInfo._id);
        } else {
            history.push('/login');
        }

    }, [history, userInfo])

    useEffect(() => {
        if (userInfo) {
            if (match.params.id !== 'profile') {
                const fetchUser = async () => {
                    const res = await axios.get(`/api/users/users/${match.params.id}`);
                    setUser(res.data);
                }
                fetchUser();
            } else {
                const fetchUser = async () => {
                    const res = await axios.get(`/api/users/users/${userInfo._id}`);
                    setUser(res.data);
                }
                fetchUser();
            }
        } else {
            history.push('/login');
        }
    }, [history, userInfo])

    const submitHandler = async (e) => {
        if (userInfo) {
            const config = {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`
                }
            }

            let flag = true
            if (conversations.length !== 0) {
                conversations.map(conv => {
                    console.log(conversations);
                    console.log(conv);
                    // conv.participants.find()
                    const friend = conv.participants.find((m) => m !== userInfo._id)
                    console.log(friend);
                    console.log(match.params.id);
                    if (match.params.id === friend) {
                        flag = false
                    }
                    // console.log(flag);
                })
            } else {
                flag = true
            }
            console.log(flag);
            
            if (flag === true) {
                const conversation = {
                    sender: userInfo._id,
                    reciever: user._id
                }
                const res = await axios.post('/api/conversations', conversation, config)
                setConversations([...conversations, res.data])
            }
        } else {
            history.push('/login');
        }
    }

    return (
        <Container>
            <Row style={{ display: 'flex', juctifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                {
                    userInfo && userInfo._id !== user._id ?
                        ( <Row>
                            <Card style={{ display: 'flex', juctifyContent: 'left', alignItems: 'center', padding: "10vh" }}>
                                <Card.Title><FontAwesomeIcon className="mx-2" icon={faUser}></FontAwesomeIcon><strong>{user.username}</strong></Card.Title>
                                <Card.Text>{user.knownAs + ", " + user.gender}</Card.Text>
                                <Card.Text>{user.city + ", " + user.country}</Card.Text>
                                <Card.Text>{user.introduction}</Card.Text>
                                <LinkContainer to="/messages" style={{ width: '80%', marginTop: "2vh" }}><Button onClick={submitHandler} type="submit" variant="primary"><FontAwesomeIcon className="mx-2" icon={faPaperPlane}></FontAwesomeIcon>Send a message</Button></LinkContainer>
                            </Card>
                        </Row>) :
                        (<Card>
                            <Card.Title>{user.username}</Card.Title>
                        </Card>)
                    // ) : 
                    // (
                    //     <LinkContainer to="/login">Sign in</LinkContainer>
                    // )
                }
            </Row>
        </Container>
    )
}

export default UserProfileScreen
