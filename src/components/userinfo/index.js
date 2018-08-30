import React, {PropTypes} from 'react'
import style from './userinfo.css'

const UserInfo = ({userinfo}) => (
  <div className={style.userInfo}>
    <img src={userinfo.photo} alt='Foto do Perfil' />
    <h1 className={style.userName}><a href={`https://github.com/${userinfo.login}`}>{userinfo.username}</a></h1>
    <ul className={style.reposInfo}>
      <li>Repositórios: {userinfo.repos}</li>
      <li>Seguidores: {userinfo.followers}</li>
      <li>Seguindo: {userinfo.following}</li>
    </ul>
  </div>
)

UserInfo.proptypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
}

export default UserInfo
