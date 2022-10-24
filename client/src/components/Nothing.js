import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import { Link, useLocation } from 'react-router-dom';
export default function Nothing() {
    const { pathname } = useLocation();

    return (
        <Container style={{minHeight:"81vh"}}>
            <Row>
                <Col md={6} className='mx-auto'>
                    <Alert show={true} variant="success" 
                    
                    className='my-5 py-5 text-center text-uppercase'>
                        {/* <Alert.Heading as='h1'>404</Alert.Heading> */}
                        <Alert.Heading as='h2'>Nothing is there</Alert.Heading>
                        <p>
                            Hey, nice to see you, Thanks for visiting us!
                        </p>
                        <hr />
                        <div className="d-flex justify-content-end">
                            {pathname !== '/' && <Link to='/'>Back Home</Link>}
                        </div>
                    </Alert>

                </Col>
            </Row>

        </Container>
    )
}
