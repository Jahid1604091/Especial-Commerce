import React from 'react'
import { Alert, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Error({children, variant}) {
    return (
        <Container>
            <Row>
                <Col className='mt-5 my-5 text-center'>
                    <Alert variant={variant}>
                      {children}
                    </Alert>
                </Col>
            </Row>
        </Container>
    )
}
