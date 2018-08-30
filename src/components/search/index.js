import React, {PropTypes} from 'react'
import style from './search.css'

const Search = ({ isDisabled, handleSearch }) => (
  <div className={style.search}>
    <input
      type='search'
      placeholder='Digite o nome do usuário do Github'
      disabled={isDisabled}
      onKeyUp={handleSearch}
    />
  </div>
)

Search.proptypes = {
  isDisabled: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired
}

export default Search
