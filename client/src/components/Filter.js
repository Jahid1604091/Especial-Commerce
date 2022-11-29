import React from 'react'
import styled from 'styled-components'
// import { useFilterContext } from '../context/filter_context'
// import { getUniqueValues } from '../utils/helpers'
import { FaCheck } from 'react-icons/fa'

const Filter = () => {
    // const {
    //     filters: { text, category, location,area, min_price, max_price, price, negotiable }
    //     , updateFilters, clearFilters, all_posts } = useFilterContext();
    // const unique_categories = getUniqueValues(all_posts, 'category');
    // const unique_locations = getUniqueValues(all_posts, 'location');
    // const unique_areas = getUniqueValues(all_posts, 'area');
    

    return <Wrapper>
        <div className="content">
            <form onSubmit={e => e.preventDefault()}>
                {/* search */}
                <div className="form-controls">
                    {/* <input type="text" name='text'
                        placeholder='Search...'
                        className='search-input'
                        value={text}
                        onChange={updateFilters}
                    /> */}
                </div>

                {/* categories */}
                <div className="form-controls">
                    <h5>Category</h5>
                    <div>
                        {/* {
                            unique_categories?.map((c, idx) => {
                                return <button type='button'
                                    key={idx} name='category'
                                    className={`${category.toLowerCase() === c.toLowerCase() ? 'active':null}`}
                                    onClick={updateFilters}>{c}</button>
                            })
                        } */}

                    </div>
                </div>

                {/* locations */}
                <div className="form-controls">
                    <h5>Locations</h5>
                    {/* <select name="location" value={location} onChange={updateFilters} className='location'>
                        {
                            unique_locations?.map((l,idx)=>{
                                return <option key={idx} value={l}>{l}</option>
                            })
                        }
                    </select> */}
                </div>

                {/* area */}
                <div className="form-controls">
                    <h5>Area</h5>
                    {/* <select name="area" value={area} onChange={updateFilters} className='location'>
                        {
                            unique_areas?.map((l,idx)=>{
                                return <option key={idx} value={l}>{l}</option>
                            })
                        }
                    </select> */}
                </div>

                   {/* price */}
                <div className="form-controls">
                    <h5>Price</h5>
                    {/* <p className="price">Tk {price}</p> */}
                    {/* <input type="range" 
                    name='price' 
                    min={min_price}
                    max={max_price}
                    value={price}
                    onChange={updateFilters} /> */}
                </div>

                {/* negotiable */}
                <div className="form-controls negotiable">
                    <label htmlFor="negotiation">Negotiable</label>
                    {/* <input type="checkbox" name='negotiable' onChange={updateFilters} checked={negotiable} /> */}
                </div>
            </form>
            {/* <button type='button' className='clear-btn' onClick={clearFilters}>clear filters</button> */}
        </div>
    </Wrapper>
}

const Wrapper = styled.section`
  .form-controls {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
    width:200px ;
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .location {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
    text-transform:capitalize ;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .negotiable {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`

export default Filter
