import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Placeholder, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getAllProducts } from '../actions/products';
import Error from '../components/Error';
import Loader from '../components/Loader';
import Nothing from '../components/Nothing';
import OffCanvas from '../components/Offcanvas';
import Paginate from '../components/Paginate';
import Product from '../components/Product'
import TopProductsCarousel from '../components/TopProductsCarousel';

export default function HomePage() {
    const [show, setShow] = useState(false);
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();
    const { query, pageNumber } = useParams();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = (id) => {
        const p = products.find(p => p._id === id)
        setProduct(p)
        handleShow()
    }
    const { loading, products, error, page, pages } = useSelector(state => state.products);
    const { success } = useSelector(state => state.addReview);


    useEffect(() => {
        dispatch(getAllProducts(query, Number(pageNumber) || 1));
    }, [success, query, Number(pageNumber) || 1])


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

                <h2>Trending Now</h2>
                <Col className='mx-auto py-2'>
                    <TopProductsCarousel />

                </Col>

                <h2>Our Products</h2>
             
                {
                    products.length > 0 && products.map(product =>
                        
                        <Col className='px-2' key={product._id} sm={12} md={4} xl={3}>
                            <Product handleClick={handleClick} {...product} />
                        </Col>)
                }

               
                <Col sm={12}>
                    <Paginate page={page} pages={pages} query={query ? query : ''} />
                </Col>
            </Row>

            <OffCanvas show={show}
                handleClose={handleClose}
                product={product} />



        </Container>
    )
}
