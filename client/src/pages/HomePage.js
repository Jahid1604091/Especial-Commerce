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
import SearchBox from '../components/SearchBox';
import TopProductsCarousel from '../components/TopProductsCarousel';
import logo from '../assets/modern.png'
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
                <Col md={4} className='mx-auto'>
                    <img src={logo} width='110' alt="" />
                </Col>
                <Col md={8} className='mx-auto my-4'>
                    <SearchBox />
                </Col>

            </Row>

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


                <div className='text-center my-2'>
                    <Link to='/products' className='btn btn-primary px-4 text-uppercase rounded-0'>See all</Link>
                    <Paginate page={page} pages={pages} query={query ? query : ''} />
                </div>
            </Row>

            <OffCanvas show={show}
                handleClose={handleClose}
                product={product} />



        </Container>
    )
}
