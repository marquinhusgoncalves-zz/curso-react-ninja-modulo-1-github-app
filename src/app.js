'use strict'

import React, { PureComponent } from 'react'

import './css/style.css'

class App extends PureComponent {
  constructor () {
    super()
    this.state = {
      title: '...',
      Component: 'div'
    }
  }

  getTitle () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('My app with async / await!')
      }, 2000)
    })
  }

  async componentDidMount () {
    const title = await import('components/title')

    this.setState({
      title: await this.getTitle(),
      Component: title.default
    })
  }

  render () {
    return (
      // <div>
      //   <this.state.Component>{this.state.title}</this.state.Component>
      // </div>
      <div className='app'>
        <div className='search'>
          <input
            type='search'
            placeholder='Digite o nome do usuário'/>
        </div>
        <div className='user-info'>
          <img src='https://avatars3.githubusercontent.com/u/10014084?v=4' alt='Foto do Perfil'/>
          <h1><a href='https://api.github.com/users/marquinhusgoncalves'>Marquinhus Gonçalves</a></h1>
          <ul className='repos-info'>
            <li>- Repositórios: 92</li>
            <li>- Seguidores: 55</li>
            <li>- Seguindo: 159</li>
          </ul>
          <div className='actions'>
            <button>Ver repositórios</button>
            <button>Ver favoritos</button>
          </div>
          <div className='repos'>
            <h2>Repositórios:</h2>
            <ul>
              <li><a href='#'> Nome do repositório</a></li>
            </ul>
          </div>
          <div className='starred'>
            <h2>Favoritos:</h2>
            <ul>
              <li><a href='#'>Nome do repositório</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App
