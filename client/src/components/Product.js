import React from 'react'
import { Card } from 'react-bootstrap'
import products from '../products'

export default function Product({ _id, name, image, description, brand, category, price, rating, numReviews }) {
    return (
        <Card className='my-2 p-3' style={{minHeight:"430px"}}>
            <a href={`/products/${_id}`}>
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
                    {rating} rating / {numReviews} reviews
                </div>
            </Card.Text>
        </Card>
    )
}
