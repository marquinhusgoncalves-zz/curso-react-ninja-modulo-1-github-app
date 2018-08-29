import React, {PropTypes} from 'react'

const Action = ({ getRepos, getStarred }) => (
  <div className='actions'>
    <button onClick={getRepos}>Ver repositórios</button>
    <button onClick={getStarred}>Ver favoritos</button>
  </div>
)

Action.propTypes = {
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired
}

export default Action
