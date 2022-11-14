import React, { useEffect, useState } from 'react';
import { Button, Col, Container, ListGroup, Image, Card, Row } from 'react-bootstrap';
import CheckoutSteps from '../components/CheckoutSteps';
import { useDispatch, useSelector } from 'react-redux'
import AlertDismissible from '../components/Alert';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getMyOrderDetails } from '../actions/orders';
import { TiTick } from 'react-icons/ti';
import { FaTimesCircle } from 'react-icons/fa';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export default function OrderDetailsPage() {
    // const order = useSelector(state => state.order);

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams();
    const { order, loading, error } = useSelector(state => state.myOrderDetails);
    const { userInfo } = useSelector(state => state.userLogin)
    const [isValidated, setIsValidated] = useState(false)
    const { search } = useLocation();
    
    useEffect(() => {
        dispatch(getMyOrderDetails(id))
    }, [id])

    useEffect(() => {
        if (search.split('=')[1] === 'VALID') {
            setIsValidated(true)
        }
    }, [isValidated,search])
    
    const paymentHandler = async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true
            }
        }
        const payment_data = {
            total_amount: order?.totalPrice,
            tran_id: id,
        }
        const { data: { data } } = await axios.post('/api/payment/ssl-request', payment_data, config)
        console.log(data)
        await window.location.replace(data?.GatewayPageURL)

        // window.location = data?.GatewayPageURL
        // console.log(' response : '+data)
        // const { data: { data:validatedData } } = await axios.post('/api/payment/ssl-validate', data, config)
        // console.log('validated : '+validatedData)
    }

    if (order !== undefined) {
        order.itemsPrice = order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
    }

    return (
        <Container>

            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item className='border-0 pb-0'>
                            <p className='fw-bold text-uppercase'>Your Order Id : {order?._id}</p>
                            <p> <span>Shipping Address : </span>
                                <span className='fw-lighter fst-italic'>
                                    {order?.shippingAddress.address},
                                    {order?.shippingAddress.city},
                                    {order?.shippingAddress.postalCode},
                                    {order?.shippingAddress.country}
                                </span> <br />

                            </p>
                            <p>Name :  <span className='fw-lighter fst-italic'>{order?.user.name}</span></p>
                            <p>Email :  <span className='fw-lighter fst-italic'>{order?.user.email}</span></p>
                            <p className='fw-bold text-uppercase'>Your Order Status </p>
                            {order?.isPaid ? <p className='bg-info text-light px-2 fw-bold d-flex align-items-center'><TiTick size={23} /> &nbsp;Paid at {order?.paidAt}</p> : <p className='bg-secondary text-light px-2 fw-bold d-flex align-items-center'><FaTimesCircle size={15} />&nbsp;Not Paid</p>}
                            {order?.isDelivered ? <p className='bg-info text-light px-2 fw-bold d-flex align-items-center'><TiTick size={23} />&nbsp;Delivered on {order?.deliveredAt}</p> : <p className='bg-secondary text-light px-2 fw-bold d-flex align-items-center'><FaTimesCircle />&nbsp;Not Delivered</p>}
                        </ListGroup.Item>
                        <ListGroup.Item className='border-0 pb-0'>
                            Payment Method : <span className='fw-lighter fst-italic'> {order?.paymentMethod}</span>
                        </ListGroup.Item>
                        <ListGroup.Item className='border-0'>
                            Order Items :

                            {order?.orderItems.length === 0 ? <AlertDismissible></AlertDismissible> :
                                <ListGroup variant='flush'>
                                    {order?.orderItems.map((item, index) =>
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
                                    <Col>{order?.itemsPrice} Tk</Col>
                                </Row>
                                <Row>
                                    <Col>Shipping</Col>
                                    <Col>{order?.shippingPrice} Tk</Col>
                                </Row>
                                <Row>
                                    <Col>Tax</Col>
                                    <Col> {order?.taxPrice} Tk</Col>
                                </Row>
                                <hr />
                                <Row>
                                    <Col>Total</Col>
                                    <Col> <span className='bg-info text-light px-2 py-1 rounded'>{(order?.totalPrice)}</span> TK </Col>
                                </Row>
                            </ListGroup.Item>

                            {/* <ListGroup.Item>
                                {error && <AlertDismissible variant='danger'>{error}</AlertDismissible>}
                            </ListGroup.Item> */}

                        </ListGroup>
                        <div className='text-center mt-2'>
                            {!order?.isPaid && <Button onClick={paymentHandler} type='submit' className='px-4 text-light text-uppercase rounded-0 shadow' variant='primary'>Make payment</Button>
                            }
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}
