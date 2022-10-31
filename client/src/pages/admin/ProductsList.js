import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductByAdmin} from '../../actions/admin';
import { Button, ButtonGroup, Col, Container, FloatingLabel, Form, Row, Table } from 'react-bootstrap'
import AlertDismissible from '../../components/Alert'
import Loader from '../../components/Loader'
import { Link, useNavigate } from 'react-router-dom';
import { BiEditAlt, BiPlusCircle } from 'react-icons/bi';
import { BsTrash } from 'react-icons/bs';
import Swal from 'sweetalert2';
import Error from '../../components/Error';
import { getAllProducts } from '../../actions/products';
import AddProduct from '../../components/admin/AddProductModal';

export default function ProductsList() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //modal
    const [show, setShow] = useState(false);
    const handleShow = () =>{
        setShow(true)
    }

    const { userInfo } = useSelector(state => state.userLogin);

    const {success} = useSelector(state => state.deleteProductByAdmin);

    const { loading, error,products } = useSelector(state => state.products);

    useEffect(() => {
        if (userInfo && userInfo?.data?.role === 'admin') {
            dispatch(getAllProducts());
        }
        else {
            navigate('/login')
        }
    }, [dispatch, navigate, userInfo,success])

   
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
    if(products?.length === 0){
        return <Error variant='info'><h2>No product found</h2></Error>
    }

    return (
        <Container>
            <AddProduct show={show} setShow={setShow}/>
            <Row className='my-2'>
                <Col className='me-auto'>
                    <Button variant='primary' onClick={handleShow} type='submit' className='rounded-0'><BiPlusCircle size={23}/> Add Product</Button>
                </Col>
            </Row>
            <Row className='justify-content-md-center' style={{ minHeight: '81vh' }}>
                <Col className='m-auto'>
                    {error && <AlertDismissible message={error} variant='danger' />}
                    {loading && <Loader />}
                    <Table striped bordered size="sm" hover responsive>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Brand</th>
                                <th>Category</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Rating</th>
                                <th>&nbsp;</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                products?.map((product, idx) => (
                                    <tr key={product._id}>
                                        <td>{idx + 1}</td>
                                        <td>{<img src={product.image} alt="" width='50' height='40'/>}</td>
                                        <td>{product.name}</td>
                                        <td>{product.brand}</td>
                                        <td>{product.category}</td>
                                        <td>{product.countInStock}</td>
                                        <td>{product.price}</td>
                                        <td>{product.rating}</td>
                                        <td>
                                            <ButtonGroup>
                                            <span className='text-info' onClick={() => deleteHandler(product._id)}>
                                                <BiEditAlt size={20} />
                                            </span>
                                            <span className='text-danger' onClick={() => deleteHandler(product._id)}>
                                                <BsTrash size={20} />
                                            </span>

                                            </ButtonGroup>
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
