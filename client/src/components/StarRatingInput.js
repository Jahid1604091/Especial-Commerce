import React from 'react'
import styled from 'styled-components'
export default function StarRatingInput({setRating}) {
    return (
        <Wrapper>
            <div className="rating">
                <label>
                    <input type="radio" name="rating" value="1" onChange={e=>setRating(e.target.value)} />
                    <span className="icon">★</span>
                </label>
                <label>
                    <input type="radio" name="rating" value="2" onChange={e=>setRating(e.target.value)} />
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                </label>
                <label>
                    <input type="radio" name="rating" value="3" onChange={e=>setRating(e.target.value)} />
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                </label>
                <label>
                    <input type="radio" name="rating" value="4" onChange={e=>setRating(e.target.value)} />
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                </label>
                <label>
                    <input type="radio" name="rating" value="5" onChange={e=>setRating(e.target.value)} />
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                    <span className="icon">★</span>
                </label>
            </div>
        </Wrapper>
    )

}

const Wrapper = styled.section`
    .rating {
        display: inline-block;
        position: relative;
        height: 50px;
        line-height: 50px;
        font-size: 50px;
    }

    .rating label {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        cursor: pointer;
    }

    .rating label:last-child {
        position: static;
    }

    .rating label:nth-child(1) {
        z-index: 5;
    }

    .rating label:nth-child(2) {
        z-index: 4;
    }

    .rating label:nth-child(3) {
        z-index: 3;
    }

    .rating label:nth-child(4) {
        z-index: 2;
    }

    .rating label:nth-child(5) {
        z-index: 1;
    }

    .rating label input {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
    }

    .rating label .icon {
        float: left;
        color: transparent;
    }

    .rating label:last-child .icon {
        color: #000;
    }

    .rating:not(:hover) label input:checked ~ .icon,
    .rating:hover label:hover input ~ .icon {
        color: #09f;
    }

    .rating label input:focus:not(:checked) ~ .icon:last-child {
        color: #000;
        text-shadow: 0 0 5px #09f;
    }
`
