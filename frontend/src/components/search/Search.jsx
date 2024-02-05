import React from 'react'
import './Search.scss'
const Search = () => {
    return (
        <div className='search'>
            <div className="inputs">
                <div className="icon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <input type="text" placeholder='Search' />
            </div>
            
        </div>
    )
}

export default Search