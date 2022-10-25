import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BiCartAlt, BiCommentDots } from 'react-icons/bi';
import Badge from 'react-bootstrap/Badge';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../actions/cart';
import { useDispatch } from 'react-redux';
//product details page
export default function OffCanvas({ show, handleClose, product }) {
    const [qty, setQty] = useState(1);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleCart = () => {
        dispatch(addToCart(product._id, +qty))
        // navigate(`/cart/${product?._id}?qty=${qty}`);
    }
    return (
        <>
            <Offcanvas placement='end' show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title as='h4'>{product?.name}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <img src={product?.image} alt="" className='fluid my-2' width='150' />
                    <p>  {(product?.description)}</p>
                    <Row>
                        <Col>
                            <p>  {product?.countInStock > 0 ? <Badge bg="info">in Stock</Badge> : <Badge bg="warning">Out of Stock</Badge>}</p>
                        </Col>
                        <Col>
                            {product?.countInStock > 0 &&
                                <Form.Select size="sm"
                                    value={qty}
                                    onChange={e => setQty(e.target.value)}
                                    className='rounded-0'>
                                    <option disabled>Select Quantity</option>

                                    {
                                        [...Array(product.countInStock).keys()].map(c =>
                                            <option key={c} value={c + 1}>{c + 1}</option>
                                        )
                                    }
                                </Form.Select>}

                        </Col>
                    </Row>
                    <div>
                        {product?.countInStock > 0 && <Button title='Add To Cart' variant='dark' onClick={handleCart} className='rounded-0'><BiCartAlt /> </Button>}
                        <Button title='Add A Comment' variant='outline-secondary' className='rounded-0 ms-2'><BiCommentDots /> </Button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
