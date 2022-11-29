import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import styled from 'styled-components';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap';
const Hero = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState('')
    const handleSearch = (e) => {
        e.preventDefault()
        //dispatch
        if (query.trim()) {
            navigate(`/search/${query}`)
        }
        else {
            navigate('/')
        }

    }
    return (
        <Wrapper className='section'>
            <Container>
                <Row>
                    <Col md={6} className='mx-auto'>
                        <Form onSubmit={handleSearch}>
                            <InputGroup className="mb-2 search-input-group">
                                <Form.Control
                                    placeholder="Start Searching Now"
                                    value={query}
                                    onChange={e => setQuery(e.target.value)}
                                    className='search-box'
                                />
                                <Button type='submit' className='search-btn'><FaSearch /></Button>
                            </InputGroup>


                        </Form>

                        <div className='popular d-none d-md-block'>

                            <ul className='d-flex align-items-center justify-content-center'>
                                <li>Samsung</li>
                                <li>Huawei</li>
                                <li>Nokia</li>
                                <li>Xiaomi</li>

                            </ul>
                        </div>
                        <div className="text-center">

                            <Link to='/posts' className='btn hero-btn'>buy now</Link>
                        </div>

                    </Col>
                    {/* <Col md={4}><Slider /></Col> */}
                </Row>
            </Container>

        </Wrapper>
    )
}

const Wrapper = styled.section`
   background-color:var(--clr-primary-10) ;
    .search-input-group{
        border:1px solid var(--clr-black) ;
       
    }
    .search-box{
        background-color:var(--clr-white);
       
    }
    .search-btn{
        background-color:var(--clr-primary-5);
        border-radius:0 ;
        color:var(--clr-white);
        border:0 ;
    }
    .popular{
        margin-bottom:10px ;
        align-items:center ;
        ul{
            padding-left:0 ;
          

        }
        li{
           
            color:red ;
            box-shadow:var(--dark-shadow);
            margin:0 10px ;
            padding:10px ;
            border-radius:20px;
            color:var(--clr-primary-4);
            cursor:pointer ;
            font-weight:600 ;
       
        }
    }
    .category{
        img{
            width:150px;
            height:150px;
            border-radius:50% ;
        }

    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      margin-right:5px ;
      border:1px solid var(--clr-primary-7); 
      background-color:var(--clr-primary-5);
      color: var(--clr-primary-10);
      border-radius:0 ;
    }
    .outline {
      border-radius:0 ;
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      font-weight:600 ;
      color: var(--clr-primary-5); ;
      background-color:transparent ;
      border:1px solid var(--clr-primary-7); 
      &:hover{
        background-color:var(--clr-primary-7);
        color: var(--clr-primary-10);
      }
    }
`

export default Hero