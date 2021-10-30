import React from 'react'
import { Card, Container, Row, Col, CarouselItem, Button } from 'react-bootstrap'

const Language = ({ language }) => {
    return (
        <Card style={{ width: '20%' }} className="p-3 m-3">
            {language.languageName}
        </Card>
    )
}

export default Language