import React, { useEffect, useState } from 'react'
import { Alert, Button, Col, Form, ListGroup, Row } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { BiCartAlt, BiCommentDots } from 'react-icons/bi';
import Badge from 'react-bootstrap/Badge';
import { addToCart } from '../actions/cart';
import { useDispatch, useSelector } from 'react-redux';
import Toast from '../utils/alert';
import StarRatingInput from './StarRatingInput';
import { addReview } from '../actions/products';
import AlertDismissible from './Alert';
import Loader from './Loader';

//product details page
export default function OffCanvas({ show, handleClose, product }) {
    const [qty, setQty] = useState(1);
    const [showReview, setShowReview] = useState(false);
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');
    const { success,loading, error } = useSelector(state => state.addReview);

    const dispatch = useDispatch();
    const handleCart = () => {
        dispatch(addToCart(product._id, +qty))
        Toast.fire({
            icon: 'success',
            title: 'Item Added to Cart!'
        })
    }

    const handleReview = () => {
        dispatch(addReview(product._id, {
            rating: +rating, comment
        }))
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
                        <Button title='Add A Comment' variant='outline-secondary' className='rounded-0 ms-2' onClick={() => setShowReview(!showReview)}><BiCommentDots /> </Button>
                    </div>
                    <div className='my-2'>
                        {!loading && error && <AlertDismissible message={error} variant='danger' />}
                        {loading ? <Loader /> : showReview && <Form>
                            <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Add Review</Form.Label>
                                <Form.Control as="textarea" name='comment' value={comment} onChange={e => setComment(e.target.value)} rows={2} />
                            </Form.Group>

                            <Form.Group className="mb-2" controlId="formBasicCheckbox">
                                <StarRatingInput setRating={setRating} />
                            </Form.Group>
                            <Button variant="primary" onClick={handleReview} type="submit">
                                Submit
                            </Button>
                        </Form>}

                        {
                            product?.reviews.length === 0 ? <div>No reviews yet</div> :
                                <>
                                    <h5>Customer Reviews</h5>

                                    <ListGroup>
                                        {
                                            product?.reviews.map(r => {

                                                return <ListGroup.Item key={r._id} className="d-flex justify-content-between align-items-start">
                                                    <div className="ms-2 me-auto">
                                                        <div className="fw-bold">{r.name}</div>
                                                        {r.comment}
                                                    </div>
                                                    <Badge bg="primary" pill>
                                                        14
                                                    </Badge>
                                                </ListGroup.Item>
                                            })
                                        }
                                    </ListGroup>
                                </>
                        }


                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
