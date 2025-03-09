import React, { useState } from 'react'
import './topfold.css'

const TopFold = () => {
    const [query, setQuery] = useState('')
    const handleQuery = (e) => {
        setQuery(e.target.value);
    }
    return (
        <div className="topfold">
            {window.location.pathname === '/' ? (
                <div className="home-topfold">
                    <div className="searchbar">
                        <i className="fi fi-rr-search"></i>
                        <input
                            value={query}
                            placeholder='Search for expenses' onChange={(e) => handleQuery(e)}
                        />
                    </div>
                    <div className="add-button">
                        <i className="fi-rr-add"></i>
                        <label>Add</label>
                    </div>
                </div>
            ) : (
                <div className='add-topfold'>
                    <div className='add-topfold-button'>
                        <i className='fi-rr-angle-left'></i>
                        <label htmlFor="">Back</label>
                    </div>
                    <div className='add-topfold-button'>
                        <i className='fi-rr-cross-circle'></i>
                        <label htmlFor="">Cancel</label>
                    </div>
                </div>)}
        </div>

    )
}

export default TopFold
