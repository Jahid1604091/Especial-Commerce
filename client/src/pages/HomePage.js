import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'

export default function HomePage() {
    return (
        <Container fluid>
            <Row>
            <h2>Latest Products</h2>
                {
                    products.map(product =>
                        <Col key={product._id} sm={12} md={4} xl={3}>
                            <Product  {...product}/>
                        </Col>)
                }
            </Row>
          

        </Container>
    )
}
