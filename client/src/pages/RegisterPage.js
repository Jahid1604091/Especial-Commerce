import React, { useState, useEffect } from 'react'
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { register } from '../actions/user'
import AlertDismissible from '../components/Alert'
import Loader from '../components/Loader'


export default function RegisterPage() {
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const { error, userInfo, loading } = useSelector(state => state.userRegister);
    const [passError,setPassError] = useState(false)
    const location = useLocation();
    const redirect = location.search ? location.search.split('=')[1] : '/profile';
    useEffect(() => {
        if (userInfo?.success) {
            navigate(redirect)
        }
    }, [userInfo,redirect,navigate])

    const submitHandler = (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            setPassError(true)
        }
        else{
            setPassError(false)
            dispatch(register(name,email, password))
        }
    }


    return (
        <Container>
            <Row className='justify-content-md-center' style={{ minHeight: '81vh' }}>
                <Col xs={12} md={6} className='m-auto'>
                        {error && <AlertDismissible message={error} variant='danger' />}
                        {passError && <AlertDismissible message="Password doesn't match" variant='danger' />}
                        {loading && <Loader />}
                    <Form onSubmit={submitHandler}>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Your Name"
                            className="mb-3"
                            type='text'
                            value={name}
                            onChange={e => setName(e.target.value)}
                        >
                            <Form.Control type="text" className='rounded-0' placeholder="name@example.com" />
                        </FloatingLabel>
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

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Confirm Password"
                            className="mb-3"
                            type='password'
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                        >
                            <Form.Control type="password" placeholder="name@example.com" className='rounded-0' />
                        </FloatingLabel>

                        <div className="text-center">
                            <Button type='submit' className='px-4 text-light text-uppercase rounded-0 shadow' variant='primary'>Sign Up</Button>
                        </div>

                    </Form>
                    <Row className='py-3'>
                        <Col>
                            Already a Customer ? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Login</Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

    )
}


