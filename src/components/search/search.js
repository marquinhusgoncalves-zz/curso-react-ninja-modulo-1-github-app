import React, {PropTypes} from 'react'

const Search = ({ isDisabled, handleSearch }) => (
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do usuário do Github'
      disabled={isDisabled}
      onKeyUp={handleSearch}
    />
  </div>
)

Search.proptypes = {
  handleSearch: PropTypes.func.isRequired
}

export default Search
