import React from 'react'

function Search ({ handleSearchInputChange }) {
  return (
    <div className='search-bar form-inline'>
      <input
        className='form-control'
        type='text'
        onChange={(e) => handleSearchInputChange(e.target.value)}
      />
      <button className='btn hidden-sm-down'>
        <span className='glyphicon glyphicon-search' />
      </button>
    </div>
  )
}

export default Search
