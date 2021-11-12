import { useState } from "react"
import { Container, Row, InputGroup, Col, Form, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SearchBox = ({ history }) => {
    const [keyword, setKeyword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()
        if(keyword.trim()) {
            history.push(`/search/${keyword}`);
        } else {
            history.push('/')
        }
    }

    return (
        <Form onSubmit={submitHandler} inline className="my-5">
            <Form.Control type='text' name='q' onChange={(e) => setKeyword(e.target.value)} placeholder="Find a user" />
            <Button type='submit' variant="success"><FontAwesomeIcon className="mx-2" icon={faSearch}></FontAwesomeIcon></Button>
        </Form>
    )
}

export default SearchBox
