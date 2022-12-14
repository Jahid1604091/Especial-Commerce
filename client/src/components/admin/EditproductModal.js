import React, { useEffect, useState } from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addProductByAdmin, updateProductByAdmin } from '../../actions/admin';
import Toast from '../../utils/alert';
import AlertDismissible from '../Alert';

export default function EditProduct({ show, setShow, editableProduct }) {

    
    const dispatch = useDispatch();
 
    const [formData, setFormData] = useState({ name:'',description: '', image: '', price: '', countInStock: '', brand: '', category: '' });
    

    const { success, loading, error } = useSelector(state => state.updateProductByAdmin);

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateProductByAdmin(formData))
  
    }
    useEffect(()=>{
      
        setFormData({...formData,
            _id:editableProduct?._id,
            name:editableProduct?.name,
            description:editableProduct?.description,
            price:editableProduct?.price,
            countInStock:editableProduct?.countInStock,
            brand:editableProduct?.brand,
            category:editableProduct?.category,
            // image:editableProduct?.image
            
        
        })
    },[editableProduct])

    useEffect(() => {
        if (success) {
            Toast.fire({
                icon: 'success',
                title: 'Product updated!'
            })

        }
    }, [success])

    return (
        <>
            <Modal show={show} setShow={setShow} onHide={()=>setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Product</Modal.Title>
                </Modal.Header>
                {error && <AlertDismissible variant='danger' message={error} />}
                <Modal.Body>
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-2" controlId="formGridAddress1">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control onChange={handleChange} value={formData.name} name='name' placeholder="Sample Product" />
                        </Form.Group>

                        <Form.Group className="mb-2" controlId="formGridAddress2">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" onChange={handleChange} value={formData.description} name='description' rows={3} placeholder="A simple brief" />
                        </Form.Group>
                        <Row className="mb-2">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Price</Form.Label>
                                <Form.Control onChange={handleChange} value={formData.price} name='price' type="text" placeholder="Enter Price" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control onChange={handleChange} value={formData.countInStock} name='countInStock' type="number" placeholder="Enter quantity" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-2">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Brand</Form.Label>
                                <Form.Control onChange={handleChange} value={formData.brand} name='brand' type="text" placeholder="Enter Brand" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Category</Form.Label>
                                <Form.Control onChange={handleChange} value={formData.category} name='category' type="text" placeholder="Enter category" />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-2" controlId="formGridAddress1">
                            <Form.Label>Product Image</Form.Label>
                            <Form.Control type='file' onChange={handleChange} value={formData.image} name='image' placeholder="Sample Product" />
                        </Form.Group>

                        <div className="text-center">
                            <Button variant="primary" disabled={loading && true} type="submit" className='text-uppercase px-4 rounded-0'>
                                {loading ? 'saving changes...' : 'save changes'}
                            </Button>
                        </div>


                    </Form>
                </Modal.Body>

            </Modal>
        </>
    );
}

