'use strict'

import React, { PureComponent } from 'react'
import AppContent from './components/appcontent/app-content'

import './css/style.css'

class App extends PureComponent {
  constructor () {
    super()
    this.state = {
      title: '...',
      Component: 'div',
      userinfo: {
        username: 'Marquinhus Gonçalves',
        photo: 'https://avatars3.githubusercontent.com/u/10014084?v=4',
        login: 'marquinhusgoncalves',
        repos: 89,
        followers: 10,
        following: 30
      },
      repos: [{
        name: 'Repo',
        link: '#'
      }],
      starred: [{
        name: 'Repo',
        link: '#'
      }]
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
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
    />
  }
}

export default App
