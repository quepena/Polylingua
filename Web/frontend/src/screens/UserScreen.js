import React from 'react'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import { Form, Button } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";

const UserScreen = ({ location, history }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);

    const [selectedNativeLanguage, setSelectedNativeLanguage] = useState('');
    const [selectedIsLearning, setSelectedIsLearning] = useState('');

    const dispatch = useDispatch();

    const userDetails = useSelector(state => state.userDetails);
    const { loading, error, user } = userDetails;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const userUpdateProfile = useSelector(state => state.userUpdateProfile);
    const { success } = userUpdateProfile;

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            if (!user.username) {
                dispatch(getUserDetails('profile'))
            } else {
                setUsername(user.username)
            }
        }
    }, [dispatch, history, userInfo, user])

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Passwords don\'t match');
        } else {
            dispatch(updateUserProfile({ id: user._id, username, password }));
        }
    }

    return (
        <FormContainer>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {success && <Message variant='success'>Profile successfully updated!</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="" placeholder="Enter your username"
                        value={username} onChange={(e) => setUsername(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your password"
                        value={password} onChange={(e) => setPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm your password"
                        value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                {/* <Form.Group controlId="nativeLanguage">
                    <Form.Label>Native Language</Form.Label>
                    <Form.Control as="select" type="" value={selectedNativeLanguage}
                        onChange={(e) => setSelectedNativeLanguage(e.target.value)}>
                        {
                            languages.map((language) => (
                                <option value={language.languageName} key={language._id}>
                                    {language.languageName}
                                </option>
                            ))
                        }
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="isLearning">
                    <Form.Label>Language you want to learn</Form.Label>
                    <Form.Control as="select" type="" value={selectedIsLearning}
                        onChange={(e) => setSelectedIsLearning(e.target.value)}>
                        {
                            languages.map((language) => (
                                <option value={language.languageName} key={language._id}>
                                    {language.languageName}
                                </option>
                            ))
                        }
                    </Form.Control>
                </Form.Group> */}
                <Button variant="primary" type="submit">Update profile</Button>
            </Form>
        </FormContainer>
    )
}

export default UserScreen
