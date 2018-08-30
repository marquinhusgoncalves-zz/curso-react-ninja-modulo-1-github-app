import React, {PropTypes} from 'react'
import Search from '../search'
import UserInfo from '../userinfo'
import Actions from '../actions'
import Repos from '../repos'

const AppContent = ({
  userinfo,
  repos,
  starred,
  isFetching,
  handleSearch,
  getRepos,
  getStarred
}) => (
  <div className='app'>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {isFetching && <div> Carregando...</div>}
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
  starred: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired,
  getStarred: PropTypes.func.isRequired

}

export default AppContent
