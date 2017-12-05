import React, {PropTypes} from 'react'
import Search from '../search/search'
import UserInfo from '../userinfo/user-info'
import Actions from '../actions/actions'
import Repos from '../repos/repos'

const AppContent = ({ userinfo, repos, starred }) => (
  <div className='app'>
    <Search />
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions />}
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
  userinfo: PropTypes.object.isRequired,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
}

export default AppContent
