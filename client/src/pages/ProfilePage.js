import React, { useState, useEffect } from 'react'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { getProfile, updateProfile } from '../actions/user'
import AlertDismissible from '../components/Alert'
import Loader from '../components/Loader'


export default function ProfilePage() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const { userInfo } = useSelector(state => state.userLogin);
    const { error, user, loading } = useSelector(state => state.userProfile);
    const { error: updateError, success } = useSelector(state => state.userProfileUpdate);


    const location = useLocation();

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const redirect = location.search ? location.search.split('=')[1] : '/login';

    useEffect(() => {
        if (userInfo.length === 0) {
            navigate('/login')
        }
        else {
           
           
            if (!user.success) {
                dispatch(getProfile())
            }
            else {
                setName(user?.data.name)
                setEmail(user?.data.email)
             
            }
        }

    }, [userInfo,user, navigate, dispatch])

    console.log(user)
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateProfile({ name, email, password }))
    }

    return (
        <Container>
            <Row className='justify-content-md-center' style={{ minHeight: '81vh' }}>
                <Col xs={12} md={5} className='m-auto'>
                    {updateError && <AlertDismissible message={updateError} variant='danger' />}
                    {success && <AlertDismissible message='Profile Updated !' variant='success' />}
                    {loading && <Loader />}
                    <h4>My Profile</h4>
                    <p>Image</p>
                    <Form onSubmit={submitHandler}>

                        <FloatingLabel
                            controlId="floatingInput"
                            label='Name'
                            className="mb-3"
                            type='text'

                        >
                            <Form.Control type="text" value={name}
                                onChange={e => setName(e.target.value)} className='rounded-0' placeholder="name@example.com" />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label='Email'
                            className="mb-3"
                            type='email'

                        >
                            <Form.Control type="email" value={email}
                                onChange={e => setEmail(e.target.value)} className='rounded-0' placeholder="name@example.com" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Password"
                            className="mb-3"
                            type='password'

                        >
                            <Form.Control type="password" value={password}
                                onChange={e => setPassword(e.target.value)} placeholder="name@example.com" className='rounded-0' />
                        </FloatingLabel>

                        <div className="text-center">
                            <Button type='submit' className='px-4 text-light text-uppercase rounded-0 shadow' variant='primary'>Save Changes</Button>
                        </div>

                    </Form>

                </Col>


                {/* orders */}
                <Col xs={12} md={6} className='m-auto'>
                    {error && <AlertDismissible message={error} variant='danger' />}
                    {loading && <Loader />}
                    <h2>My Orders</h2>
                    <Form onSubmit={submitHandler}>




                        <div className="text-center">
                            <Button type='submit' className='px-4 text-light text-uppercase rounded-0 shadow' variant='primary'>Save Changes</Button>
                        </div>

                    </Form>

                </Col>
            </Row>
        </Container>

    )
}


