import React, { useState, useEffect } from 'react'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import AlertDismissible from '../components/Alert'
import Loader from '../components/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { login } from '../actions/user'


export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { error, userInfo, loading } = useSelector(state => state.userLogin);

    const location = useLocation();
    const redirect = location.search ? location.search.split('=')[1] : '/profile';
    useEffect(() => {
        if (userInfo.success) {
            navigate(redirect)
        }
    }, [userInfo,redirect,navigate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))

    }


    return (
        <Container>
            <Row className='justify-content-md-center' style={{ minHeight: '81vh' }}>
                <Col xs={12} md={6} className='m-auto'>
                        {error && <AlertDismissible message={error} variant='danger' />}
                        {loading && <Loader />}
                    <Form onSubmit={submitHandler}>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                            type='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        >
                            <Form.Control type="email" className='rounded-0' placeholder="name@example.com" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Password"
                            className="mb-3"
                            type='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        >
                            <Form.Control type="password" placeholder="name@example.com" className='rounded-0' />
                        </FloatingLabel>

                        <div className="text-center">
                            <Button type='submit' className='px-4 text-light text-uppercase rounded-0 shadow' variant='primary'>Sign In</Button>
                        </div>

                    </Form>
                    <Row className='py-3'>
                        <Col>
                            New Customer ? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Register</Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

    )
}


