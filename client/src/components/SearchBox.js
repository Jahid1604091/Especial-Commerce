import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

export default function SearchBox() {
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
        <div>
            <Form className="d-flex shadow" onSubmit={handleSearch}>
                <Form.Control
                    type="search"
                    placeholder="Search Products"
                    className="rounded-0"
                    aria-label="Search"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <Button type='submit' variant="outline-primary text-uppercase rounded-0">Search</Button>
            </Form>
        </div>
    )
}
