import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Placeholder, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../actions/products';
import Error from '../components/Error';
import Loader from '../components/Loader';
import Nothing from '../components/Nothing';
import OffCanvas from '../components/Offcanvas';
import Product from '../components/Product'

export default function HomePage() {


    const [show, setShow] = useState(false);
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = (id) => {
        const p = products.find(p => p._id === id)
        setProduct(p)
        handleShow()
    }



    useEffect(() => {
        dispatch(getAllProducts());
    }, [])

    const { loading, products, error } = useSelector(state => state.products);

    if (loading) {
        return <Loader />
    }
    if (error) {
        return <Error variant='danger' children={
            <>
                <h2>Oops!!!</h2>
                <h3>Something Went Wrong</h3>
                <Link to='/' className='btn btn-outline-info'>Go Back</Link>
            </>
        } />
    }
    if (products.length === 0) {
        return <Nothing />
    }

    return (
        <Container fluid>
            <Row>
                <h2>Featured Products</h2>
                {
                    products.length > 0 && products.map(product =>
                        <Col key={product._id} sm={12} md={4} xl={3}>
                            <Product handleClick={handleClick} {...product} />
                        </Col>)
                }
            </Row>

            <OffCanvas show={show}
                handleClose={handleClose}
                product={product} />

        </Container>
    )
}
