import React from 'react'
import { Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {BiCartAlt,BiCommentDots} from 'react-icons/bi';
import Badge from 'react-bootstrap/Badge';
export default function OffCanvas({ show, handleClose, product }) {
    return (
        <div>
            <Offcanvas placement='end' show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title as='h4'>{product?.name}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <img src={product?.image} alt="" className='fluid my-2' width='150' />
                    <p>  {(product?.description)}</p>
                    <p>  {product?.countInStock > 0 ? <span> <Badge bg="info">{product?.countInStock}</Badge>  in Stock</span>  : <span className='text-danger'>Not Available</span>}</p>
                    <>
                        <Button title='Add To Cart' variant='dark' className='rounded-0'><BiCartAlt/> </Button>
                        <Button  title='Add A Comment' variant='outline-secondary' className='rounded-0 ms-2'><BiCommentDots/> </Button>
                    </>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}
