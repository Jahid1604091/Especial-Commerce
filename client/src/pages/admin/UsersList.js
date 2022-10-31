import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUserByAdmin, getAllUsers } from '../../actions/admin';
import { Button, ButtonGroup, Col, Container, FloatingLabel, Form, Row, Table } from 'react-bootstrap'
import AlertDismissible from '../../components/Alert'
import Loader from '../../components/Loader'
import { Link, useNavigate } from 'react-router-dom';
import { BiEditAlt } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';
import Swal from 'sweetalert2';
import Error from '../../components/Error';
export default function UsersList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { users: { data }, loading, error } = useSelector(state => state.usersList);
    const { userInfo } = useSelector(state => state.userLogin);
    const { users } = useSelector(state => state.deleteUserByAdmin);

    useEffect(() => {
        if (userInfo && userInfo?.data?.role === 'admin') {
            dispatch(getAllUsers());
        }
        else {
            navigate('/login')
        }
    }, [dispatch, navigate, userInfo,users])

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
                dispatch(deleteUserByAdmin(id))
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
    if(data?.length === 0){
        return <Error variant='info'><h2>No user found</h2></Error>
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
                                <th>Name</th>
                                <th>Email</th>
                                <th>&nbsp;</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((user, idx) => (
                                    <tr key={user._id}>
                                        <td>{idx + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <span className='text-danger' onClick={() => deleteHandler(user._id)}>
                                                <BsTrash size={20} />
                                            </span>
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
