import React, {PropTypes} from 'react'

const Search = ({ handleSearch }) => (
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do usuário do Github'
      onKeyUp={handleSearch}
    />
  </div>
)

Search.proptypes = {
  handleSearch: PropTypes.func.isRequired
}

export default Search