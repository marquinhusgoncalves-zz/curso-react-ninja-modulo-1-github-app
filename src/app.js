'use strict'

import React, { PureComponent } from 'react'
import AppContent from './components/appcontent/app-content'
import ajax from '@fdaciuk/ajax'

import './css/style.css'

class App extends PureComponent {
  constructor () {
    super()
    this.state = {
      title: '...',
      Component: 'div',
      // repos: [{
      //   name: 'Repo',
      //   link: '#'
      // }],
      // starred: [{
      //   name: 'Repo',
      //   link: '#'
      // }]
      userinfo: null,
      repos: [],
      starred: []
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

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    if (keyCode === ENTER) {
      ajax().get(`https://api.github.com/users/${value}`)
      .then((result) => {
        this.setState({
          userinfo: {
            username: result.name,
            photo: result.avatar_url,
            login: result.login,
            repos: result.public_repos,
            followers: result.followers,
            following: result.following
          },
        })
      })
    }
  }

  render () {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
      handleSearch={(e) => this.handleSearch(e)}
    />
  }
}

export default App
