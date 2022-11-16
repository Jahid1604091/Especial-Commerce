import React from 'react'
import { Pagination } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

export default function Paginate({ pages, page, query = '',isAdmin=false }) {
    const navigate = useNavigate();
    const handleClick = (x) => {
       !isAdmin ? query ? navigate(`/search/${query}/page/${x + 1}`) : navigate(`/page/${x + 1}`) : navigate(`/admin/products/${x+1}`)
    }
    return pages > 1 && (
        <Pagination className="d-flex justify-content-center">
            {
                [...Array(pages).keys()].map(x => (

                    <Pagination.Item onClick={()=>handleClick(x)} key={x} active={x + 1 === page}>{x + 1}</Pagination.Item>

                ))
            }
        </Pagination>

    )
}
