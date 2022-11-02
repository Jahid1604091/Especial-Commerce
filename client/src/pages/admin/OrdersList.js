import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductByAdmin, getAllOrders } from '../../actions/admin';
import { Button, ButtonGroup, Col, Container, FloatingLabel, Form, Row, Table } from 'react-bootstrap'
import AlertDismissible from '../../components/Alert'
import Loader from '../../components/Loader'
import { Link, useNavigate } from 'react-router-dom';
import { BiEditAlt, BiPlusCircle } from 'react-icons/bi';
import { FaTimesCircle } from 'react-icons/fa'
import { TiTick } from 'react-icons/ti'
import { BsTrash } from 'react-icons/bs';
import Swal from 'sweetalert2';
import Error from '../../components/Error';
import { getAllProducts } from '../../actions/products';



export default function OrdersList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const { userInfo } = useSelector(state => state.userLogin);
    const { orders, loading, error } = useSelector(state => state.ordersList);

    useEffect(() => {
        if (userInfo && userInfo?.data?.role === 'admin') {
            dispatch(getAllOrders());
        }
        else {
            navigate('/login')
        }
    }, [dispatch, navigate, userInfo])


    const deleteHandler = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteProductByAdmin(id))
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })


    }


    if (loading) {
        return <Loader />
    }
    if (orders?.length === 0) {
        return <Error variant='info'><h2>No order found</h2></Error>
    }

    return (
        <Container>

            <Row className='justify-content-md-center' style={{ minHeight: '81vh' }}>
                <Col className='m-auto'>
                    {error && <AlertDismissible message={error} variant='danger' />}
                    {loading && <Loader />}
                    <Table striped bordered size="sm" hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>User Name</th>
                                <th>Date</th>
                                <th>Total Price</th>
                                <th>Paid</th>
                                <th>Delivered</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders?.map((order, idx) => (
                                    <tr key={order._id}>
                                        <td>{idx + 1}</td>
                                        <td>{order.user.name}</td>
                                        <td>{order.createdAt}</td>
                                        <td>{order.totalPrice} Tk</td>
                                        <td>{order.isPaid ? <TiTick size={23} /> : <FaTimesCircle />}</td>
                                        <td>{order.isDelivered ? <TiTick size={23} /> : <FaTimesCircle />}</td>
                                        <td>
                                            <Link to={`/orders/${order._id}`} className='text-dark rounded-0 px-2 py-1'>
                                                Details
                                            </Link>

                                        </td>

                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}
