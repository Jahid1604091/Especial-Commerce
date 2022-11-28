
import React, { useEffect, useState } from 'react';
import { Col,Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { addProductByAdmin } from '../../actions/admin';
import Toast from '../../utils/alert';
import { axios_instance } from '../../utils/axios';
import AlertDismissible from '../Alert';
import Loader from '../Loader';

export default function AddProduct({ show, setShow }) {

  const handleClose = () => setShow(false);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: '',
    price: '',
    countInStock: '',
    brand: '',
    category: '',

  });

  const [uploading, setUploading] = useState(false);

  const { success, loading, error } = useSelector(state => state.addProductByAdmin);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  const handleUploading = async (e) => {
    const file = e.target.files[0]
    const form_data = new FormData()
    form_data.append('image', file)
    setUploading(true);

    try {
      const { data } = await axios_instance.post('/api/upload', form_data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      setFormData({
        ...formData,
        image: data 
      })

      setUploading(false)
    } catch (error) {
      console.log(`Error in uploading : ${error}`)
      setUploading(false)
    }
  }
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addProductByAdmin(formData))
  }

  useEffect(() => {
    if (success) {
      Toast.fire({
        icon: 'success',
        title: 'New Product Added!'
      })

    }
  }, [success])

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
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
              <Form.Control type='file' accept=".png, .jpg, .jpeg" onChange={handleUploading} custom placeholder="Sample Product" />
              {uploading && <Loader/>}
            </Form.Group>

            <div className="text-center">

              <Button variant="primary" disabled={loading && true} type="submit" className='text-uppercase px-4 rounded-0'>
                {loading ? 'saving...' : 'save'}
              </Button>
            </div>


          </Form>
        </Modal.Body>

      </Modal>
    </>
  );
}

