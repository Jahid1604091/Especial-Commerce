import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import {Link} from 'react-router-dom'
export default function Product({handleClick, _id, name, image, description, brand, category, price, rating, numReviews }) {
    return (
        <Card className='my-2 p-3 shadow border-0' style={{ minHeight: "430px" }}>
            <a href='#!' onClick={()=>handleClick(_id)}
             style={{
                color: '#000',
                textTransform: 'uppercase',
                fontWeight: 'bold'
            }}>
                <Card.Img src={image} alt={name} variant='top' />
                <Card.Body>
                    <Card.Title as='div'>  {name}</Card.Title>
                </Card.Body>
            </a>
            <Card.Text as='h3'>
                {price} Tk
            </Card.Text>
            <Card.Text as='div'>
                <div>
                    <Rating rating={rating} reviews={numReviews} />
                </div>
            </Card.Text>
        </Card>
    )
}
