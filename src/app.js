'use strict'

import React, { PureComponent } from 'react'
import Search from './components/search/search'
import UserInfo from './components/userinfo/user-info'
import Actions from './components/actions/actions'
import Repos from './components/repos/repos'

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
        <Search />
        <UserInfo />
        <Actions />
        <Repos
          className='repos'
          title='Repositórios'
          repos={[{
            link: '#',
            name: 'Nome 1'
          },
          {
            link: '#',
            name: 'Nome 2'
          }
          ]}
        />
        <Repos
          className='starred'
          title='Favoritos'
          repos={[{
            link: '#',
            name: 'Nome 1'
          },
          {
            link: '#',
            name: 'Nome 2'
          }
          ]}
        />
      </div>
    )
  }
}

export default App
