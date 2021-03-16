import React from 'react'

export const SearchBox = ({placeholder, handleChange}) => {
    return (
        <input 
            type="search"
            onChange={handleChange} 
        />
    )
}