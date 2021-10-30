import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { register } from '../actions/userActions';
import FormContainer from "../components/FormContainer";
import { Form, Button, Row, Col, Select } from "react-bootstrap";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Language from '../components/Language';
import axios from "axios";

const RegisterScreen = ({ location, history }) => {
    const [step] = useState(1);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);
    const [knownAs, setKnownAs] = useState('');
    const [languages, setLanguage] = useState([]);
    const [isLearning, setIsLearning] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [introduction, setIntroduction] = useState('');

    const [selectedNativeLanguage, setSelectedNativeLanguage] = useState('');

    const dispatch = useDispatch();

    const userRegister = useSelector(state => state.userRegister);

    const { userInfo, loading, error } = userRegister;

    const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
        const fetchLanguages = async () => {
            const { data } = await axios.get('/api/languages');
            setLanguage(data)
        };
        fetchLanguages();
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Passwords don\'t match');
        } else {
            dispatch(register(username, password));
        }
    }

    // switch (step) {
    //     case 1:
    //         return (
    //             <FormContainer>

    //             </FormContainer>
    //         )
    //     case 2:
    //         return (
    //             <FormContainer>

    //             </FormContainer>
    //         )
    // }

    return (
        <FormContainer>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
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
                <Form.Group controlId="knownAs">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="" placeholder="Enter your name"
                        value={knownAs} onChange={(e) => setKnownAs(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="nativeLanguage">
                    <Form.Label>Native Language</Form.Label>
                    <Form.Control as="select" type="">
                        {
                            languages.map((language) => (
                                    <option value={language.languageName} key={language.languageName}>
                                        {language.languageName}
                                    </option>
                            ))
                        }
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="isLearning">
                    <Form.Label>Language you want to learn</Form.Label>
                    <Form.Control as="select" type="">
                        {
                            languages.map((language) => (
                                    <option value={language.languageName} key={language.languageName}>
                                        {language.languageName}
                                    </option>
                            ))
                        }
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">Next</Button>
            </Form>

            <Row className="py-3">
                <Col>
                    Already have an account?
                    <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Login</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default RegisterScreen