import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTopProducts } from '../actions/products';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Image } from 'react-bootstrap';
import Error from './Error';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import { URL } from '../utils/constants';

export default function TopProductsCarousel() {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector(state => state.topProducts)
    useEffect(() => {
        dispatch(getTopProducts());
    }, [])
    if (loading) {
        return <Loader />
    }
    if (error) {
        return <Error variant='danger' children={
            <>
                <h2>Oops!!!</h2>
                <h3>Something Went Wrong</h3>
                <Link to='/' className='btn btn-outline-info'>Go Back</Link>
            </>
        } />
    }
    return (
        <div>
            <Carousel 
            transitionTime={1000}
            autoPlay='true'
            infiniteLoop='true'
            centerMode='true'
            centerSlidePercentage={50}
            dynamicHeight='true' 
            
           >
                {
                    products.map(p => (
                        <div key={p._id}>
                           <Image src={URL+ p.image} height='350'/>
                            <p className="legend">{p.name}</p>
                        </div>

                    ))
                }

            </Carousel>
        </div>
    )
}
