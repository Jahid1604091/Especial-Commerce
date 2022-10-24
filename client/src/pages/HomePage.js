import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import OffCanvas from '../components/Offcanvas';
import Product from '../components/Product'

export default function HomePage() {

    const [products,setProducts] = useState([]);
    const [show, setShow] = useState(false);
    const [product, setProduct] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = (id) => {
        const p = products.find(p => p._id === id)
        setProduct(p)
        handleShow()
    }

    useEffect(()=>{
        const fetchProducts = async () =>{
          const res =  await fetch('/api/products')
          const data = await res.json();
          setProducts(data)

        }

        fetchProducts();
    },[])

    return (
        <Container fluid>
            <Row>
                <h2>Featured Products</h2>
                {
                    products.map(product =>
                        <Col key={product._id} sm={12} md={4} xl={3}>
                            <Product handleClick={handleClick} {...product} />
                        </Col>)
                }
            </Row>

                <OffCanvas show={show}
                 handleClose={handleClose} 
                 product={product}/>
            
        </Container>
    )
}
