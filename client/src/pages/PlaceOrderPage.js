import React, { useEffect } from 'react';
import { Button, Col, Container, ListGroup, Image, Card, Row } from 'react-bootstrap';
import CheckoutSteps from '../components/CheckoutSteps';
import { useDispatch, useSelector } from 'react-redux'
import AlertDismissible from '../components/Alert';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { createOrder } from '../actions/orders';
export default function PlaceOrderPage() {
    const cart = useSelector(state => state.cart);
   
    const dispatch = useDispatch()  
    const navigate = useNavigate()
    //calculate prices
    cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    cart.shippingPrice = cart.itemsPrice > 100 ? 0 : 100
    cart.taxPrice = Number(.15 * cart.itemsPrice).toFixed(2)
    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.taxPrice) + Number(cart.shippingPrice)).toFixed(2)
    const { newOrder, loading,error } = useSelector(state => state.createdOrder);
    useEffect(() => {
        if (newOrder) {
            navigate(`/orders/${newOrder?.data._id}`)
        }
    }, [navigate, newOrder])
    // console.log(newOrder)
    const placeOrderHandler = (e) => {
        e.preventDefault()
        dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.paymentMethod,
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            taxPrice: cart.taxPrice,
            totalPrice: cart.totalPrice,
        }))
    }
    return (
        <Container>
            <CheckoutSteps step1 step2 step3 step4 />
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item className='border-0 pb-0'>
                            <p> <span>Shipping Address : </span>
                                <span className='fw-lighter fst-italic'>
                                    {cart.shippingAddress.address},
                                    {cart.shippingAddress.city},
                                    {cart.shippingAddress.postalCode},
                                    {cart.shippingAddress.country}
                                </span>
                            </p>

                        </ListGroup.Item>
                        <ListGroup.Item className='border-0 pb-0'>
                         Payment Method : <span className='fw-lighter fst-italic'> {cart.paymentMethod}</span> 
                        </ListGroup.Item>
                        <ListGroup.Item className='border-0'>
                           Order Items :
                          
                                {cart.cartItems.length === 0 ? <AlertDismissible></AlertDismissible> :
                                    <ListGroup variant='flush'>
                                        {cart.cartItems.map((item, index) =>
                                            <ListGroup.Item key={index} className='border-0'>
                                                <Row>
                                                    <Col md={1}>
                                                        <Image src={item.image} alt={item.name} roundedCircle fluid />
                                                    </Col>
                                                    <Col>
                                                        <span className='fw-lighter fst-italic'>{item.name}</span>
                                                    </Col>
                                                    <Col md={4}>
                                                        {item.qty} x {item.price} = {(item.qty * item.price).toFixed(2)} Tk
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        )}
                                    </ListGroup>
                                }

                            
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col md={4}>
                {error && <AlertDismissible message={error} variant='danger' />}
                    <Card className='border-0 shadow py-3'>
                        <ListGroup variant='flush' >
                            <ListGroup.Item className='border-0 text-center text-uppercase fw-bold'>
                                Order Summary
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Product Price</Col>
                                    <Col>{cart.itemsPrice} Tk</Col>
                                </Row>
                                <Row>
                                    <Col>Shipping</Col>
                                    <Col>{cart.shippingPrice} Tk</Col>
                                </Row>
                                <Row>
                                    <Col>Tax</Col>
                                    <Col> {cart.taxPrice} Tk</Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col>Total</Col>
                                    <Col> <span className='bg-info text-light px-2 py-1 rounded'>{(cart.totalPrice)}</span> TK </Col>
                                </Row>
                            </ListGroup.Item>

                            {/* <ListGroup.Item>
                                {error && <AlertDismissible variant='danger'>{error}</AlertDismissible>}
                            </ListGroup.Item> */}

                        </ListGroup>
                        <div className='text-center mt-2'>
                            <Button onClick={placeOrderHandler} type='submit' className='px-4 text-light text-uppercase rounded-0 shadow' variant='primary'>Place Order</Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
