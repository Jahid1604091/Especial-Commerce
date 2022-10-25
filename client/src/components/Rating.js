import React from 'react'
import { BsStar, BsStarHalf, BsStarFill } from 'react-icons/bs'
export default function Rating({ rating, reviews }) {
    return (
        <div className='rating d-flex align-items-center justify-content-between'>
            <div>
                <span className='text-warning me-1'>{rating >= 1 ? <BsStarFill size={23}/> : rating >= 0.5 ? <BsStarHalf size={23}/> : <BsStar size={23} />}</span>
                <span  className='text-warning me-1'>{rating >= 2 ? <BsStarFill size={23}/> : rating >= 1.5 ? <BsStarHalf size={23}/> : <BsStar size={23} />}</span>
                <span  className='text-warning me-1'>{rating >= 3 ? <BsStarFill size={23}/> : rating >= 2.5 ? <BsStarHalf size={23}/> : <BsStar size={23} />}</span>
                <span  className='text-warning me-1'>{rating >= 4 ? <BsStarFill size={23}/> : rating >= 3.5 ? <BsStarHalf size={23}/> : <BsStar size={23} />}</span>
                <span  className='text-warning me-1'>{rating >= 5 ? <BsStarFill size={23}/> : rating >= 4.5 ? <BsStarHalf size={23}/> : <BsStar size={23} />}</span>
            </div>

            <div>
                <span className='fw-bold'>{reviews && reviews} </span>reviews
            </div>
        </div>
    )
}
