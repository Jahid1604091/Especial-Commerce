import React, { useEffect } from 'react'
import { Alert, Badge, Button, Card, Col, Container, Form, Image, ListGroup, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom'
import { BiTrashAlt, BiShoppingBag } from 'react-icons/bi';
import { addToCart, removeFromCart,clearCart } from '../actions/cart';
import Error from '../components/Error';

export default function CartPage() {
    const location = useLocation();
    const { id } = useParams();
    const qty = +location.search.split('=')[1]
    const dispatch = useDispatch();

    const { cartItems } = useSelector(state => state.cart)



    useEffect(() => {
        if (id) {
            dispatch(addToCart(id, qty));
        }
    }, [dispatch, id, qty])

    if (cartItems.length === 0) {
        return <Error variant='info'>
            <h2 className='text-uppercase'>Your bag is Empty!</h2>
            <Link to='/' className='btn btn-outline-primary rounded-0'>Fill Now</Link>
        </Error>
    }
    return (
        <Container>
            <Row className='my-4'>
                <Col md={8}>
                    <h4> Product List  </h4>

                    <ListGroup variant='flush'>
                        {
                            cartItems.map(item => (
                                <ListGroup.Item key={item?._id} className='mt-2 shadow'>
                                    <Row>
                                        <Col md={2}>
                                            <Image src={item.image} alt={item.name} fluid roundedCircle />
                                        </Col>
                                        <Col md={4}>
                                            <p>{item.name}</p>
                                        </Col>
                                        <Col md={2}> {item.price} Tk</Col>
                                        <Col md={2}>

                                            <Form.Control className='rounded-0' as='select' value={item.qty}
                                                onChange={(e) => dispatch(addToCart(item._id, Number(e.target.value)))}>
                                                {
                                                    [...Array(item.countInStock).keys()].map(i =>
                                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                                    )

                                                }
                                            </Form.Control>
                                        </Col>
                                        <Col md={1}>
                                            <span className='text-danger' style={{cursor:'pointer'}} onClick={() => dispatch(removeFromCart(item._id))}> <BiTrashAlt size={23} /></span>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))
                        }
                    </ListGroup>
                    <div className="text-center my-2">
                        <Button variant='outline-danger rounded-0 text-uppercase' onClick={()=>dispatch(clearCart())}>Clear cart</Button>
                    </div>

                </Col>
                <Col md={4}>
                    <Card className='rounded-0 text-center mt-5 text-uppercase'>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <BiShoppingBag size={30} />
                                <p>Total Items : <Badge bg="info">{cartItems.reduce((acc, item) => acc + item.qty, 0)}</Badge> </p>
                                <p>Subtotal : {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)} Tk</p>
                                <p className='text-xl'>VAT : {(cartItems.reduce((acc, item) => acc + item.qty * item.price, 0) * .05).toFixed(2)} Tk</p>
                                <Alert variant='info' className='fw-bold'>Total : &nbsp;
                                    {(cartItems.reduce((acc, item) => acc + item.qty * item.price, 0) + (cartItems.reduce((acc, item) => acc + item.qty * item.price, 0) * .05)).toFixed(2)} Tk
                                </Alert>

                                <div className="py-2">
                                    <Button variant="dark" className='rounded-0'>Continue</Button>
                                </div>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>

            </Row >
        </Container>
    )
}
