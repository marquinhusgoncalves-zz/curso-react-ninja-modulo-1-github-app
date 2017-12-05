import React from 'react'

const UserInfo = ({userinfo}) => (
  <div className='user-info'>
    <img src='https://avatars3.githubusercontent.com/u/10014084?v=4' alt='Foto do Perfil' />
    <h1 className='user-name'><a href={userinfo.link}>{userinfo.username}</a></h1>
    <ul className='repos-info'>
      <li>Repositórios: {userinfo.repos}</li>
      <li>Seguidores: {userinfo.followers}</li>
      <li>Seguindo: {userinfo.following}</li>
    </ul>
  </div>
)

export default UserInfo
