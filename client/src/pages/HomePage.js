import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import OffCanvas from '../components/Offcanvas';
import Product from '../components/Product'
import products from '../products'
export default function HomePage() {


    const [show, setShow] = useState(false);
    const [product, setProduct] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = (id) => {
        const p = products.find(p => p._id === id)
        setProduct(p)
        handleShow()
    }

    return (
        <Container fluid>
            <Row>
                <h2>Featured Products</h2>
                {
                    products.map(product =>
                        <Col key={product._id} sm={12} md={4} xl={3}>
                            <Product handleClick={handleClick} {...product} />
                        </Col>)
                }
            </Row>

                <OffCanvas show={show}
                 handleClose={handleClose} 
                 product={product}/>
            
        </Container>
    )
}
