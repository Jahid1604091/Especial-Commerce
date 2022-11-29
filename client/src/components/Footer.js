import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FaCopyright,FaMapMarkerAlt, FaPhoneAlt, FaEnvelope,FaChevronRight,FaFacebookSquare,FaLinkedin,FaTwitterSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import payments from '../assets/payments.png'
export default function Footer() {
    return (
        <Wrapper className='p-2 bg-light'>
            <Container>
                <Row className='footer'>
                    <Col md={3} className='mx-auto'>
                        <h5><strong>Modern Mobile Mart</strong></h5>
                        <h6>Modern Web BD</h6>
                        <p><FaMapMarkerAlt /> 02/092 - Mymensingh, Bangladesh</p>
                        <p><FaPhoneAlt /> +8801975-150941</p>
                        <p><FaEnvelope /> jahid.modernweb@gmail.com</p>
                    </Col>
                    <Col md={3} className='mx-auto'>
                        <h5>About</h5>
                        <ul>
                            <li><Link to='/about'><FaChevronRight size={12}/>About Us</Link></li>
                            <li><Link to='/about'><FaChevronRight size={12}/>Privacy Policy</Link></li>
                            <li><Link to='/about'><FaChevronRight size={12}/>Terms and Conditions</Link></li>
                            <li><Link to='/about'><FaChevronRight size={12}/>Why Choose Us</Link></li>
                        </ul>
                    </Col>
                    <Col md={3} className='mx-auto'>
                        <h5>Support</h5>
                        <ul>
                            <li><Link to='/about'><FaChevronRight size={12}/>Payment</Link></li>
                            <li><Link to='/about'><FaChevronRight size={12}/>Shipping</Link></li>
                            <li><Link to='/about'><FaChevronRight size={12}/>Returns</Link></li>
                            <li><Link to='/about'><FaChevronRight size={12}/>FAQ</Link></li>
                        </ul>
                    </Col>
                    <Col md={3} className='mx-auto'>
                        <h5>In Social Media</h5>
                        <ul className='social-icons'>
                            <li><Link to='/about'><FaFacebookSquare/> </Link></li>
                            <li><Link to='/about'><FaLinkedin/> </Link></li>
                            <li><Link to='/about'><FaTwitterSquare/> </Link></li>
                        </ul>

                        <h5>Payment Methods</h5>
                        <ul className='payment-method-icons'>
                            <li> <img src={payments} alt="" width='180' /> </li>
                        </ul>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <p className='text-center text-dark my-auto py-auto'><FaCopyright/> 2021 - {new Date().getFullYear()} | Modern Mobile Mart :: All rights reserved </p>
                    </Col>
                </Row>

            </Container>

        </Wrapper>
    )
}

const Wrapper = styled.section`
    .footer{
        border-bottom:1px solid var(--clr-primary-5) ;
        .social-icons{
            display:flex;
            li{
                margin-right:5px ;
            }
        }
    }
`