import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
export default function Footer() {
    return (
        <footer className='p-2 bg-light'>
            <Container>
                <Row>
                    <Col>
                        <p className='text-center text-dark'>&copy; 2021 - {new Date().getFullYear()} | Especial E-commerce :: All rights reserved | Modern Web </p>
                    </Col>
                </Row>

            </Container>

        </footer>
    )
}
