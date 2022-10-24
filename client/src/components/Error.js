import React from 'react'
import { Alert, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <Container>
            <Row>
                <Col className='mt-5 my-5 text-center'>
                    <Alert variant='danger'>
                        <h2>Oops!!!</h2>
                        <h3>Something Went Wrong</h3>
                        <Alert.Link as={Link} to='/'>Reload</Alert.Link>
                    </Alert>
                </Col>
            </Row>
        </Container>
    )
}
