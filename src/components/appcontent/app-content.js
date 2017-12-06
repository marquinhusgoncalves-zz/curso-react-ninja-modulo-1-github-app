import React, {PropTypes} from 'react'
import Search from '../search/search'
import UserInfo from '../userinfo/user-info'
import Actions from '../actions/actions'
import Repos from '../repos/repos'

const AppContent = ({
  userinfo,
  repos,
  starred,
  handleSearch,
  getRepos,
  getStarred
}) => (
  <div className='app'>
    <Search handleSearch={handleSearch} />
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}
    {!!repos.length && <Repos
      className='repos'
      title='Repositórios'
      repos={repos}
    />}
    {!!repos.length && <Repos
      className='starred'
      title='Favoritos'
      repos={starred}
    />}
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
}

export default AppContent
