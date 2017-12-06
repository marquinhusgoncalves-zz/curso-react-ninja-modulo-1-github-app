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
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false
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

  getGitHubApiUrl (username, type) {
    const internalUserName = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUserName}${internalType}`
  }

  handleSearch (e) {
    const username = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    // Evitar erro com o event.target
    // e.persist()
    // const target = e.target

    if (keyCode === ENTER) {
      // target.disabled = true

      this.setState({ isFetching: true })

      ajax().get(this.getGitHubApiUrl(username))
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
          repos: [],
          starred: []
        })
      })
      .always(() => {
        // target.disabled = false
        this.setState({ isFetching: false })
      })
    }
  }

  getRepos (type) {
    return (e) => {
      const username = this.state.userinfo.login
      ajax().get(this.getGitHubApiUrl(username, type))
      .then((result) => {
        this.setState({
          [type]: result.map((repo) => {
            return {
              name: repo.name,
              link: repo.html_url
            }
          })
        })
      })
    }
  }

  render () {
    return <AppContent
      // Spread Operator
      {...this.state}
      // userinfo={this.state.userinfo}
      // repos={this.state.repos}
      // starred={this.state.starred}
      // isFetching={this.state.isFetching}
      handleSearch={(e) => this.handleSearch(e)}
      getRepos={this.getRepos('repos')}
      getStarred={this.getRepos('starred')}
    />
  }
}

export default App
