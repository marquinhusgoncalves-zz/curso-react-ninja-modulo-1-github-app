import React from 'react'

const UserInfo = () => (
  <div className='user-info'>
    <img src='https://avatars3.githubusercontent.com/u/10014084?v=4' alt='Foto do Perfil' />
    <h1 className='user-name'><a href='https://api.github.com/users/marquinhusgoncalves'>Marquinhus Gonçalves</a></h1>
    <ul className='repos-info'>
      <li>- Repositórios: 92</li>
      <li>- Seguidores: 55</li>
      <li>- Seguindo: 159</li>
    </ul>
  </div>
)

export default UserInfo
